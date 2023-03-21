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
function Intro5() {
  return (
    <div>
      <div style={{ marginTop: 160 }}> </div>
      <Text>
        <h1> NFasT를 이용하는 </h1>
        <h1> 사장님들의 </h1>
        <h1>평균 수입이에요!</h1>
      </Text>
      <Text>
        <h3> 하루 평균 000원의 수익이 발생해요 </h3>
      </Text>
      <Img>
        <img src={money} alt="" />
      </Img>
    </div>
  );
}

export default Intro5;
