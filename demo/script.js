const Web3 = require('web3')
const contract = require('truffle-contract')
const SmartContract = contract(require('./build/contracts/PayStudent.json'))
//const SmartContract = artifacts.require('./PayStudent.sol');

const deployer = '0x716a6e289fc59c0954d9d03cf718df7acabe2ec7'
const client = '0x85440fceb8a7181d8aa6a19aa85f258e14b4b0ed'
const tasker = '0x0ed2af7c1abb02f7d509c10c195ac41f053bfaa1'

const web3Provider = new Web3.providers.HttpProvider(
    'http://localhost:9545' // Ganache-cli
)

const web3 = new Web3(web3Provider)

web3.eth.getAccounts(error => {
    if (error) {
        throw new Error(`
            Error while fetching accounts from RPC!
            Check RPC address! The problem may be there!
        `)
    }
})

const fetchBalanceByAddress = async address => {
    return new Promise(resolve => {
        web3.eth.getBalance(address, (_, balance) => {
            resolve(web3.utils.fromWei(balance, 'ether').toString())
        })
    })
}

const printBalancesToConsole = async () => {
    const deployerBalance = await fetchBalanceByAddress(deployer)
    const clientBalance = await fetchBalanceByAddress(client)
    const taskerBalance = await fetchBalanceByAddress(tasker)

    console.log(`Deployer: ${deployerBalance}; Client: ${clientBalance}; Tasker: ${taskerBalance}`)
}

const run = async () => {
    await printBalancesToConsole()

    SmartContract.setProvider(web3Provider)

    console.log(SmartContract);

   /* const deployed = await SmartContract.deploy(client, tasker, {
        gas: 1000000,
        from: deployer
    });

    console.log(deployed);

    return;

    const smartContract = await SmartContract.new(
        client, tasker, {
            gas: 1000000,
            from: deployer
        }
    )
*/


    await printBalancesToConsole()

    /*await SmartContract.sendTransaction({
        from: client,
        value: web3.utils.toWei('2', 'ether')
    })*/

    await printBalancesToConsole()

    await SmartContract.sendPayAmountToTasker({
        from: deployer
    })

    await printBalancesToConsole()
}

run()