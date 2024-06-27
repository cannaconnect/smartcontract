import "dotenv/config";
import { ethers } from "hardhat";

async function main() {
  let owner = process.env.OWNER;
  let totalSale = process.env.TOTAL;
  let price = process.env.PRICE;
  const CannaConnect = await ethers.deployContract("CannaConnect",[
    "CannaConnect Token",
    "CCT",
    owner
  ]);
  
  await CannaConnect.waitForDeployment();
  let tokenAddress = await CannaConnect.getAddress();
  console.log("CannaConnect:",await CannaConnect.getAddress());

  const PresaleToken = await ethers.deployContract("PresaleToken",[
    tokenAddress,
    owner,
    ethers.parseEther(totalSale),
   ethers.parseEther(price) 
  ]);
  
  await PresaleToken.waitForDeployment();
  console.log("PresaleToken:",await PresaleToken.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
