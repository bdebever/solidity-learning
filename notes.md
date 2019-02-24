# Notes on Solidity

- Language powering the Smart Contracts on the Ethereum Blockchain
- Gaining attention from other Blockchain as well
- Object Oriented Language: supporting inheritance


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

## Contract Structure


## Tooling

[Truffle](https://truffleframework.com/): used mainly to test our Smart Contract, but also to power up an Ethereum project: `$ truffle init`

> Test RPC