# Notes on Solidity

- Language powering the Smart Contracts on the Ethereum Blockchain
- Gaining attention from other Blockchain as well
- Object Oriented Language: supporting inheritance

This repository contains some of my notes and projects where I'm mocking around with Solidity

## Data Types
- Boolean: bool
- String: string
- Integer: int/uint signed and non-signed - int8 -> int256
- Address: address to store address on the Ethereum blockchain
- Fixed number: ufixed

Only do the simplest things on the Blockchain, everything else, the biggest logic part should be done outside of the Blockchain.

## Access Modifiers

_Define how a contract (object) can be accessed._
It doesn't mean it won't be accessible, just not modifiable

- public: anywhere
- internal: limit access to this contract and the contracts inheriting from it
- private: limit access to this contract
- external: only accessible externally

## Advanced Data Types

- Array: all elements must be of same data types
- Enum: list of finite set of values
- Structs: custom defined types that can group several variables

Mapping: map array of values to other values (eg list of addresses with balances)

## Data locations

Change how assignments behave.

- Default for function parameters and returns type: memory
- Default for local variables: storage
- calldata: non modifiable and non persistable locations

## Tooling

[Truffle](https://truffleframework.com/): used mainly to test our Smart Contract, but also to power up an Ethereum project: `$ truffle init`

File `2_deploy_contracts.js` used to indicate which files Truffle must deploy to the Blockchain

We can communicate with our Smart Contract without any UI --> directly using the command line: we write JS code
Code is written asynchronously

> Test RPC

## Steps to work with Truffle
1. `$ truffle init` to initialize the project
2. Create your Smart Contract and deploy file
3. `$ truffle development` to run Truffle in development mode, on a development server. It creates 10 test keys (private/public)
4. `$ migrate`: deploy the contract to the test Blockchain server


## Notes on Solidity

`msg` is a globaly avaible variable
`payable` function type

`function (<parameter types>) {internal|external} [pure|view|payable] [returns (<return types>)]`
In contrast to the parameter types, the return types cannot be empty - if the function type should not return anything, the whole returns (<return types>) part has to be omitted.