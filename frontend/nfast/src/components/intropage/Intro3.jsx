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
function Intro3() {
  return (
    <div>
      <div style={{ marginTop: 160 }}> </div>
      <Text>
        <h1> 우선권을 구매한</h1>
        <h1> 특별한 손님만이</h1>
        <h1> 서비스를 이용할 수 있어요</h1>
      </Text>
      <Text>
        <h3> NFasT 서비스의 품질을 위해</h3>
        <h3> 발행 수의 제한이 있어요</h3>
        <h3>이쯤에서 수익에 대한 의문이 드시나요?</h3>
      </Text>
      <Img>
        <img src={money} alt="" />
      </Img>
    </div>
  );
}

export default Intro3;
