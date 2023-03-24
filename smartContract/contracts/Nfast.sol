// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./token/ERC721/ERC721.sol";


contract Nfast is ERC721 {
    uint256 private tokenIds;
    //URI에 들어가는 정보
    //{가게 주소, 초기값, 사용가능날짜, 가게이름}이 포함된 ipfs 주소
    mapping(uint256 => string) tokenURIs;
    //사용여부
    mapping(uint256 => bool) isUse;
    //가게 주소
    mapping(uint256 => address) storeAddress;
    //사용가능날짜
    mapping(uint256 => uint256) date;
    //시작시간
    mapping(uint256 => uint256) startTime;
    //종료시간
    mapping(uint256 => uint256) endTime;
    //점심, 저녁 구분
    mapping(uint256 => bool) mealType;
    //초기값
    mapping(uint256 => uint256) price;
    //수수료
    mapping(uint256 => uint) charge;

    constructor(string memory name_, string memory symbol_)
    ERC721(name_, symbol_)
    {
        tokenIds = 0;
    }

    function current() public view returns (uint256) {
        return tokenIds;
    }


    function create(address _to, string memory _tokenURI, address _storeAddress, uint256 _date, bool _mealType, uint256 _startTime, uint256 _endTime, uint256 _price,uint _charge)
    public
    payable
    returns (uint256)
    {
        tokenIds++;
        uint256 newTokenId = tokenIds;
        _mint(_storeAddress, newTokenId);

        tokenURIs[newTokenId] = _tokenURI;
        isUse[newTokenId] = false;
        storeAddress[newTokenId] = _storeAddress;
        date[newTokenId] = _date;
        startTime[newTokenId] = _startTime;
        endTime[newTokenId] = _endTime;
        mealType[newTokenId] = _mealType;
        price[newTokenId] = _price;
        charge[newTokenId]=_charge;

        //가게에게 판매 허용
        approve(_to, newTokenId);
        return newTokenId;
    }

    function _burn(uint256 _tokenId)
    internal
    virtual
    override {
        super._burn(_tokenId);
    }

    function setIsUse(uint256 _tokenId)
    public
    onlyStoreAddress(_tokenId) onlyNotUse(_tokenId) {
        isUse[_tokenId] = true;
    }

    function getTokenURI(uint256 _tokenId)
    public
    view
    returns (string memory)
    {
        return tokenURIs[_tokenId];
    }

    function getIsUse(uint256 _tokenId)
    public
    view
    returns (bool)
    {
        return isUse[_tokenId];
    }

    function getStoreAddress(uint256 _tokenId)
    public
    view
    returns (address)
    {
        return storeAddress[_tokenId];
    }

    function getDate(uint256 _tokenId)
    public
    view
    returns (uint256)
    {
        return date[_tokenId];
    }

    function getStartTime(uint256 _tokenId)
    public
    view
    returns (uint256)
    {
        return startTime[_tokenId];
    }

    function getEndTime(uint256 _tokenId)
    public
    view
    returns (uint256)
    {
        return endTime[_tokenId];
    }

    function getMealType(uint256 _tokenId)
    public
    view
    returns (bool)
    {
        return mealType[_tokenId];
    }

    function getPrice(uint256 _tokenId)
    public
    view
    returns (uint256)
    {
        return price[_tokenId];
    }

    function getCharge(uint256 _tokenId)
    public
    view
    returns (uint)
    {
        return charge[_tokenId];
    }
    modifier onlyNotUse(uint256 _tokenId){
        require(isUse[_tokenId]==true, "already used");
        _;
    }

    modifier onlyStoreAddress(uint256 _tokenId){
        require(msg.sender == storeAddress[_tokenId], "only store address");
        _;
    }
}