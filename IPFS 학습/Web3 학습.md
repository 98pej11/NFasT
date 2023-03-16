### web3 사용법

- RPC API를 통한 Metamask 연동 구현 
```
  async function connect() {
    if (typeof web3 !== 'undefined') {
      // Mist/MetaMask의 프로바이더 사용
      web3 = new Web3(web3.currentProvider);
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      const account = accounts[0];
    } else {
      // 사용자가 Metamask를 설치하지 않은 경우에 대해 처리
      // 사용자들에게 Metamask를 설치하라는 등의 메세지를 보여줄 것
    }
  }
```
    - 원하는 서버에 지갑 연결 불가능 

- 트랜잭션 생성 방법
  - from: 트랜잭션을 발생시키는 Ethereum 주소
  - to: 트랜잭션을 보내는 Ethereum 주소
  - value: 전송할 이더량
  - gas: 가스비 (트랜잭션을 처리하는 데 필요한 비용)
  - gasPrice: 가스 단가
  - data: 호출할 스마트 계약 함수 및 인자

```
  const Web3 = require('web3');
  const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_PROJECT_ID');
  const privateKey = 'YOUR_PRIVATE_KEY';
  
  const fromAddress = '0x...'; 
  const toAddress = '0x...'; 
  const value = web3.utils.toWei('1', 'ether'); 
  const gasLimit = web3.utils.toHex(21000); 
  const gasPrice = web3.utils.toHex(web3.utils.toWei('10', 'gwei')); 
  
  const txObject = {
    from: fromAddress,
    to: toAddress,
    value: value,
    gasLimit: gasLimit,
    gasPrice: gasPrice
  };
  
  // 트랜잭션 서명 및 전송
  web3.eth.accounts.signTransaction(txObject, privateKey)
  .then((signedTx) => {
    web3.eth.sendSignedTransaction(signedTx.rawTransaction)
    .on('receipt', console.log);
  });
```
