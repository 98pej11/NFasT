import * as React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import PublishCard from "./PublishCard";
import DateField from "./DateField";
import SwitchTime from "./SwitchTime";
import TimeField from "./TimeField";
import CountField from "./CountField";
import PriceField from "./PriceField";

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

const Date = styled.div`
  display: flex;
  align-items: center;

  h3 {
    margin-right: 10px;
  }
`;

const Time = styled.div`
  display: flex;
  align-items: center;

  h3 {
    margin-right: 20px;
  }
`;

const Count = styled.div`
  display: flex;
  align-items: center;

  h3 {
    margin-right: 50px;
  }
`;

const Price = styled.div`
  display: flex;
  align-items: center;

  h3 {
    margin-right: 50px;
  }
`;
function SellerPublish() {
  return (
    <div>
      <PublishCard />
      <Publish>
        <Input>
          <Date>
            <h3>날짜</h3>
            <DateField />
          </Date>
          <Time>
            <h3>시간</h3>
            <SwitchTime />
            <TimeField />
          </Time>
          <Count>
            <h3>수량</h3>
            <CountField />
          </Count>
          <Price>
            <h3>가격</h3>
            <PriceField />
          </Price>
        </Input>
        <Button variant="contained" disableElevation>
          발행하기
        </Button>
      </Publish>
    </div>
  );
}
export default SellerPublish;
