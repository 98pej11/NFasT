// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./token/ERC721/ERC721.sol";


contract Nfast is ERC721 {
    uint256 private _tokenIds;
    //URI에 들어가는 정보
    //{가게 주소, 초기값, 사용가능날짜, 가게이름}이 포함된 ipfs 주소
    mapping(uint256 => string) tokenURIs;
    //사용여부
    mapping(uint256 => bool) isUse;
    //가게 주소
    mapping(uint256 => address) storeAddress;
    //사용가능날짜
    mapping(uint256 => string) date;
    //점심, 저녁 구분
    mapping(uint256 => string) mealType;

    constructor(string memory name_, string memory symbol_)
    ERC721(name_, symbol_)
    {
        _tokenIds = 0;
    }

    function current() public view returns (uint256) {
        return _tokenIds;
    }

    function tokenURI(uint256 tokenId)
    public
    view
    override
    returns (string memory)
    {
        return tokenURIs[tokenId];
    }

    function create(address to, string memory _tokenURI, address _storeAddress, string memory _date, string memory _mealType)
    public
    returns (uint256)
    {
        _tokenIds++;
        uint256 newTokenId = _tokenIds;
        _mint(to, newTokenId);
        tokenURIs[newTokenId] = _tokenURI;
        isUse[newTokenId] = false;
        storeAddress[newTokenId] = _storeAddress;
        date[newTokenId] = _date;
        mealType[newTokenId] = _mealType;

        return newTokenId;
    }

    function _burn(uint256 tokenId) internal virtual override {
        super._burn(tokenId);
    }
}
