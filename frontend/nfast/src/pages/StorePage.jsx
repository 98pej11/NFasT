import React from "react";
import styled from "styled-components";
import Chip from "@mui/material/Chip";
import DoneIcon from "@mui/icons-material/Done";
import StoreImg from "../assets/StoreImage.png";

const Wrapper = styled.div`
  background-color: whitesmoke;
  height: 100vh;
`;

const Img = styled.img`
  width: 100%;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Chips = styled.div`
  display: flex;
`;
const Graph = styled.div`
  display: flex;
`;

function StorePage() {
  const handleClick = () => {
    // eslint-disable-next-line no-console
    console.log("You clicked the Chip.");
  };

  return (
    <Wrapper>
      <Img src={StoreImg} alt="car!" />
      <Info>
        <h2>연돈 제주도 본점</h2>
        <span>국내 최초 백종원님 마음속 1등 돈가스 집</span>
        <span>이용시간 12:00~21:00</span>
        <span>전화번호 0501-232</span>
      </Info>
      <Chips>
        <Chip
          label="바로 들어갔어요"
          onClick={handleClick}
          deleteIcon={<DoneIcon />}
          variant="outlined"
        />
        <Chip
          label="주차하기 편해요"
          onClick={handleClick}
          deleteIcon={<DoneIcon />}
          variant="outlined"
        />
        <Chip
          label="친절해요"
          onClick={handleClick}
          deleteIcon={<DoneIcon />}
          variant="outlined"
        />
        <Chip
          label="뷰가 좋아요"
          onClick={handleClick}
          deleteIcon={<DoneIcon />}
          variant="outlined"
        />
      </Chips>
      <Graph>
        <h3>시세변동 그래프</h3>
      </Graph>
    </Wrapper>
  );
}

export default StorePage;
