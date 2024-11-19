// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";
import "./NFT.sol";

contract PresaleNFT is Ownable {
    CANNANFT public token;
    uint256 public price;

    event BuyToken(address indexed user, uint256[] tokenIds);

    constructor(address _token) Ownable() {
        token = CANNANFT(_token);
    }

    function buy(uint256 quantity) external payable {
        require(msg.value == price * quantity, "Incorrect ETH amount sent");
        uint256[] memory ids = token.mintNFT(msg.sender, quantity);
        emit BuyToken(msg.sender, ids);
    }

    function setPrice(uint256 _price) external onlyOwner {
        price = _price;
    }

    function withdrawFund() external onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }
}
