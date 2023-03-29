import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import PastTicket from "../../commons/PastTicket";
import PublishField from "./PublishField";
import SwitchTime from "./SwitchTime";
import {
  web3,
  NFasTContract,
  // saleFactory,
  // ssafyTokenContract,
  // createSaleContract,
} from "../../axios/web3";
import ipfs from "../../axios/ipfs";

const Publish = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const DateTime = styled.div`
  display: flex;
  align-items: center;
  h3 {
    width: 20%;
    // margin-right: 20px;
  }
`;

const Time = styled(DateTime)`
  h3 {
    width: 20%;
  }
`;

const Count = styled(DateTime)`
  h3 {
    width: 20%;
    // margin-right: 50px;
  }
`;

const Price = styled(Count)``;

// string을 시간객체로 변경
function stringToDate(str) {
  const y = str.substr(0, 4);
  const m = str.substr(5, 2);
  const d = str.substr(8, 2);
  return new Date(y, m - 1, d);
}

// date 값을 uint으로 변경
function dateToUint(date) {
  return Math.floor(stringToDate(date).getTime() / 1000);
}

// 시간을 uint로 변경
function timeToUint(time) {
  const m = time.substr(0, 2);
  const s = time.substr(3, 2);
  return m * 60 * 60 + s * 60;
}

async function createNfast(data, cid) {
  // nft 발행
  // 발행할 개수, admin 주소, tokenurl, 가게주소, 날짜, 점심저녁구분, 시작시간, 종료시간, 가격, 수수료
  const tx = await NFasTContract.methods
    .createAll(
      data.count,
      data.walletAddress,
      cid,
      data.walletAddress,
      dateToUint(data.date),
      data.time,
      dateToUint(data.date) + timeToUint(data.start),
      dateToUint(data.date) + timeToUint(data.end),
      data.price,
      5
    )
    .send({
      from: data.walletAddress,
      value: web3.utils.toWei("0.1", "ether"), // Optional: set the amount of ether to send with the transaction
    });

  NFasTContract.events
    .CreateAll({ fromBlock: tx.blockNumber }, function (error, event) {
      console.log(event);
    })
    .on("connected", function (subscriptionId) {
      console.log(subscriptionId);
    })
    .on("data", function (event) {
      console.log(event.returnValues[1]);
    })
    .on("changed", function (event) {
      console.log(event.returnValues);
    })
    .on("error", function (error, receipt) {
      console.log(receipt);
    });

  //   NFasTContract.getPastEvents('allEvents', {
  //     toBlock: 'latest'
  // }, function(error, events){ console.log(events); });
}

const jsonSubmit = async (data) => {
  const accounts = await web3.eth.getAccounts();
  // const ethAddress = await storehash.options.address; CA주소
  const ipfsFile = data;
  ipfsFile.walletAddress = await accounts[0];
  // console.log(await accounts[0]);
  const file = {
    path: "/tmp/myfile.txt",
    content: JSON.stringify(ipfsFile),
  };
  const testc = await ipfs.add(file);
  console.log(testc.cid.string);
  console.log(ipfsFile.walletAddress);

  createNfast(data, testc.cid.string);

  return { cid: testc.cid.string, walletAddress: accounts[0] };
};

function PublishPage() {
  const handleRegist = async (e) => {
    e.preventDefault();
    // eslint-disable-next-line
    console.log(e.target[2].checked);
    const data = {
      date: e.target[0].value,
      time: e.target[2].checked === false ? 0 : 1,
      start: e.target[3].value,
      end: e.target[5].value,
      count: e.target[7].value,
      price: e.target[9].value,
      cid: "",
      walletAddress: "",
      storeName: "",
    };
    // rest api
    // data.storeName = 가게이름
    // console.log(e.target[2]);
    // console.log(e.target[2].value);
    // await jsonSubmit(data);
    const tempData = await jsonSubmit(data);
    data.cid = tempData.cid;
    data.walletAddress = tempData.walletAddress;
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <div>
      <PastTicket />
      <Publish>
        <Form onSubmit={handleRegist}>
          <DateTime>
            <h3>날짜</h3>
            <PublishField content="date" variant="outlined" />
          </DateTime>
          <Time>
            <h3>시간</h3>
            <SwitchTime />
            <PublishField
              sx={{ marginLeft: "20px" }}
              content="time"
              variant="outlined"
            />
            <PublishField
              sx={{ marginLeft: "20px" }}
              content="time"
              variant="outlined"
            />
          </Time>
          <Count>
            <h3>수량</h3>
            <PublishField content="count" variant="outlined" />
          </Count>
          <Price>
            <h3>가격</h3>
            <PublishField content="price" variant="outlined" />
          </Price>
          <Button
            sx={{ backgroundColor: "#BCB6FF" }}
            type="submit"
            variant="contained"
            disableElevation
          >
            발행하기
          </Button>
        </Form>
      </Publish>
    </div>
  );
}
export default PublishPage;
