import { ethers } from 'hardhat'
import { utils, Contract } from 'ethers'
const { parseEther } = utils
const hre = require('hardhat')

async function main (): Promise<void> {
  // We get the contract to deploy
  //

  const paymasterAddress = '0x3C056194b6158590BFC9c3fa8C6d6E30C0f8980D'
  const paymaster = await ethers.getContractAt("DAAAPaymaster", paymasterAddress)

  await paymaster.withdrawTo("0xaCcD23465EBb10296d53642416E1159D4cD879F3", "1000000000000000000")

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
