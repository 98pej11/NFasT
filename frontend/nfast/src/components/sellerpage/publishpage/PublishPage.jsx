import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import PublishCard from "./PublishCard";
import PublishField from "./PublishField";
import SwitchTime from "./SwitchTime";

const Publish = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Date = styled.div`
  display: flex;
  align-items: center;

  h3 {
    width: 30%;
    margin-right: 20px;
  }
`;

const Time = styled(Date)`
  h3 {
    width: 30%;
  }
`;

const Count = styled(Date)`
  h3 {
    margin-right: 50px;
  }
`;

const Price = styled(Count)``;

function SellerPublish() {
  const handleRegist = (e) => {
    e.preventDefault();
    console.log(e.target[2].checked);
    const data = {
      date: e.target[0].value,
      time: e.target[2].checked === false ? 0 : 1,
      start: e.target[3].value,
      end: e.target[5].value,
      count: e.target[7].value,
      price: e.target[9].value,
    };
    // eslint-disable-next-line no-console
    console.log(data);
  };

  return (
    <div>
      <PublishCard />
      <Publish>
        <Form onSubmit={handleRegist}>
          <Date>
            <h3>날짜</h3>
            <PublishField content="date" variant="outlined" />
          </Date>
          <Time>
            <h3>시간</h3>
            <SwitchTime />
            <PublishField
              sx={{ marginLeft: "20px" }}
              content="time"
              variant="outlined"
            />
            <PublishField
              sx={{ marginLeft: "20px" }}
              content="time"
              variant="outlined"
            />
          </Time>
          <Count>
            <h3>수량</h3>
            <PublishField content="count" variant="outlined" />
          </Count>
          <Price>
            <h3>가격</h3>
            <PublishField content="price" variant="outlined" />
          </Price>
          <Button type="submit" variant="contained" disableElevation>
            발행하기
          </Button>
        </Form>
      </Publish>
    </div>
  );
}
export default SellerPublish;
