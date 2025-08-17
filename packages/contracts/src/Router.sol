// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

/**
 * @title IController
 * @dev Interface for Controller contract
 */
interface IController {
    function addCollateral(address token, uint256 amount, uint256 fromChain, uint256 toChain, string calldata status) external;
    function borrow(address token, uint256 amount, uint256 collateralAmount, string calldata status) external;
    function withdraw(address token, uint256 amount, string calldata status) external;
}

/**
 * @title Router
 * @dev Cross-chain message router for handling cross-chain operations
 * Routes messages between different chains and tracks message lifecycle
 */
contract Router {
    
    // Events
    event MessageSent(
        uint256 indexed nonce,
        address indexed sender,
        uint256 fromChain,
        uint256 toChain,
        bytes32 messageId,
        bytes data,
        uint256 timestamp
    );
    
    event MessageReceived(
        uint256 indexed nonce,
        address indexed recipient,
        uint256 fromChain,
        uint256 toChain,
        bytes32 messageId,
        bytes data,
        uint256 timestamp
    );
    
    event OperationStarted(
        uint256 indexed operationId,
        address indexed user,
        uint8 operationType,
        uint256 fromChain,
        uint256 toChain,
        uint256 nonce,
        uint256 timestamp
    );
    
    event OperationCompleted(
        uint256 indexed operationId,
        address indexed user,
        uint8 operationType,
        bool success,
        uint256 nonce,
        uint256 timestamp
    );
    
    // State variables
    mapping(uint256 => bool) public processedMessages;
    mapping(bytes32 => uint256) public messageNonces;
    mapping(uint256 => address) public operationOwners;
    mapping(uint256 => bytes) public messageData;
    uint256 public nextNonce;
    uint256 public nextOperationId;
    
    // Controller contract reference
    address public controllerContract;
    
    // Operation types
    uint8 public constant ADD_COLLATERAL = 0;
    uint8 public constant BORROW = 1;
    uint8 public constant WITHDRAW = 2;
    
    /**
     * @dev Constructor
     */
    constructor() {
        controllerContract = address(0);
        nextNonce = 1;
        nextOperationId = 1;
    }
    
    /**
     * @dev Send a cross-chain message (internal nonce generation)
     */
    function sendMessage(
        uint256 toChain,
        address recipient,
        bytes calldata data,
        uint8 operationType
    ) external returns (uint256 nonce) {
        nonce = nextNonce++;
        uint256 operationId = nextOperationId++;
        bytes32 messageId = keccak256(abi.encodePacked(block.chainid, toChain, nonce, msg.sender));
        
        // Store message info
        messageNonces[messageId] = nonce;
        operationOwners[operationId] = msg.sender;
        messageData[nonce] = data;
        
        // Start cross-chain operation
        emit OperationStarted(
            operationId,
            msg.sender,
            operationType,
            block.chainid,
            toChain,
            nonce,
            block.timestamp
        );
        
        // Send the message
        emit MessageSent(
            nonce,
            msg.sender,
            block.chainid,
            toChain,
            messageId,
            data,
            block.timestamp
        );
        
        return nonce;
    }
    
    /**
     * @dev Receive a cross-chain message (would be called by relayer/bridge)
     */
    function receiveMessage(
        uint256 nonce,
        uint256 fromChain,
        address sender,
        address recipient,
        bytes calldata data,
        bytes32 messageId
    ) external {
        require(nonce > 0, "Nonce must be greater than 0");
        require(!processedMessages[nonce], "Message already processed");
        require(messageNonces[messageId] == nonce, "Invalid message");
        
        processedMessages[nonce] = true;
        
        emit MessageReceived(
            nonce,
            recipient,
            fromChain,
            block.chainid,
            messageId,
            data,
            block.timestamp
        );
        
        // Process the message and call controller
        _processMessage(nonce, sender, recipient, data);
    }
    
    /**
     * @dev Internal function to process received messages
     */
    function _processMessage(
        uint256 nonce,
        address sender,
        address recipient,
        bytes memory data
    ) internal {
        // Decode the message data
        (uint8 operationType, address user, address token, uint256 amount, uint256 operationId) = 
            abi.decode(data, (uint8, address, address, uint256, uint256));
        
        // Call the appropriate Controller method with "finish" status
        if (controllerContract != address(0)) {
            if (operationType == ADD_COLLATERAL) {
                IController(controllerContract).addCollateral(token, amount, block.chainid, block.chainid, "finish");
            } else if (operationType == BORROW) {
                IController(controllerContract).borrow(token, amount, amount, "finish"); // Using amount as collateral for simplicity
            } else if (operationType == WITHDRAW) {
                IController(controllerContract).withdraw(token, amount, "finish");
            }
        }
        
        // Emit operation completed
        emit OperationCompleted(
            operationId,
            user,
            operationType,
            true, // success
            nonce,
            block.timestamp
        );
    }
    
    /**
     * @dev Helper function to find operation by nonce (simplified implementation)
     */
    function _findOperationByNonce(uint256 nonce) internal view returns (uint256) {
        // In a real implementation, you'd have proper mapping/storage
        // For demo purposes, we'll return a mock operation ID
        return nonce + 1000;
    }
    
    /**
     * @dev Complete a cross-chain operation manually (for testing)
     */
    function completeOperation(
        uint256 operationId,
        uint8 operationType,
        bool success
    ) external {
        require(operationOwners[operationId] == msg.sender, "Not operation owner");
        
        emit OperationCompleted(
            operationId,
            msg.sender,
            operationType,
            success,
            0, // no nonce for manual completion
            block.timestamp
        );
    }
    
    /**
     * @dev Simulate cross-chain operation for testing
     */
    function simulateCrossChainOperation(
        uint256 nonce,
        address user,
        uint256 fromChain,
        uint256 toChain,
        uint8 operationType
    ) external {
        require(nonce > 0, "Nonce must be greater than 0");
        
        uint256 operationId = nextOperationId++;
        
        operationOwners[operationId] = user;
        
        // Start operation
        emit OperationStarted(
            operationId,
            user,
            operationType,
            fromChain,
            toChain,
            nonce,
            block.timestamp
        );
        
        // Send message
        bytes32 messageId = keccak256(abi.encodePacked(fromChain, toChain, nonce, user));
        bytes memory data = abi.encodePacked(operationType, operationId);
        messageNonces[messageId] = nonce;
        
        emit MessageSent(
            nonce,
            user,
            fromChain,
            toChain,
            messageId,
            data,
            block.timestamp
        );
        
        // Simulate message received (after some delay in real scenario)
        emit MessageReceived(
            nonce,
            user,
            fromChain,
            toChain,
            messageId,
            data,
            block.timestamp + 60 // simulate 60 second delay
        );
        
        // Complete operation
        emit OperationCompleted(
            operationId,
            user,
            operationType,
            true,
            nonce,
            block.timestamp + 120 // simulate completion after 2 minutes
        );
    }
    
    /**
     * @dev Set the controller contract address
     */
    function setControllerContract(address _controllerContract) external {
        require(_controllerContract != address(0), "Controller contract cannot be zero address");
        controllerContract = _controllerContract;
    }
    
    /**
     * @dev Get the current controller contract address
     */
    function getControllerContract() external view returns (address) {
        return controllerContract;
    }
    
    /**
     * @dev Check if message has been processed
     */
    function isMessageProcessed(uint256 nonce) external view returns (bool) {
        return processedMessages[nonce];
    }
    
    /**
     * @dev Get message nonce by message ID
     */
    function getMessageNonce(bytes32 messageId) external view returns (uint256) {
        return messageNonces[messageId];
    }
    
    /**
     * @dev Get operation owner
     */
    function getOperationOwner(uint256 operationId) external view returns (address) {
        return operationOwners[operationId];
    }
}