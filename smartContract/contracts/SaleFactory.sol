// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
//import "./access/Ownable.sol";
//import "./token/ERC20/ERC20.sol";
//import "./token/ERC721/ERC721.sol";
import "./Nfast.sol";
import "./Sale.sol";


contract SaleFactory is Ownable {
    address public admin;
    address[] public sales;

    address private nftAddress;
    address private tokenAddress;

    event NewSale(address indexed _saleContract, address indexed _owner, uint256 _workId);

    constructor(address _nftAddress, address _tokenAddress) {
        admin = msg.sender;
        nftAddress = _nftAddress;
        tokenAddress = _tokenAddress;
    }

    function createAllSale(uint256[] calldata _nftIds, uint256 _price, uint256 _startTime, uint256 _endTime)
    public
    payable
    returns (bool)
    {
        for (uint256 i = 0; i < _nftIds.length; i++) {
            createSale(_nftIds[i],_price,_startTime,_endTime);
        }
        return true;
    }

    function createSale(uint256 _nftId, uint256 _price, uint256 _startTime, uint256 _endTime)
    public
    payable
    returns (address) {
        require(Nfast(nftAddress).ownerOf(_nftId) == msg.sender,"only owner can create sale.");
        // 사장인지 거래인지 구분
        bool isStore = false;
        if (Nfast(nftAddress).getStoreAddress(_nftId) == msg.sender) isStore = true;
        Sale newSale = new Sale(_nftId, _price, isStore, _startTime, _endTime, tokenAddress, nftAddress, msg.sender);
        sales.push(address(newSale));

        // nft approve
//        nfast(nftAddress).approve(address(newSale),_nftId);


        emit NewSale(address(newSale), msg.sender, _nftId);
        return address(newSale);
    }

    function getNftAddress()
    public
    view
    returns (address)
    {
        return nftAddress;
    }

    function getTokenAddress()
    public
    view
    returns (address)
    {
        return tokenAddress;
    }
    function allSales()
    public
    view
    returns (address[] memory) {
        return sales;
    }
}
