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
  ssafyTokenContract,
  createSaleContract,
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

const Date = styled.div`
  display: flex;
`;

const Time = styled(Date)`
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const Count = styled(Date)``;

const Price = styled(Count)`
  margin-bottom: 20px;
`;
// styled-components 끝

// jsonSubmit 함수
const jsonSubmit = async (data) => {
  const accounts = await web3.eth.getAccounts();
  // const ethAddress = await storehash.options.address; CA주소
  console.log(accounts[0]);
  console.log("가장 최근 eigen", await NFasTContract.methods.current().call());
  console.log("=*******=");
  console.log(
    await NFasTContract.methods
      .create(
        accounts[0],
        "test",
        accounts[0],
        1679902298,
        true,
        1679902298,
        1679902298,
        10,
        1
      )
      .send(
        {
          from: "0x90DA9C2D5F2d1FA57C65ec89195638d90ff89C92",
          value: web3.utils.toWei("0.1", "ether"), // Optional: set the amount of ether to send with the transaction
        },
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            console.log("이게진짜");
            console.log(result);
            console.log("returns말고 return newTokenId???");
          }
        }
      )
  );
  console.log("==========");
  const newTokenId = await NFasTContract.methods.current().call();
  console.log(await NFasTContract.methods.getIsUse(newTokenId).call());
  console.log(
    await NFasTContract.methods.setIsUse(newTokenId).send(
      {
        from: "0x90DA9C2D5F2d1FA57C65ec89195638d90ff89C92",
        // value: web3.utils.toWei("1.0", "ether"), // Optional: set the amount of ether to send with the transaction
      }
      // (err, result) => {
      //   if (err) {
      //     console.log(err);
      //   } else {
      //     console.log("사용여부 수정");
      //     console.log(result);
      //     console.log("return 없을 수도 ");
      //   }
      // }
    )
  );
  console.log(await NFasTContract.methods.getIsUse(newTokenId).call());
  console.log("==========");
  console.log(await saleFactory.methods);
  console.log(await ssafyTokenContract.methods);
  console.log(await saleFactory.methods);
  console.log(await createSaleContract.methods);
  console.log(await accounts[0]);

  const file = {
    path: "/tmp/myfile.txt",
    content: JSON.stringify(data),
  };

  const testc = await ipfs.add(file);
  console.log(testc.cid.string);
  return { cid: testc.cid.string, walletAddress: accounts[0] };
  // setInput({
  //   external_url: testc.cid.string,
  //   image: accounts[0],
  // });
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
    console.log(e.target[2]);
    console.log(e.target[2].value);
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
          <Date>
            <h4>날짜</h4>
            <PublishField content="date" variant="outlined" />
          </Date>
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
