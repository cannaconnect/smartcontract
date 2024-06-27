import "dotenv/config";
import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Test", function () {
  let owner = process.env.OWNER;
  let totalSale = process.env.TOTAL;
  let price = process.env.PRICE;
  let baseURI = process.env.BASEURI;
  async function deploy() {
   
    const CannaConnect = await ethers.getContractFactory("CannaConnect");
    const PresaleToken = await ethers.getContractFactory("PresaleToken");
    const CANNANFT = await ethers.getContractFactory("CANNANFT");
    const PresaleNFT = await ethers.getContractFactory("PresaleNFT");
    const token = await CannaConnect.deploy(owner);
    const tokenAddress = await token.getAddress()
    const presaleToken = await PresaleToken.deploy(tokenAddress, owner, ethers.parseEther(totalSale), ethers.parseEther(price));
    const nft = await CANNANFT.deploy(baseURI, owner);
    let nftAddress = await nft.getAddress();
    const presaleNFT = await PresaleNFT.deploy(nftAddress,owner);
    return { token, presaleToken, nft,  presaleNFT};
  }

  describe("Deployment", function () {
    this.beforeAll(async () => {
      let result = await loadFixture(deploy);
      console.log(result);
    })
  });

});
