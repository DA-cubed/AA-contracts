import { ethers } from 'hardhat'
import { utils, Contract } from 'ethers'
const { parseEther } = utils
const hre = require('hardhat')

async function main (): Promise<void> {
  // We get the contract to deploy
  //

  const paymasterAddress = '0x3CDB69AB4AAfBa23fd4ECB30e5Af545Ec24C8304'
  const paymaster = await ethers.getContractAt("DAAAPaymaster", paymasterAddress)
  // const paymaster = await paymf.deploy(token.address, entrypoint)
  // await paymaster.deployed()
  // await paymaster.connect(signer).functions.addStake(1, {value: parseEther('0.1') })
  // console.log('Paymaster deployed to:', paymaster.address)
  await paymaster.functions.addStake(1,{ value: parseEther('0.1') })

  // await token.mint(signer.address, 200)

  // await paymaster.deposit({ value: parseEther('1') })

  console.log('added stake')
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
