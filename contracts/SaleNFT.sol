// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./NFT.sol";

contract PresaleNFT is Ownable {

    CANNANFT public token;
    uint256 public price;

    event BuyToken(address indexed user, uint256 tokenId);

    constructor(address _token, address _owner) Ownable (_owner) {
        token = CANNANFT(_token);
    }

    function buy() external payable {
        require(msg.value == price,"Price not exactly");
        uint256 id = token.mintNFT(msg.sender);
        emit BuyToken(msg.sender, id);
    }

    function setPrice(uint256 _price) external onlyOwner {
        price = _price;
    }

    function withdrawFund() external onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }

}