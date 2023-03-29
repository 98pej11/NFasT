/* eslint-disable no-console */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Button from "@mui/material/Button";
import PublishTicket from "./PublishTicket";
import PublishField from "./PublishField";
import SwitchTime from "./SwitchTime";
import {
  web3,
  NFasTContract,
  saleFactory,
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

// string을 시간객체로 변경 형식 - 2023-02-31
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

// 시간을 uint로 변경 형식 - 12:12
function timeToUint(time) {
  const m = time.substr(0, 2);
  const s = time.substr(3, 2);
  return m * 60 * 60 + s * 60;
}

// jsonSubmit 함수

// 구매
// 거래 객체 받아야함
// async function purchase(sale, data) {
//   console.log("purchase sale");
//   const tx = await sale.methods.purchase().send({
//     from: data.walletAddress,
//     value: web3.utils.toWei("0.1", "ether"),
//   });

//   await sale.getPastEvents(
//     "Purchase",
//     {
//       fromBlock: tx.blockNumber,
//       toBlock: "latest",
//     },
//     (event) => {
//       console.log(event);
//       // db에 저장
//       // 구매완료
//       // 입금로직 여기서 처리
//       // 사장일 경우 모아서 처리해야되나나난나나난
//     }
//   );
// }

// 환불
// 사장만 가능 qr 형태로로로로로로로롤?
// 거래 객체가 필요한데 어캐 넘겨주냐
// async function refund(sale, data) {
//   console.log("refund sale");
//   const tx = await sale.methods.refund().send({
//     from: data.walletAddress,
//     value: web3.utils.toWei("0.1", "ether"),
//   });

//   await sale.getPastEvents(
//     "Refund",
//     {
//       fromBlock: tx.blockNumber,
//       toBlock: "latest",
//     },
//     (event) => {
//       console.log(event);
//       // db에 저장
//     }
//   );
// }

// 입금
// async function withdraw(sale, data) {
//   console.log("widthdraw sale");
//   const tx = await sale.methods.withdraw().send({
//     from: data.walletAddress,
//     value: web3.utils.toWei("0.1", "ether"),
//   });

//   await sale.getPastEvents(
//     "Withdraw",
//     {
//       fromBlock: tx.blockNumber,
//       toBlock: "latest",
//     },
//     (event) => {
//       console.log(event);
//       // db에 저장
//     }
//   );
// }

// 거래 생성
// async function createSale(data, nfastId) {
//   console.log("start sale");
//   // nfast id, 가격, 시작시간, 종료시간
//   const startDate = dateToUint(data.date) - 60 * 60 * 24 * 7;
//   const tx = await saleFactory.methods
//     .createSale(
//       nfastId,
//       data.price,
//       startDate,
//       dateToUint(data.date) + timeToUint(data.end)
//     )
//     .send({
//       from: data.walletAddress,
//       value: web3.utils.toWei("0.1", "ether"),
//     });

//   await saleFactory.getPastEvents(
//     "CreateSale",
//     {
//       fromBlock: tx.blockNumber,
//       toBlock: "latest",
//     },
//     (event) => {
//       console.log(event);
//       // db에 저장
//     }
//   );
// }

// 사장님 생성 후 거래 생성
async function createAllSale(data, nfastIds) {
  console.log("start sale");
  // nfast id, 가격, 시작시간, 종료시간
  const startDate = dateToUint(data.date) - 60 * 60 * 24 * 7;
  const tx = await saleFactory.methods
    .createAllSale(
      nfastIds,
      data.price,
      startDate,
      dateToUint(data.date) + timeToUint(data.end)
    )
    .send({
      from: data.walletAddress,
      value: web3.utils.toWei("0.1", "ether"),
    });
  // await nfastIds.forEach(async (nfastId) => {
  //   // 판매일로부터 일주일전
  //   console.log(saleFactory.methods);

  // });
  console.log(tx);
  await saleFactory.getPastEvents(
    "allEvents",
    {
      toBlock: nfastIds.length,
    },
    (event) => {
      console.log(event);
      // db에 저장
    }
  );
}

// nft 발행
async function createNfast(data, cid) {
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
    async (error, events) => {
      console.log(events[0].returnValues[1]);
      await createAllSale(data, events[0].returnValues[1]);
      // db에 저장
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

  await createNfast(data, testc.cid.string);

  return { cid: testc.cid.string, walletAddress: accounts[0] };
};
// jsonSubmit 함수 끝

function PublishPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(publishAction.storeTitle(1));
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
    </Wrapper>
  );
}
export default PublishPage;
