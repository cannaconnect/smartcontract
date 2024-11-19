// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CANNANFT is ERC721URIStorage, Ownable {
    uint256 private _tokenIds;
    uint256 public MAX_NFT;
    string private baseURI_;

    mapping(address => bool) public isMinter;
    modifier onlyMintRole {
        require(isMinter[msg.sender], "Only Minter can mint");
        _;
    }

    constructor(
        string memory baseURI, uint256 maxNFT
    ) ERC721("CannaConnect Membership", "CANNANFT") Ownable(){
        isMinter[msg.sender] = true;
        baseURI_ = baseURI;
        MAX_NFT = maxNFT;
    }

    function mintNFT(address _toAddress, uint256 quantity)
        public
        onlyMintRole
        returns (uint256[] memory)
    {
        require(_tokenIds + quantity <= MAX_NFT, "Maximum Supplies");

        uint256[] memory newItemIds = new uint256[](quantity);

        for (uint256 i = 0; i < quantity; i++) {
            _tokenIds++;
            uint256 newItemId = _tokenIds;
            _mint(_toAddress, newItemId);
            _setTokenURI(newItemId, string(abi.encodePacked(baseURI_, uint2str(newItemId))));
            newItemIds[i] = newItemId;
        }

        return newItemIds;
    }
    
    function setMintRole(address _minter) external onlyOwner {
        isMinter[_minter] = !isMinter[_minter];
    }

    function getTotalIds() public view returns(uint256) {
        return _tokenIds;
    }

    function setBaseURI(string memory baseURI) external onlyOwner {
        baseURI_ = baseURI;
    }

    function getBaseURI() external view returns (string memory) {
        return _baseURI();
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI_;
    }

    function uint2str(uint _i) internal pure returns (string memory _uintAsString) {
        if (_i == 0) {
            return "0";
        }
        uint j = _i;
        uint len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint k = len;
        while (_i != 0) {
            k = k - 1;
            uint8 temp = (48 + uint8(_i - _i / 10 * 10));
            bytes1 b1 = bytes1(temp);
            bstr[k] = b1;
            _i /= 10;
        }
        return string(bstr);
    }
}
