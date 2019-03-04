const PayStudent = artifacts.require('./PayStudent.sol');

module.exports = (deployer, _, accounts) => {
    deployer.deploy(PayStudent, accounts[1], accounts[2], {
        from: accounts[0]
    });
};