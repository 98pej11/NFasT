import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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
  width: 270px;
  height: 120px;
  border-top: groove 20px #bcb6ff;
  display: flex;
`;
const Info = styled.div`
  width: 150px;
  height: 120px;
  h3 {
    margin-left: 10px;
  }
  span {
    font-size: 12px;
    margin-left: 10px;
  }
  div {
    display: flex;
    align-items: center;
  }
`;
const QR = styled.div`
  width: 120px;
  height: 120px;
  border-left: dashed 2px #bcb6ff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function NewTicket({ title, date, time, price, qr }) {
  return (
    <Wrapper>
      <Ticket>
        <Info>
          <div>
            <h3>{title}</h3>
            <span>{price} ETH</span>
          </div>
          <div>
            <span>{date}</span>
            <span>{time}</span>
          </div>
        </Info>
        <QR>{qr}</QR>
      </Ticket>
    </Wrapper>
  );
}
NewTicket.defaultProps = {
  title: "가게이름",
  date: "날짜",
  time: "시간",
  price: 0,
  qr: "qr",
};
NewTicket.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  time: PropTypes.number,
  price: PropTypes.number,
  qr: PropTypes.string,
};
export default NewTicket;
