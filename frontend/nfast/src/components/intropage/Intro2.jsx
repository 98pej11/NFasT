import React from "react";
import styled from "styled-components";

import backgroundImage from "../../assets/Burger.png";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background: url(${backgroundImage}) no-repeat center center fixed;
  background-size: cover;
`;
const Text = styled.div``;
function Intro2() {
  return (
    <Container>
      <Text>
        <h1 style={{ marginTop: 50 }}> 음식에 대한 값</h1>
        <h1> 제대로 받고 있나요?</h1>
        <h3> 줄 서서 먹는 맛집</h3>
        <h3> 그 기다림의 가치는 과연 얼마일까요?</h3>
      </Text>
    </Container>
  );
}

export default Intro2;
