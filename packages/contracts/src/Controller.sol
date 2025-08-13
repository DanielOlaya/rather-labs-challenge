// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/**
 * @title Controller
 * @dev Main controller contract for cross-chain lending operations
 * Handles collateral management and operation lifecycle
 */
contract Controller {
    
    // Events
    event CollateralAdded(
        address indexed user,
        address indexed token,
        uint256 amount,
        uint256 indexed operationId,
        uint256 timestamp
    );
    
    event Borrow(
        address indexed user,
        address indexed token,
        uint256 amount,
        uint256 indexed operationId,
        uint256 collateralAmount,
        uint256 timestamp
    );
    
    event Withdraw(
        address indexed user,
        address indexed token,
        uint256 amount,
        uint256 indexed operationId,
        uint256 timestamp
    );
    
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
    
    event CollateralRejected(
        address indexed user,
        address indexed token,
        uint256 amount,
        uint256 indexed operationId,
        string reason,
        uint256 timestamp
    );
    
    // State variables
    mapping(uint256 => bool) public operations;
    mapping(address => uint256) public userCollateral;
    uint256 public nextOperationId;
    
    // Operation types
    uint8 public constant ADD_COLLATERAL = 0;
    uint8 public constant BORROW = 1;
    uint8 public constant WITHDRAW = 2;
    
    /**
     * @dev Add collateral for a user
     */
    function addCollateral(
        address token,
        uint256 amount,
        uint256 fromChain,
        uint256 toChain
    ) external {
        require(amount > 0, "Amount must be greater than 0");
        
        uint256 operationId = nextOperationId++;
        
        // Start the operation
        emit OperationStarted(
            operationId,
            msg.sender,
            ADD_COLLATERAL,
            fromChain,
            toChain,
            block.timestamp
        );
        
        // Simple validation (in real implementation, would check token validity, etc.)
        if (amount < 1000) { // Minimum collateral requirement
            emit CollateralRejected(
                msg.sender,
                token,
                amount,
                operationId,
                "Insufficient collateral amount",
                block.timestamp
            );
            return;
        }
        
        // Add collateral
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
    
    /**
     * @dev Borrow against collateral
     */
    function borrow(
        address token,
        uint256 amount,
        uint256 collateralAmount
    ) external {
        require(amount > 0, "Amount must be greater than 0");
        require(userCollateral[msg.sender] >= collateralAmount, "Insufficient collateral");
        
        uint256 operationId = nextOperationId++;
        
        emit OperationStarted(
            operationId,
            msg.sender,
            BORROW,
            block.chainid,
            block.chainid,
            block.timestamp
        );
        
        emit Borrow(
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
    
    /**
     * @dev Withdraw collateral
     */
    function withdraw(
        address token,
        uint256 amount
    ) external {
        require(amount > 0, "Amount must be greater than 0");
        require(userCollateral[msg.sender] >= amount, "Insufficient balance");
        
        uint256 operationId = nextOperationId++;
        
        emit OperationStarted(
            operationId,
            msg.sender,
            WITHDRAW,
            block.chainid,
            block.chainid,
            block.timestamp
        );
        
        userCollateral[msg.sender] -= amount;
        
        emit Withdraw(
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