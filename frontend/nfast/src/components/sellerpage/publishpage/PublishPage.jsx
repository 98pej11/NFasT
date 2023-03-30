/* eslint-disable no-console */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { QrReader } from "react-qr-reader";
import styled from "styled-components";
import Button from "@mui/material/Button";
import PublishTicket from "./PublishTicket";
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
import { publishAction } from "../../../redux/actions/publishAction";

// styled-components 시작

const Wrapper = styled.div`
  height: 70vh;
  margin-top: 20px;
`;

const Ticket = styled(PublishTicket)`
  margin-bottom: 20px;
`;
const Publish = styled.div`
  height: 70%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  h4 {
    width: 40%;
    margin-right: 10px;
    display: flex;
    align-items: center;
  }
`;
const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  div {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const DateTime = styled.div`
  display: flex;
`;

const Time = styled(DateTime)`
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Count = styled(DateTime)``;

const Price = styled(Count)`
  margin-bottom: 20px;
`;
// styled-components 끝

// jsonSubmit 함수

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

  console.log(tx);
  // NFasTContract.events
  //   .CreateAll({ fromBlock: tx.blockNumber }, (error, event) => {
  //     console.log(event);
  //   })
  //   .on("connected", (subscriptionId) => {
  //     console.log(subscriptionId);
  //   })
  //   .on("data", (event) => {
  //     console.log(event.returnValues[1]);
  //   })
  //   .on("changed", (event) => {
  //     console.log(event.returnValues);
  //   })
  //   .on("error", (error, receipt) => {
  //     console.log(receipt);
  //   });

  NFasTContract.getPastEvents(
    "CreateAll",
    {
      fromBlock: tx.blockNumber,
      toBlock: "latest",
    },
    // eslint-disable-next-line
    function (error, events) {
      console.log(events[0].returnValues[1]);
    }
  );
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
// jsonSubmit 함수 끝

function PublishPage() {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("environment");
  const [startScan, setStartScan] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);
  const [data, setData] = useState("");
  // const storeSequence;
  const handleScan = async (scanData) => {
    setLoadingScan(true);
    console.log(`loaded data data`, scanData);
    if (scanData && scanData !== "") {
      console.log(`loaded >>>`, scanData);

      // storeSequence=scanData
      setData(scanData.text);
      dispatch(publishAction.checkQR(scanData.text));
      setStartScan(false);
      setLoadingScan(false);
      // setPrecScan(scanData);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  useEffect(() => {
    dispatch(publishAction.storeTitle(1));
    // dispatch(publishAction.checkQR(data));
  }, []);

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
    useEffect(() => {
      dispatch(publishAction.storeTitle(1));
    }, []);
  };

  return (
    <Wrapper>
      <Ticket />
      <Publish>
        <Form onSubmit={handleRegist}>
          <DateTime>
            <h4>날짜</h4>
            <PublishField content="date" variant="outlined" />
          </DateTime>
          <Time>
            <h4>시간</h4>
            <SwitchTime />
            <div>
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
            </div>
          </Time>
          <Count>
            <h4>수량</h4>
            <PublishField content="count" variant="outlined" />
          </Count>
          <Price>
            <h4>가격</h4>
            <PublishField content="price" variant="outlined" />
          </Price>
          <div>
            <Button
              sx={{ backgroundColor: "#BCB6FF" }}
              type="submit"
              variant="contained"
              disableElevation
            >
              발행하기
            </Button>
          </div>
        </Form>
      </Publish>
      <div>
        <div>
          <h1>QR코두 스캔해보쟈~</h1>

          <button
            onClick={() => {
              setStartScan(!startScan);
            }}
          >
            {startScan ? "Stop Scan" : "Start Scan"}
          </button>
          {startScan && (
            <>
              <select onChange={(e) => setSelected(e.target.value)}>
                <option value="environment">Back Camera</option>
                <option value="user">Front Camera</option>
              </select>
              <QrReader
                facingMode={selected}
                delay={1000}
                onError={handleError}
                onResult={handleScan}
                // chooseDeviceId={()=>selected}
                style={{ width: "300px" }}
              />
            </>
          )}
          {loadingScan && <p>Loading</p>}
          {data !== "" && <p>{data}</p>}
        </div>
      </div>
    </Wrapper>
  );
}
export default PublishPage;
