import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import CardImg from "../../assets/NFast_Card.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Cards = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  position: absolute;
`;
const TopText = styled.div`
  position: relative;
  color: lightCyan;
  top: -90px;
  left: 10px;
`;
const Qr = styled.div`
  position: relative;
  top: 0
  left: 10px;
  width: 100px;
  height: 100px;
  background-color: blue;
`;
const BottomText = styled.div`
  position: relative;
  bottom: -85px;
  left: -50px;
  color: lightCyan;
`;
function NFastCard({ name, date, price }) {
  return (
    <Wrapper>
      <Cards>
        <Img src={CardImg} alt="car!" />
        <TopText>
          <h2>{name}</h2>
          <h3>{date}</h3>
        </TopText>
        <Qr>큐알</Qr>
        <BottomText>
          <button type="button">확인</button>
          <div>{price} Eth</div>
        </BottomText>
      </Cards>
    </Wrapper>
  );
}
NFastCard.defaultProps = {
  name: "가게이름",
  date: "날짜",
  price: 0,
};
NFastCard.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  price: PropTypes.number,
};
export default NFastCard;
