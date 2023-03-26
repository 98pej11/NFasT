import React from "react";
import styled from "styled-components";
import StoreImg from "../../assets/StoreImage.png";

const Wrapper = styled.div`
  margin-top: 20px;
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    height: auto;
  }
  @media only screen and (min-width: 768px) {
    height: auto;
  }
`;

const Img = styled.img`
  width: 100%;
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    height: auto;
  }
  @media only screen and (min-width: 768px) {
    height: 500px;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

function AboutStore() {
  return (
    <Wrapper>
      <Img src={StoreImg} alt="car!" />
      <Info>
        <h2>연돈 제주도 본점</h2>
        <span>국내 최초 백종원님 마음속 1등 돈가스 집</span>
        <span>이용시간 12:00~21:00</span>
        <span>전화번호 0501-232</span>
      </Info>
    </Wrapper>
  );
}

export default AboutStore;
