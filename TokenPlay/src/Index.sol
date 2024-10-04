// SPDX-License-Identifier: MIT
pragma solidity ^0.8.27;
import "./Tokenize.sol";
import "./Presale.sol";

contract TokenFactory {
  
    mapping(address => address) public DeployedPresaleContracts;
    mapping(address => address) public DeployedTokenContracts;

   
    event PresaleDeployed(address indexed presaleAddress);
  
    event NFTDeployed(address indexed nftAddress);


    function deployPresaleContract(uint8 _maxPresaledAddresses) public   returns (address) {
     
        Presale newPresale = new Presale(_maxPresaledAddresses);
        DeployedPresaleContracts[msg.sender] = address(newPresale);
        
       
        emit PresaleDeployed(address(newPresale));
        return address(newPresale);
    }

// Parameter names are:   address PresaleContract, uint256 _price, uint256 maxTokenIds, string memory _name, string memory _symbol
   
    function deployNFTContract(uint8 _maxPresaledAddresses, uint256 _price, uint256 maxTokenIds, string memory _name, string memory _symbol) public returns (address) {
     
        address presaleContract = deployPresaleContract(_maxPresaledAddresses);

    
        Tokenize newNFT = new Tokenize(presaleContract,_price,maxTokenIds, _name,_symbol);
        DeployedTokenContracts[msg.sender] = address(newNFT);

        // Emit an event for NFT deployment
        emit NFTDeployed(address(newNFT));

        return address(newNFT);
    }
}