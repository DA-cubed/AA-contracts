# DA(cubed) custom contracts and scripts

Participation in the DAO is represented by (voting) token, therefore the paymaster which pays for participant's
transactions checks the balance of the user and depending on the value validates UserOperation or rejects it.

Contract: `contracts/samples/DAAAPaymaster.sol`

The rest in this repository are debugging, deploying and setting up scripts located in `scripts/`.

Goerli addresses:
DAAAPaymaster - https://goerli.etherscan.io/address/0x3CDB69AB4AAfBa23fd4ECB30e5Af545Ec24C8304
Counter - https://goerli.etherscan.io/address/0x2Ba7226e7647262E15e36771FC9129d274c0d26f#writeContract


Link to UserOperation explorer - https://app.jiffyscan.xyz/userOpHash/0x1c4c8e2a2b5b446a1b0413b0381aab0a9449095326b9f83cd26387fa223dd907?network=goerli

This repo was originally forked from eth-infinitism.
