/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styled from "styled-components";
import QRcode from "../../../assets/QRcode.png";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const EX = styled.div`
  color: gray;
  margin-bottom: 10px;
`;
const Ticket = styled.div`
  position: relative;
  background-color: whitesmoke;
  width: 380px;
  height: 140px;
  border-top: groove 20px #bcb6ff;
  display: flex;
  flex-wrap: wrap;
`;
const Info = styled.div`
  flex: 1;
  width: 190px;
  height: 130px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 10px;
  & > div:not(:last-child) {
    margin: 6%;
  }
  span {
    margin-right: 20px;
  }
`;
const QR = styled.div`
  flex: 1;
  border-left: dashed 2px #bcb6ff;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100px;
  }
`;
const Date = styled.div`
  margin-bottom: 5px;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  h4 {
    margin-right: 15px;
    font-weight: bolder;
  }
`;
const Price = styled.div`
  font-size: 12px;
  margin-top: 15px;
`;

function PublishTicket() {
  return (
    <Wrapper>
      <EX>(예시)</EX>
      <Ticket>
        <Info>
          <div>
            <Date>2023.01.01</Date>
            <Title>
              <h4>NFasT가게</h4>
              <span>10:00</span>
            </Title>
            <Price>0.0042eth</Price>
          </div>
        </Info>
        <QR>
          <img src={QRcode} alt="qr" />
        </QR>
      </Ticket>
    </Wrapper>
  );
}

export default PublishTicket;
