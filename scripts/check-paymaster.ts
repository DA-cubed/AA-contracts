import { ethers } from 'hardhat'
import { utils } from 'ethers'
const { parseEther } = utils
const hre = require('hardhat')

async function main (): Promise<void> {

  const pay = {address: '0x78Fd39Fd13dc35a22D72499B5B560B1AbCE62c7b' }

  const signer = ethers.provider.getSigner();
  const paym = await ethers.getContractAt('DAAAPaymaster', pay.address)

  const params = [
    "0x4af35d96280558615e0717506282f95b485fa4ad",
    "0x02",
    "0x",
    "0xb61d27f6000000000000000000000000accd23465ebb10296d53642416e1159d4cd879f300000000000000000000000000000000000000000000000000038d7ea4c6800000000000000000000000000000000000000000000000000000000000000000600000000000000000000000000000000000000000000000000000000000000000",
    "0x01831c",
    "0x0186a0",
    "0x59682f18",
    "0x59682f00",
    "0x78Fd39Fd13dc35a22D72499B5B560B1AbCE62c7b",
    110080,
    "0xe891f9acbfdd564d6d3dbb02b8e25c47b35738df269541db9fa8d68f2cdce7f233e37173d49487eb335f476e6351042e2ea49b1b9383b9ff8f078399a27e752a1b"
  ]

  const calldata = paym.interface.encodeFunctionData('validatePaymasterUserOp',[params,"0x7e8c35f8487a5e876694a1d2bc333f433473b36bd46f01cb497f795458dccec8", parseEther("1")]);
  const result = await ethers.provider.call({
    to: pay.address,
    data: calldata,
    from: '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789'
  });

  // const zz = await paym.connect(signer).functions.validatePaymasterUserOp(params,"0x7e8c35f8487a5e876694a1d2bc333f433473b36bd46f01cb497f795458dccec8", parseEther("1"), {'from':'0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789'})
  const decodedResult = paym.interface.decodeFunctionResult('validatePaymasterUserOp', result)
  console.log(decodedResult)
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
