// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "./IERC721.sol";
import "./IERC721Receiver.sol";
import "./extensions/IERC721Metadata.sol";
import "../../utils/Address.sol";
import "../../utils/Context.sol";
import "../../utils/Strings.sol";
import "../../utils/introspection/ERC165.sol";

/**
 * PJT Ⅰ - 과제 1 ERC-721 구현
 * @dev EIP-721을 준수하여 ERC721을 작성합니다.
 * https://eips.ethereum.org/EIPS/eip-721[ERC721] Non-Fungible Token Standard
 */
contract ERC721 is Context, ERC165, IERC721, IERC721Metadata {
    using Address for address;
    using Strings for uint256;

    // Token name
    string private _name;

    // Token symbol
    string private _symbol;

    // Mapping from token ID to owner address
    mapping(uint256 => address) private _owners;

    // Mapping owner address to token count
    mapping(address => uint256) private _balances;

    // Mapping from token ID to approved address
    mapping(uint256 => address) private _tokenApprovals;

    // Mapping from owner to operator approvals
    mapping(address => mapping(address => bool)) private _operatorApprovals;

    /**
     * @dev Initializes the contract by setting a `name` and a `symbol` to the token collection.
     */
    constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
    }

    /**
     * @dev See {IERC165-supportsInterface}.
     */
    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC165, IERC165)
        returns (bool)
    {
        return
            interfaceId == type(IERC721).interfaceId ||
            interfaceId == type(IERC721Metadata).interfaceId ||
            super.supportsInterface(interfaceId);
    }

    /**
     * @dev See {IERC721-balanceOf}.
     */
    function balanceOf(address owner)
        public
        view
        virtual
        override
        returns (uint256)
    {
        require(owner != address(0));
        return _balances[owner];
    }

    /**
     * @dev See {IERC721-ownerOf}.
     */
    function ownerOf(uint256 tokenId)
        public
        view
        virtual
        override
        returns (address)
    {
        return _owners[tokenId];
    }

    /**
     * @dev See {IERC721Metadata-name}.
     */
    function name() public view virtual override returns (string memory) {
        return _name;
    }

    /**
     * @dev See {IERC721Metadata-symbol}.
     */
    function symbol() public view virtual override returns (string memory) {
        return _symbol;
    }

    /**
     * @dev See {IERC721Metadata-tokenURI}.
     */
    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override
        returns (string memory)
    {
        return "test";
    }

    /**
     * @dev See {IERC721-approve}.
     */
    function approve(address to, uint256 tokenId) public virtual override {
        require(msg.sender == ERC721.ownerOf(tokenId));
        _tokenApprovals[tokenId] = to;
        emit Approval(msg.sender, to, tokenId);
    }

    /**
     * @dev See {IERC721-getApproved}.
     */
    function getApproved(uint256 tokenId)
        public
        view
        virtual
        override
        returns (address)
    {
        return _tokenApprovals[tokenId];
    }

    /**
     * @dev See {IERC721-setApprovalForAll}.
     */
    function setApprovalForAll(address operator, bool approved)
        public
        virtual
        override
    {
        require(msg.sender != operator);
        _operatorApprovals[_msgSender()][operator] = approved;

        emit ApprovalForAll(_msgSender(), operator, approved);
    }

    /**
     * @dev See {IERC721-isApprovedForAll}.
     */
    function isApprovedForAll(address owner, address operator)
        public
        view
        virtual
        override
        returns (bool)
    {
        return _operatorApprovals[owner][operator];
    }

    /**
     * @dev See {IERC721-transferFrom}.
     */
    function transferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual override {
        address addr_owner = ownerOf(tokenId);

        // 인자로 받는 _from이 토큰의 소유 계정과 일치하지 않으면 예외 발생.
        require(addr_owner == from, "_from is NOT the owner of the token");
        // 인자로 받는 _to가 0(null)이라면 예외 발생.
        require(to != address(0), "Transfer _to address 0x0");

        // 해당 토큰의 allowance address 여부 저장
        address addr_allowed = _tokenApprovals[tokenId];
        // 토큰의 본 소유계정이 메소드를 호출한 사람에게 소유권을 이전할 수 있도록 승인을 했는지 여부 저장
        bool isOp = _operatorApprovals[addr_owner][msg.sender];

        //msg.sender가 토큰의 소유계정이거나, 토큰의 allowance에 있는 계정이거나, 중개인 계정 true인 경우가 아니라면(세개 모두다 해당 안된다면) 예외 발생.
        require(
            addr_owner == msg.sender || addr_allowed == msg.sender || isOp,
            "msg.sender does not transferable token"
        );

        // transfer : change the owner of the token
        // 토큰의 주인을 _to 계정으로 변경
        _owners[tokenId] = to;
        // safematch를 사용해서 balance 감소
        _balances[from] = _balances[from] -= 1;
        // safematch를 사용해서 balance 증가
        _balances[to] = _balances[to] += 1;

        // reset approved address
        // ERC-721 표준에 의하면, 이전의 allowance를 갖고있던 계정을 리셋해줘야 한다.
        if (_tokenApprovals[tokenId] != address(0)) {
            // null로..
            delete _tokenApprovals[tokenId];
        }

        // 이벤트 발생
        emit Transfer(from, to, tokenId);
    }

    /**
     * @dev See {IERC721-safeTransferFrom}.
     */
    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) public virtual override {
        transferFrom(from, to, tokenId);
    }

    /**
     * @dev See {IERC721-safeTransferFrom}.
     */
    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId,
        bytes memory _data
    ) public virtual override {
        transferFrom(from, to, tokenId);
        if (to.isContract()) {
            bytes4 result = IERC721Receiver(to).onERC721Received(
                msg.sender,
                from,
                tokenId,
                _data
            );
            require(
                result ==
                    bytes4(
                        keccak256(
                            "onERC721Received(address, address, uint256, bytes)"
                        )
                    ),
                "receipt of token is NOT completed"
            );
        }
    }

    /**
     * @dev Mints `tokenId` and transfers it to `to`.
     *
     * WARNING: Usage of this method is discouraged, use {_safeMint} whenever possible
     *
     * Requirements:
     *
     * - `tokenId` must not exist.
     * - `to` cannot be the zero address.
     *
     * Emits a {Transfer} event.
     */
    function _mint(address to, uint256 tokenId) internal virtual {
        require(to != address(0));
        //todo tokenid 중복체크
        // require();
        _balances[to] += 1;
        _owners[tokenId] = to;
        emit Transfer(to, to, tokenId);
    }

    /**
     * @dev Destroys `tokenId`.
     * The approval is cleared when the token is burned.
     *
     * Requirements:
     *
     * - `tokenId` must exist.
     *
     * Emits a {Transfer} event.
     */
    function _burn(uint256 tokenId) internal virtual {
        address owner = _tokenApprovals[tokenId];
        delete _tokenApprovals[tokenId];
        _balances[owner] -= 1;
        _owners[tokenId] = address(0);
        emit Transfer(owner, address(0), tokenId);
    }
}
