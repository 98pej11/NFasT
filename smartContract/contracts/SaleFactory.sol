// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./access/Ownable.sol";
import "./token/ERC20/ERC20.sol";
import "./token/ERC721/ERC721.sol";
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

    function createSale(uint256 _nftId, uint256 _price, uint256 _startTime, uint256 _endTime)
    public
    payable
    returns (address) {
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


    function allSales()
    public
    view
    returns (address[] memory) {
        return sales;
    }
}
