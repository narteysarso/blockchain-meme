//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Meme {

    struct Dtx{
        string hash;
    }
    mapping(address => Dtx[]) memes;


    //write fxn 
    function store(string memory hashString) public {
        memes[msg.sender].push(Dtx(hashString));
    }

    //read fxn
    function retrieve(address _senderAddress) public view returns (Dtx[] memory){
        return memes[_senderAddress];
    } 



}