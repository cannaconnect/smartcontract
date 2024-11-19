// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract PresaleToken is Ownable {

    using SafeERC20 for IERC20;

    IERC20 public token;
    uint256 public price;

    uint256 public totalPresale;
    uint256 public tokenSale;
    event BuyToken(address indexed user, uint256 amount);

    constructor(
        address _token,
        uint256 initTotalSale,
        uint256 initPrice
    )Ownable () {
        token = IERC20(_token);
        totalPresale = initTotalSale;
        price = initPrice;
    }

    function buy() external payable {
        uint256 amount = _valueToAmount(msg.value);
        require(tokenSale + amount <= totalPresale,"Pool finished");
        token.safeTransfer(msg.sender, amount);
        tokenSale += amount;
        emit BuyToken(msg.sender, amount);
    }

    function getTokenCanBuy(uint256 value) public view returns(uint256) {
        return _valueToAmount(value);
    }

    function getRemainingToken() public view returns(uint256) {
        return totalPresale - tokenSale;
    } 

    function setPrice(uint256 _price) external onlyOwner {
        price = _price;
    }

    function _valueToAmount(uint256 value) internal view returns(uint256) {
        return value * 10**18 / price;
    }

    function setTotalPresale(uint256 _total) external onlyOwner {
        totalPresale = _total;
    }

    function withdrawFund() external onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }

}