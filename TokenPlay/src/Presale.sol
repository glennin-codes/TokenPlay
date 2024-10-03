// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;


contract Presale {

   
    uint8 public maxPresaledAddresses;

   
    mapping(address => bool) public PresaledAddresses;

  
    uint8 public numAddressesPresaled;

  
    constructor(uint8 _maxPresaledAddresses) {
        maxPresaledAddresses =  _maxPresaledAddresses;
    }

   
    function addAddressToPresale() public {
    
        require(!PresaledAddresses[msg.sender], "Sender has already been Presaleed");
        
        require(numAddressesPresaled < maxPresaledAddresses, "More addresses cant be added, limit reached");
     
        PresaledAddresses[msg.sender] = true;
      
        numAddressesPresaled += 1;
    }

}