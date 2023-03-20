//App.js
import React, { useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';
import { Buffer } from 'buffer';
import storehash from './storehash';
import web3 from './web3';
import ipfs from './ipfs';

const App = () => {
  // const ipfsClient = require('ipfs-http-client')
  // const ipfs = ipfsClient({ host: 'localhost', port: '5001', protocol: 'http' })


  const [input, setInput] = useState({
    'description': '',
    'external_url': '',
    'image': '',
    'name': '',
    'attribute': [],
  });

  const [info, setInfo] = useState({
    ipfsHash: null,
    buffer: '',
    ethAddress: '',
    blockNumber: '',
    transactionHash: '',
    gasUsed: '',
    txReceipt: ''
  })

  const captureFile = (event) => {
    event.stopPropagation();
    event.preventDefault();
    const file = event.target.files[0];
    let reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => convertToBuffer(reader);
  };

  const convertToBuffer = async (reader) => {
    const buffer = await Buffer.from(reader.result);
    setInfo({ buffer });
  };

  const onClick = async () => {
    let table = document.getElementById('TransactionTable');

    try {
      setInfo({ blockNumber: "waiting.." });
      setInfo({ gasUsed: "waiting..." });

      await web3.eth.getTransactionReceipt(info.transactionHash, (err, txReceipt) => {
        console.log(err, txReceipt);
        setInfo({ txReceipt });
        setInfo({ blockNumber: txReceipt.blockNumber });
        setInfo({ gasUsed: txReceipt.gasUsed });
        let row = `            
          <tr>
            <td>Tx Hash</td>
            <td>${txReceipt.transactionHash}</td>
          </tr>

          <tr>
            <td>Block Number</td>
            <td>${txReceipt.blockNumber}</td>
          </tr>

          <tr>
            <td>사용 된 가스</td>
            <td>${txReceipt.gasUsed}</td>
          </tr>`
        table.innerHTML += row;
      });
    }
    catch (error) {
      console.log(error);
    }
  }

  const onSubmit = async (event) => {
    let table = document.getElementById('TransactionTable');
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
    console.log('Sending from Metamask account: ' + accounts[0]);
    const ethAddress = await storehash.options.address;
    console.log("test");
    console.log(info.buffer);
    const file = {
      path: '/tmp/myfile.txt',
      content: info.buffer
    }
    const test = await ipfs.add(file);
    console.log(test.cid)
    let row = `
      <tr>
        <td>Eth 계약에 저장된 IPFS 해시 번호</td>
        <td>${test.cid}</td>
      </tr>
      <tr>
        <td>Ethereum 계약 주소</td>
        <td>${ethAddress}</td>
      </tr>
    `
    table.innerHTML += row;
  };

  const onChangeValue = async () => {
    let desc = document.getElementById('description').value;
    let img = document.getElementById('image').value;
    let name = document.getElementById('name').value;

    setInput({
      'description': desc,
      'external_url': '',
      'image': img,
      'name': name,
      'attribute': [],
    });

    jsonSubmit();
  }

  const jsonSubmit = () => {
    ipfs.files.add(Buffer.from(JSON.stringify(input)))
      .then(res => {
        const hash = res[0].hash
        console.log('added data hash:', hash)
        return ipfs.files.cat(hash)
      })
      .then(output => {
        console.log('retrieved data:', JSON.parse(output))
      })
  }

  return (
    <div className="App">
      <p>------------------------------------------</p>
      <Container >
        <h3> Choose file to send to IPFS </h3>
        <Form>
          <input
            type="file"
            onChange={captureFile}
          />
          <Button
            bsStyle="primary"
            onClick={onSubmit}
            // type="submit"
            >
            보내기
          </Button>
        </Form>
        <p>------------------------------------------</p>
        <Button onClick={onClick}>거래 영수증 받기</Button>

        <table>
          <thead>
            <tr>
              <th>Tx Receipt Category</th>
              <th>Values</th>
            </tr>
          </thead>
          <tbody id="TransactionTable">
          </tbody>
        </table>
        <div>
          <p>------------------------------------------</p>
          <p>NFT 세부정보 담기</p>
          <input type="text" placeholder="description" id="description" /><br />
          <input type="text" placeholder="image url" id="image" /><br />
          <input type="text" placeholder="name" id="name" /><br />
          <button onClick={onChangeValue}>제출하기</button>
        </div>
      </Container >
    </div>
  );
}

export default App;