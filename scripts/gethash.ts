import { ethers } from 'hardhat'
import { utils, Contract } from 'ethers'
const { parseEther } = utils
const hre = require('hardhat')

import { SimpleAccount, SimpleAccount__factory, SimpleAccountFactory, SimpleAccountFactory__factory, UserOperationStruct, } from '@account-abstraction/contracts'

async function main (): Promise<void> {
  // We get the contract to deploy
  //

  const entrypoint = '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789'
  const entr = await ethers.getContractAt("EntryPoint", entrypoint)
  // const w : UserOperationStruct = {
  //   sender: "0xECF7513cF6cEab2545c6f148297926A755089857",
  //   nonce: "0x03",
  //   initCode: "0x",
  //   callData: "0xb61d27f6000000000000000000000000ecf7513cf6ceab2545c6f148297926a75508985700000000000000000000000000000000000000000000000000038d7ea4c6800000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000",
  //   callGasLimit: "0x90ec",
  //   verificationGasLimit: "0x0186a0",
  //   maxFeePerGas: "0x59682f14",
  //   maxPriorityFeePerGas: "0x59682f00",
  //   paymasterAndData: "0x",
  //   preVerificationGas: "0xac18",
  //   signature:""
  // }
  const zz = await entr.functions.getUserOpHash([ "0x4af35d96280558615e0717506282f95b485fa4ad", "0x00", "0xbfc8b462184dd935ccb1d8a055237a427752ef085fbfb9cf000000000000000000000000ea1955efb7ec3a096db43775d053f10ea60af2420000000000000000000000000000000000000000000000000000000000000000", "0xb61d27f60000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000", "0xd2d2", "0x05fa1f", 111610, "0x59682f14", "0x59682f00", "0x", "0x" ])
  console.log(zz)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
