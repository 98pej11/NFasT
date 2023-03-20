import React from "react";
import styled from "styled-components";
import money from "../../assets/money.png";

const Text = styled.div`
  margin-top: 10%;
  margin-left: 3%;
`;
const Img = styled.div`
  img {
    width: 600px;
    height: 600px;
    position: absolute;
    top: 250px;
    left: 180px;
  }
`;
function Intro1() {
  return (
    <div>
      <div style={{ marginTop: 160 }}> </div>
      <Text>
        <h1> 음식에 대한 값</h1>
        <h1> 제대로 받고 있나요?</h1>
      </Text>
      <Text>
        <h3> 줄 서서 먹는 맛집</h3>
        <h3> 그 기다림의 가치는 과연 얼마일까요?</h3>
      </Text>
      <Img>
        <img src={money} alt="" />
      </Img>
    </div>
  );
}

export default Intro1;
