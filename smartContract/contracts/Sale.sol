// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./access/Ownable.sol";
import "./token/ERC20/ERC20.sol";
import "./token/ERC721/ERC721.sol";
import "./Nfast.sol";
import "./SaleFactory.sol";
import "./utils/math/SafeMath.sol";

contract Sale is Ownable,IERC721Receiver {
    using SafeMath for uint256;
    //nft id
    uint256 private nftId;
    //가게 주소
    address private storeAddress;
    //거래 가격
    uint256 private price;
    //거래 종류 0 가게 1 리셀
    bool private isStore;
    //판매 시작 시간
    uint256 private startDate;
    //판매 종료 시간
    uint256 private endDate;
    //거래 종료
    bool private isEnd;
    //판매자 주소
    address private sellerAddress;
    //구매자 주소
    address private buyerAddress;

    address public currencyAddress;
    //nfast 주소
    address public nftAddress;



    //거래할 토큰
    IERC20 public erc20Contract;
    Nfast public erc721Contract;

    // event 판매 완료시
    event Purchase(uint256 indexed _nftId, address _seller, address _buyer);
    // event 송금시
    event Withdraw(address indexed _to, uint256 _price);
    // event 환불시
    event Refund(uint256 indexed _nftId,address _to);


    constructor (uint256 _nftId, address _storeAddress, uint256 _price, bool _isStore, uint256 _startDate, uint256 _endDate, address _currencyAddress, address _nftAddress, address _sellerAddress){
        require(_storeAddress != address(0));
        require(_price > 0);
        require(_endDate > block.timestamp);
        nftId = _nftId;
        price = _price;
        storeAddress = _storeAddress;
        sellerAddress = _sellerAddress;
        startDate = _startDate;
        endDate = _endDate;
        currencyAddress = _currencyAddress;
        nftAddress = _nftAddress;
        isEnd = false;
        erc20Contract = IERC20(_currencyAddress);
        erc721Contract = Nfast(_nftAddress);
        isStore=_isStore;
    }


    function purchase()
    public
    payable
    onlyAfterStart onlyEndDate {
        //판매 판매시간 확인
        // 판매자가 티켓 주인인지 확인
        require(sellerAddress == erc721Contract.ownerOf(nftId), "seller is not owner");
        // 금액이 있는지 확인
        require(price <= erc20Contract.balanceOf(msg.sender), "balance is not enough");
        //금액 전송
        erc20Contract.transferFrom(msg.sender, address(this), price);
        //nft 전송
        erc721Contract.safeTransferFrom(sellerAddress, msg.sender, nftId);

        buyerAddress = msg.sender;
        end();
    }

    function refund()
    public
    payable
    onlyStoreAddress onlyIsEnd {
        //거래 종료시, 가게주인만 호출가능
        //티켓 사용했는지 확인
        require(erc721Contract.getIsUse(nftId) == false, "nfast already used");
        //티켓 소유주인지 확인
        require(buyerAddress == erc721Contract.ownerOf(nftId), "buyer is not owner");
        // 티켓사용완료 처리
        erc721Contract.setIsUse(nftId);
        // 현재 티켓 소유주에게 첫금액 환불
        erc20Contract.transferFrom(msg.sender, buyerAddress, erc721Contract.getPrice(nftId));

        emit Refund(nftId,buyerAddress);
    }

    function withdraw()
    public
    payable
    onlySellerAddress onlyIsEnd  {
        // 판매자만 호출 ,거래 종료시
        // 가게가 아닐시 수수료를 제외한 만큼의 토큰을 전송
        uint256 nowPrice = price;
        if (isStore == false) {
            //거래 금액에서 수수료만큼 차감된 금액 구하기
            nowPrice=nowPrice.mul(erc721Contract.getCharge(nftId)).div(100);
            //전송
            erc20Contract.transferFrom(address(this),msg.sender, nowPrice);
            //수수료만큼 사장님에게 전송
            erc20Contract.transferFrom(address(this),storeAddress, price.sub(nowPrice));
        }
        else {
            // 사용가능한 날짜가 지났을 시만 가능(환불문제)
            require(block.timestamp > endDate, "sale is not finished");
            //가게일경우 모두 전송
            // payable(msg.sender).transfer(address(this).balance);
            erc20Contract.transferFrom(address(this),msg.sender, nowPrice);
        }
        emit Withdraw(msg.sender,nowPrice);
    }

    function getSaleInfo()
    public
    view
    returns (uint256, uint256, uint256, uint256, address, bool, address, address)    {
        return (startDate, endDate, price, nftId, storeAddress, isEnd, currencyAddress, nftAddress);
    }

    // function balanceOf() public view returns (uint256) {
    //     return currencyAddress.balanceOf(address(this));
    // }

    function end() private {
        isEnd = true;
        emit Purchase(nftId,sellerAddress,buyerAddress);
    }

    function onERC721Received (address operator, address from, uint256 tokenId, bytes memory data)
    public
    override
    returns (bytes4) {
        // do something with the transferred NFT
        return this.onERC721Received.selector;
    }

    modifier onlyIsEnd() {
        require(isEnd == true, "sale is not finished.");
        _;
    }
    modifier onlyAfterStart() {
        require(block.timestamp >= startDate, "sale is not started.");
        _;
    }
    modifier onlyEndDate(){
        require(block.timestamp > endDate, "sale is finished");
        _;
    }
    modifier onlyStoreAddress(){
        require(msg.sender == storeAddress, "only store address");
        _;
    }
    modifier onlySellerAddress(){
        require(msg.sender == sellerAddress, "only seller address");
        _;
    }

}
