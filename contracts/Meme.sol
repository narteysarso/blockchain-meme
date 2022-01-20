//SPDX-License-Identifier: MIT

pragma solidity >=0.5.0 < 0.9.0;

contract Meme {
    mapping(address => string[]) memes;

    //write fxn 
    function store(string memory hashString) public {
        memes[msg.sender].push(hashString);
    }

    //read fxn
    function retrieve(address _senderAddress, uint256 _pos) public view returns (string memory){
        return memes[_senderAddress][_pos];
    } 

}