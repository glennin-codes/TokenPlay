// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Presale.sol";

contract Tokenize is ERC721Enumerable, Ownable {
 
   

    Presale presale;

uint256  public _price;
uint256 public maxTokenIds;

    uint256 public reservedTokens;
    uint256 public reservedTokensClaimed = 0;

    constructor (address PresaleContract, uint256 price, uint256 _maxTokenIds, string memory _name, string memory _symbol) ERC721(_name, _symbol) Ownable(msg.sender) {
        _price=price;
        maxTokenIds=_maxTokenIds;
        presale = Presale(PresaleContract);
        reservedTokens = presale.maxPresaledAddresses();
    }

    function mint() public payable {
       
        require(totalSupply() + reservedTokens - reservedTokensClaimed < maxTokenIds, "EXCEEDED_MAX_SUPPLY");

        // If user is part of the presale, make sure there is still reserved tokens left
        if (presale.PresaledAddresses(msg.sender) && msg.value < _price) {
            // Make sure user doesn't already own an NFT
            require(balanceOf(msg.sender) == 0, "ALREADY_OWNED");
            reservedTokensClaimed += 1;
        } else {
            // If user is not part of the presale, make sure they have sent enough ETH
            require(msg.value >= _price, "NOT_ENOUGH_ETHER");
        }
        uint256 tokenId = totalSupply();
        _safeMint(msg.sender, tokenId);
    }

    function withdraw() public onlyOwner  {
        address _owner = owner();
        uint256 amount = address(this).balance;
        (bool sent, ) =  _owner.call{value: amount}("");
        require(sent, "Failed to send Ether");
    }
}

// User first deploys a presale contract that tracks the people being presaled and then they call the contract for deploying the NFT therefore tokenizing a game asset