import { ethers } from 'hardhat'
import { utils } from 'ethers'
const { parseEther } = utils
const hre = require('hardhat')

async function main (): Promise<void> {
  // We get the contract to deploy
  //
  const [signer] = await hre.ethers.getSigners()
  const tokenf = await ethers.getContractFactory('MyToken')

  const tken = await tokenf.deploy()
  await tken.deployed()
  console.log('token address is ', tken.address)
  await tken.mint(signer.address, parseEther("10"))

  const token = {address: tken.address }
  // const token = {address: "0x1e0acc31767ce175ea0a1f0ded98d5552b5b2923" }

  const paymf = await ethers.getContractFactory('DAAAPaymaster')

  const entrypoint = '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789'

  const paymaster = await paymf.deploy(token.address, entrypoint)
  await paymaster.deployed()
  console.log('Paymaster deployed to:', paymaster.address)
  await paymaster.functions.addStake(1, {value: parseEther('0.1') })

  await paymaster.deposit({ value: parseEther('1') })
  console.log('added deposit')
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
