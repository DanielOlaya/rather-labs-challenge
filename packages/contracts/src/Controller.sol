// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/**
 * @title IRouter
 * @dev Interface for Router contract
 */
interface IRouter {
    function sendMessage(uint256 toChain, address recipient, bytes calldata data, uint8 operationType) external returns (uint256 nonce);
}

/**
 * @title Controller
 * @dev Main controller contract for cross-chain lending operations
 * Handles collateral management and operation lifecycle
 */
contract Controller {
    
    // Events for Add Collateral operation
    event AddCollateral(
        address indexed user,
        address indexed token,
        uint256 amount,
        uint256 indexed operationId,
        uint256 timestamp
    );
    
    event CollateralAdded(
        address indexed user,
        address indexed token,
        uint256 amount,
        uint256 indexed operationId,
        uint256 timestamp
    );
    
    event CollateralRejected(
        address indexed user,
        address indexed token,
        uint256 amount,
        uint256 indexed operationId,
        string reason,
        uint256 timestamp
    );
    
    // Events for Borrow operation
    event Borrow(
        address indexed user,
        address indexed token,
        uint256 amount,
        uint256 indexed operationId,
        uint256 collateralAmount,
        uint256 timestamp
    );
    
    event BorrowUpdated(
        address indexed user,
        address indexed token,
        uint256 amount,
        uint256 indexed operationId,
        uint256 newCollateralAmount,
        uint256 timestamp
    );
    
    event BorrowRejected(
        address indexed user,
        address indexed token,
        uint256 amount,
        uint256 indexed operationId,
        string reason,
        uint256 timestamp
    );
    
    // Events for Withdraw operation
    event Withdraw(
        address indexed user,
        address indexed token,
        uint256 amount,
        uint256 indexed operationId,
        uint256 timestamp
    );
    
    event WithdrawRejected(
        address indexed user,
        address indexed token,
        uint256 amount,
        uint256 indexed operationId,
        string reason,
        uint256 timestamp
    );
    
    event Withdrawn(
        address indexed user,
        address indexed token,
        uint256 amount,
        uint256 indexed operationId,
        uint256 timestamp
    );
    
    // General operation events
    event OperationStarted(
        uint256 indexed operationId,
        address indexed user,
        uint8 operationType, // 0: AddCollateral, 1: Borrow, 2: Withdraw
        uint256 fromChain,
        uint256 toChain,
        uint256 timestamp
    );
    
    event OperationCompleted(
        uint256 indexed operationId,
        address indexed user,
        uint8 operationType,
        bool success,
        uint256 timestamp
    );
    
    // State variables
    mapping(uint256 => bool) public operations;
    mapping(address => uint256) public userCollateral;
    uint256 public nextOperationId;
    
    // Router contract reference
    address public routerContract;
    
    // Operation types
    uint8 public constant ADD_COLLATERAL = 0;
    uint8 public constant BORROW = 1;
    uint8 public constant WITHDRAW = 2;
    
    /**
     * @dev Constructor
     */
    constructor() {
        routerContract = address(0);
        nextOperationId = 1;
    }
    
    /**
     * @dev Add collateral for a user
     */
    function addCollateral(
        address token,
        uint256 amount,
        uint256 fromChain,
        uint256 toChain,
        uint256 status
    ) external {
        _addCollateral(token, amount, fromChain, toChain, status);
    }
    
    /**
     * @dev Internal add collateral implementation
     */
    function _addCollateral(
        address token,
        uint256 amount,
        uint256 fromChain,
        uint256 toChain,
        uint256 status
    ) internal {
        require(amount > 0, "Amount must be greater than 0");
        
        uint256 operationId = nextOperationId++;
        
        // Always start the operation
        emit OperationStarted(
            operationId,
            msg.sender,
            ADD_COLLATERAL,
            fromChain,
            toChain,
            block.timestamp
        );
        
        // Emit add collateral intent
        emit AddCollateral(
            msg.sender,
            token,
            amount,
            operationId,
            block.timestamp
        );
        
        // Handle based on status
        if (status == 0) { // 0 = init
            // Initial call - validate and send cross-chain message
            if (amount < 1000) { // Minimum collateral requirement
                emit CollateralRejected(
                    msg.sender,
                    token,
                    amount,
                    operationId,
                    "Insufficient collateral amount",
                    block.timestamp
                );
                
                emit OperationCompleted(
                    operationId,
                    msg.sender,
                    ADD_COLLATERAL,
                    false,
                    block.timestamp
                );
                return;
            }
            
            // Send cross-chain message via router
            if (routerContract != address(0) && fromChain != toChain) {
                bytes memory messageData = abi.encode(ADD_COLLATERAL, msg.sender, token, amount, operationId);
                IRouter(routerContract).sendMessage(toChain, address(this), messageData, ADD_COLLATERAL);
            }
            
            // Don't emit OperationCompleted yet - wait for finish status
            
        } else if (status == 1) { // 1 = finish
            // Final processing - actually add collateral and complete operation
            userCollateral[msg.sender] += amount;
            operations[operationId] = true;
            
            emit CollateralAdded(
                msg.sender,
                token,
                amount,
                operationId,
                block.timestamp
            );
            
            emit OperationCompleted(
                operationId,
                msg.sender,
                ADD_COLLATERAL,
                true,
                block.timestamp
            );
        }
    }
    
    /**
     * @dev Borrow against collateral with status flag
     */
    function borrow(
        address token,
        uint256 amount,
        uint256 collateralAmount,
        uint256 fromChain,
        uint256 toChain,
        uint256 status
    ) external {
        _borrow(token, amount, collateralAmount, fromChain, toChain, status);
    }
    
    /**
     * @dev Internal borrow implementation
     */
    function _borrow(
        address token,
        uint256 amount,
        uint256 collateralAmount,
        uint256 fromChain,
        uint256 toChain,
        uint256 status
    ) internal {
        require(amount > 0, "Amount must be greater than 0");
        
        uint256 operationId = nextOperationId++;
        
        // Always start the operation
        emit OperationStarted(
            operationId,
            msg.sender,
            BORROW,
            fromChain,
            toChain,
            block.timestamp
        );
        
        // Emit borrow intent
        emit Borrow(
            msg.sender,
            token,
            amount,
            operationId,
            collateralAmount,
            block.timestamp
        );
        
        // Handle based on status
        if (status == 0) { // 0 = init
            // Initial call - validate and send cross-chain message
            
            // Check collateral requirement
            if (userCollateral[msg.sender] < collateralAmount) {
                emit BorrowRejected(
                    msg.sender,
                    token,
                    amount,
                    operationId,
                    "Insufficient collateral",
                    block.timestamp
                );
                
                emit OperationCompleted(
                    operationId,
                    msg.sender,
                    BORROW,
                    false,
                    block.timestamp
                );
                return;
            }
            
            // Additional validation (e.g., LTV ratio)
            if (amount > collateralAmount * 75 / 100) { // 75% LTV max
                emit BorrowRejected(
                    msg.sender,
                    token,
                    amount,
                    operationId,
                    "Exceeds maximum LTV ratio",
                    block.timestamp
                );
                
                emit OperationCompleted(
                    operationId,
                    msg.sender,
                    BORROW,
                    false,
                    block.timestamp
                );
                return;
            }
            
            // Send cross-chain message via router
            if (routerContract != address(0) && fromChain != toChain) {
                bytes memory messageData = abi.encode(BORROW, msg.sender, token, amount, operationId);
                IRouter(routerContract).sendMessage(toChain, address(this), messageData, BORROW);
            }
            
            // Don't emit OperationCompleted yet - wait for finish status
            
        } else if (status == 1) { // 1 = finish
            // Final processing - complete borrow operation
            operations[operationId] = true;
            
            emit BorrowUpdated(
                msg.sender,
                token,
                amount,
                operationId,
                collateralAmount,
                block.timestamp
            );
            
            emit OperationCompleted(
                operationId,
                msg.sender,
                BORROW,
                true,
                block.timestamp
            );
        }
    }
    
    /**
     * @dev Update existing borrow position
     */
    function updateBorrow(
        address token,
        uint256 newAmount,
        uint256 newCollateralAmount,
        uint256 existingOperationId
    ) external {
        require(newAmount > 0, "Amount must be greater than 0");
        require(operations[existingOperationId], "Operation does not exist");
        
        uint256 operationId = nextOperationId++;
        
        emit OperationStarted(
            operationId,
            msg.sender,
            BORROW,
            block.chainid,
            block.chainid,
            block.timestamp
        );
        
        emit BorrowUpdated(
            msg.sender,
            token,
            newAmount,
            operationId,
            newCollateralAmount,
            block.timestamp
        );
        
        emit OperationCompleted(
            operationId,
            msg.sender,
            BORROW,
            true,
            block.timestamp
        );
    }
    
    /**
     * @dev Withdraw collateral with status flag
     */
    function withdraw(
        address token,
        uint256 amount,
        uint256 fromChain,
        uint256 toChain,
        uint256 status
    ) external {
        _withdraw(token, amount, fromChain, toChain, status);
    }
    
    /**
     * @dev Internal withdraw implementation
     */
    function _withdraw(
        address token,
        uint256 amount,
        uint256 fromChain,
        uint256 toChain,
        uint256 status
    ) internal {
        require(amount > 0, "Amount must be greater than 0");
        
        uint256 operationId = nextOperationId++;
        
        // Always start the operation
        emit OperationStarted(
            operationId,
            msg.sender,
            WITHDRAW,
            fromChain,
            toChain,
            block.timestamp
        );
        
        // Emit withdraw intent
        emit Withdraw(
            msg.sender,
            token,
            amount,
            operationId,
            block.timestamp
        );
        
        // Handle based on status
        if (status == 0) { // 0 = init
            // Initial call - validate and send cross-chain message
            
            // Check if user has sufficient balance
            if (userCollateral[msg.sender] < amount) {
                emit WithdrawRejected(
                    msg.sender,
                    token,
                    amount,
                    operationId,
                    "Insufficient balance",
                    block.timestamp
                );
                
                emit OperationCompleted(
                    operationId,
                    msg.sender,
                    WITHDRAW,
                    false,
                    block.timestamp
                );
                return;
            }
            
            // Additional validation (e.g., ensure withdrawal doesn't break collateral requirements)
            uint256 remainingCollateral = userCollateral[msg.sender] - amount;
            if (remainingCollateral < 500) { // Minimum collateral requirement
                emit WithdrawRejected(
                    msg.sender,
                    token,
                    amount,
                    operationId,
                    "Would leave insufficient collateral",
                    block.timestamp
                );
                
                emit OperationCompleted(
                    operationId,
                    msg.sender,
                    WITHDRAW,
                    false,
                    block.timestamp
                );
                return;
            }
            
            // Send cross-chain message via router
            if (routerContract != address(0) && fromChain != toChain) {
                bytes memory messageData = abi.encode(WITHDRAW, msg.sender, token, amount, operationId);
                IRouter(routerContract).sendMessage(toChain, address(this), messageData, WITHDRAW);
            }
            
            // Don't emit OperationCompleted yet - wait for finish status
            
        } else if (status == 1) { // 1 = finish
            // Final processing - actually withdraw collateral and complete operation
            userCollateral[msg.sender] -= amount;
            operations[operationId] = true;
            
            emit Withdrawn(
                msg.sender,
                token,
                amount,
                operationId,
                block.timestamp
            );
            
            emit OperationCompleted(
                operationId,
                msg.sender,
                WITHDRAW,
                true,
                block.timestamp
            );
        }
    }
    
    /**
     * @dev Set the router contract address
     */
    function setRouterContract(address _routerContract) external {
        require(_routerContract != address(0), "Router contract cannot be zero address");
        routerContract = _routerContract;
    }
    
    /**
     * @dev Get the current router contract address
     */
    function getRouterContract() external view returns (address) {
        return routerContract;
    }
    
    /**
     * @dev Get user's collateral balance
     */
    function getCollateralBalance(address user) external view returns (uint256) {
        return userCollateral[user];
    }
    
    /**
     * @dev Check if operation exists
     */
    function operationExists(uint256 operationId) external view returns (bool) {
        return operations[operationId];
    }
}