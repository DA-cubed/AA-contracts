import { ethers } from 'hardhat'
import { utils } from 'ethers'
const { parseEther } = utils
const hre = require('hardhat')

async function main (): Promise<void> {

  const paymf = await ethers.getContractFactory('TestCounter')

  const paymaster = await paymf.deploy()
  await paymaster.deployed()
  console.log('testcounter deployed to:', paymaster.address)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
