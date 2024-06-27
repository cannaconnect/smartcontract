// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
contract CANNANFT is ERC721URIStorage, Ownable {

    uint256 private _tokenIds;
    uint256 public MAX_NFT = 5000;
    string private baseURI_;

    mapping(address => bool) internal isMinter;
    modifier onlyMintRole {
        require(isMinter[msg.sender], "Only Minter can mint");
        _;
    }

    constructor(
        string memory baseURI,
        address _owner
    ) ERC721("CannaConnect Membership", "CANNANFT") Ownable(_owner){
        isMinter[_owner] = true;
        baseURI_ = baseURI;
    }

    function mintNFT(address _toAddress)
        public
        onlyMintRole
        returns (uint256)
    {
        require(_tokenIds < MAX_NFT, "Maximum Supplies");
        _tokenIds++;
        uint256 newItemId = _tokenIds;
        _mint(_toAddress, newItemId);
        _setTokenURI(newItemId, baseURI_);
        return newItemId;
    }
    
    function setMintRole(address _minter) external onlyOwner {
        isMinter[_minter] = !isMinter[_minter];
    }

    function getTotalIds() public view returns(uint256) {
        return _tokenIds;
    }
}