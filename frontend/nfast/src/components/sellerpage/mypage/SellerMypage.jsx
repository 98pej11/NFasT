/* eslint-disable no-console */
import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import MyField from "./MyField";
// import SwitchTime from "./SwitchTime";
import { web3 } from "../../axios/web3";
import ipfs from "../../axios/ipfs";

const Publish = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Date = styled.div`
  display: flex;
  align-items: center;

  h5 {
    width: 30%;
    margin-right: 20px;
  }
`;

const Time = styled(Date)`
  h5 {
    width: 30%;
  }
`;

const Count = styled(Date)`
  h5 {
    margin-right: 20px;
  }
`;

const Price = styled(Count)``;

const jsonSubmit = async (data) => {
  const accounts = await web3.eth.getAccounts();
  // const ethAddress = await storehash.options.address; CA주소
  console.log(accounts[0]);
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

function SellerPublish() {
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
    <div>
      <Publish>
        <Form onSubmit={handleRegist}>
          <Date>
            <h5>지갑 주소</h5>
            <MyField content="count" variant="outlined" />
          </Date>
          <Count>
            <h5>가게 이름</h5>
            <MyField content="count" variant="outlined" />
          </Count>
          <Time>
            <h5>런치</h5>
            <MyField sx={{}} content="time" variant="outlined" />
            <div style={{ marginLeft: 30 }} />
            <h5>디너</h5>
            <MyField sx={{}} content="time" variant="outlined" />
          </Time>
          <Count>
            <h5>전화 번호</h5>
            <MyField content="count" variant="outlined" />
          </Count>
          <Price>
            <h5>가게 소개</h5>
            <MyField content="price" variant="outlined" />
          </Price>
          <Button
            sx={{ backgroundColor: "#BCB6FF" }}
            type="submit"
            variant="contained"
            disableElevation
          >
            수정하기
          </Button>
        </Form>
      </Publish>
    </div>
  );
}
export default SellerPublish;
