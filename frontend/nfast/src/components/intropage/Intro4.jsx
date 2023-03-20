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
function Intro4() {
  return (
    <div>
      <div style={{ marginTop: 160 }}> </div>
      <Text>
        <h1> 고객들간의 거래만으로도</h1>
        <h1> 가게에 수입이 들어와요!</h1>
      </Text>
      <Text>
        <h3> 한정된 수량의 NFT만 발급해도</h3>
        <h3> 계속되는 수입을 볼 수 있어요~</h3>
      </Text>
      <Img>
        <img src={money} alt="" />
      </Img>
    </div>
  );
}

export default Intro4;
