import { ethers } from 'hardhat'
import { utils, Contract } from 'ethers'
const { parseEther } = utils
const hre = require('hardhat')

import { SimpleAccount, SimpleAccount__factory, SimpleAccountFactory, SimpleAccountFactory__factory, UserOperationStruct, } from '@account-abstraction/contracts'

async function main (): Promise<void> {
  // We get the contract to deploy
  //

  const entrypoint = '0x4Af35D96280558615E0717506282F95b485Fa4aD'
  const entr = await ethers.getContractAt("SimpleAccount", entrypoint)
  console.log(await entr.functions.getNonce())
  // console.log(zz)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

