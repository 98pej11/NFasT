/* eslint-disable no-console */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Button from "@mui/material/Button";
import PastTicket from "../../commons/PastTicket";
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

const Date = styled.div`
  display: flex;
  align-items: center;
  h3 {
    width: 20%;
    // margin-right: 20px;
  }
`;

const Time = styled(Date)`
  h3 {
    width: 20%;
  }
`;

const Count = styled(Date)`
  h3 {
    width: 20%;
    // margin-right: 50px;
  }
`;

const Price = styled(Count)``;

const jsonSubmit = async (data) => {
  const accounts = await web3.eth.getAccounts();
  // const ethAddress = await storehash.options.address; CA주소
  console.log(
    await NFasTContract.methods
      .create(
        "0xBae7Be1B10cc17f62eeCeBDC381fCc7e0E6A2249",
        "test",
        "0xEABD22D5e36E96203bC7861F4580bB5238a8b0F8",
        1679902298,
        true,
        1679902298,
        1679902298,
        10,
        1
      )
      .send({
        from: "0xBae7Be1B10cc17f62eeCeBDC381fCc7e0E6A2249",
        value: web3.utils.toWei("0.1", "ether"), // Optional: set the amount of ether to send with the transaction
      })
  );
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
    <div>
      <PastTicket />
      <Publish>
        <Form onSubmit={handleRegist}>
          <Date>
            <h3>날짜</h3>
            <PublishField content="date" variant="outlined" />
          </Date>
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
