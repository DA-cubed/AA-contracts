import { ethers } from 'hardhat'
import { utils } from 'ethers'
const { parseEther } = utils
const hre = require('hardhat')

async function main (): Promise<void> {
  // We get the contract to deploy
  //
  // const [signer] = await hre.ethers.getSigners()
  // const tokenf = await ethers.getContractFactory('MyToken')
  //
  // const token = await tokenf.deploy()
  // await token.deployed()
  // console.log('token address is ', token.address)

  const token = {address: '0x2B7FE2E47Db83F2cb4ad026a7e6aB55a90710705' }

  const paymf = await ethers.getContractFactory('DAAAPaymaster')

  const entrypoint = '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789'

  const paymaster = await paymf.deploy(token.address, entrypoint)
  await paymaster.deployed()
  await paymaster.functions.addStake(1, {value: parseEther('0.1') })
  console.log('Paymaster deployed to:', paymaster.address)

  // await token.mint(signer.address, 200)
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
