/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
// import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Ticket = styled.div`
  position: relative;
  //   종이같은 그림자
  &:before {
    z-index: -1;
    position: absolute;
    content: "";
    bottom: 15px;
    left: 10px;
    width: 50%;
    top: 80%;
    max-width: 300px;
    background: #777;
    -webkit-box-shadow: 0 15px 10px #777;
    -moz-box-shadow: 0 15px 10px #777;
    box-shadow: 0 15px 10px #777;
    -webkit-transform: rotate(-3deg);
    -moz-transform: rotate(-3deg);
    -o-transform: rotate(-3deg);
    -ms-transform: rotate(-3deg);
    transform: rotate(-3deg);
  }
  &:after {
    z-index: -1;
    position: absolute;
    content: "";
    bottom: 15px;
    width: 50%;
    top: 80%;
    max-width: 300px;
    background: #777;
    -webkit-box-shadow: 0 15px 10px #777;
    -moz-box-shadow: 0 15px 10px #777;
    box-shadow: 0 15px 10px #777;
    -webkit-transform: rotate(3deg);
    -moz-transform: rotate(3deg);
    -o-transform: rotate(3deg);
    -ms-transform: rotate(3deg);
    transform: rotate(3deg);
    right: 10px;
    left: auto;
  }
  background-color: whitesmoke;
  width: 380px;
  height: 140px;
  border-top: groove 20px #bcb6ff;
  display: flex;
  flex-wrap: wrap;
`;
const Info = styled.div`
  flex: 1;
  width: 150px;
  height: 100px;
  display: flex;
  justify-contents: center;
  flex-direction: column;
  & > div:not(:last-child) {
    margin: 6%;
  }
`;
const QR = styled.div`
  flex: 1;
  border-left: dashed 2px #bcb6ff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyleBtn = styled.div`
  display: flex;
  justify-content: center;
  Button {
    margin: 2%;
    width: 80px;
    height: 30px;
    background-color: #bcb6ff;
    color: white;
    font-size: 12px;
  }
`;

function FutureTicket({
  storeName,
  nfastDate,
  nfastStartTime,
  nfastEndTime,
  nfastPrice,
  nfastQr,
}) {
  return (
    <Wrapper>
      <Ticket>
        <Info>
          <div>
            <span>{storeName}</span>
            <span>{nfastPrice} ETH</span>
          </div>
          <div>
            <span>
              {`${new Date(nfastDate).getFullYear()}.
                ${new Date(nfastDate).getMonth()}.
                ${new Date(nfastDate).getDay()}`}
            </span>
            <div>
              <span>{nfastStartTime}</span>
              <span>{nfastEndTime}</span>
            </div>
          </div>
          <div>
            <StyleBtn>
              <Button variant="contained">재방문</Button>
            </StyleBtn>
          </div>
        </Info>
        <QR>{nfastQr}</QR>
      </Ticket>
    </Wrapper>
  );
}
FutureTicket.defaultProps = {
  storeName: "가게이름",
  nfastDate: "날짜",
  nfastStartTime: "0",
  nfastEndTime: "0",
  nfastPrice: 0,
  nfastQr: "qr",
};
FutureTicket.propTypes = {
  storeName: PropTypes.string,
  nfastDate: PropTypes.string,
  nfastStartTime: PropTypes.string,
  nfastEndTime: PropTypes.string,
  nfastPrice: PropTypes.number,
  // eslint-disable-next-line react/forbid-prop-types
  nfastQr: PropTypes.object,
};
export default FutureTicket;
