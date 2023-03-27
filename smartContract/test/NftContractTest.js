/**
 * PJT Ⅰ - 과제 3 테스트 코드 작성
 * @dev NFT mint, transfer, and compare URI 
 */

const NftCreator = artifacts.require("SsafyNFT");

contract("NftCreator", (accounts) => {
    it("NFT mint, transfer, and compare URI", async () => {
        // TODO
        // 다음이 반드시 테스트되어야 합니다.
        
        const sender = accounts[0];
        const receiver = accounts[1];
        const tokenURI = "https://example.com/nft";
        const ssafyNFT = await NftCreator.new("test","test2");

        await ssafyNFT.create(sender, tokenURI);
        const tokenId=await ssafyNFT.current();
        assert.equal(tokenId, 1, "NFT Mint Failed");
        var owner = await ssafyNFT.ownerOf(tokenId);
        assert.equal(sender, owner, "NFT Mint Failed");
        await ssafyNFT.transferFrom(sender, receiver, tokenId);
        owner = await ssafyNFT.ownerOf(tokenId);
        assert.equal(receiver, owner, "NFT Transfer Failed.");
        const tokenURIFetched = await ssafyNFT.tokenURI(tokenId);
        assert.equal(tokenURI, tokenURIFetched, "Wrong Token Id or URI.")
    });

});