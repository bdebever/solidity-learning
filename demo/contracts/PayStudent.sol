pragma solidity ^0.5.0;

contract PayStudent
{
    address public deployer;

    address public client;
    address payable public tasker;

    uint256 public payAmount;

    // This creates an array with all balances
    mapping (address => uint256) public balanceOf;

    constructor (address _client, address payable _tasker) public
    {
        deployer = msg.sender;

        client = _client;
        tasker = _tasker;

        payAmount = 0;
    }

    /**
     * Handle the deposit
     */
    function () external payable
    {
        // require function should be used to ensure valid conditions,
        // such as inputs, or contract state variables are me
        require(client == msg.sender, "Only the client is able to deposit money");

        // Check if the sender has enough
        require(balanceOf[msg.sender] >= msg.value, "Insufficient funds");
        payAmount += msg.value;
    }

    /**
     * Send the payment
     */
    function sendPayAmountToTasker() public
    {
        require(deployer == msg.sender, "Only the deployer is allowed to pay the tasker");

        // transfer pay amount to tasker
        tasker.transfer(payAmount);

        // nullify pay amount manually once the transfer has been sent
        payAmount = 0;
    }

}