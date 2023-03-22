import * as React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import UploadPhoto from "./UploadPhoto";
import InfoField from "./InfoField";
import TimeField from "../publishpage/TimeField";

const Publish = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Input = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Wallet = styled.div`
  display: flex;
  align-items: center;

  h3 {
    margin-right: 10px;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;

  h3 {
    margin-right: 20px;
  }
`;

const Time = styled.div`
  display: flex;
  align-items: center;

  h3 {
    margin-right: 50px;
  }
`;

const Intro = styled.div`
  display: flex;
  align-items: center;

  h3 {
    margin-right: 50px;
  }
`;

const Num = styled.div`
  display: flex;
  align-items: center;

  h3 {
    margin-right: 50px;
  }
`;

function SellerMypage() {
  return (
    <Publish>
      <UploadPhoto />
      <Input>
        <Wallet>
          <h3>지갑주소</h3>
          <InfoField />
        </Wallet>
        <Title>
          <h3>가게이름</h3>
          <InfoField />
        </Title>
        <Time>
          <h3>런치 시간</h3>
          <TimeField />
        </Time>
        <Time>
          <h3>디너 시간</h3>
          <TimeField />
        </Time>
        <Num>
          <h3>전화번호</h3>
          <InfoField />
        </Num>
        <Intro>
          <h3>가게 소개</h3>
          <InfoField />
        </Intro>
      </Input>
      <Button variant="contained" disableElevation>
        수정하기
      </Button>
    </Publish>
  );
}

export default SellerMypage;
