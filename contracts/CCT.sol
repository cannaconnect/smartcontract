// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CannaConnect is ERC20, Ownable {
    // "CannaConnect Token", "CCT"
    // string name_ = "CannaConnect Token";
    // string symbol_ = "CCT";
    uint256 initialSupply = 1000000000 ether;

    constructor(
        string memory _name,
        string memory _symbol,
        address _owner
    ) ERC20(_name, _symbol) Ownable(_owner) {
        _mint(_owner, initialSupply);
    }

}