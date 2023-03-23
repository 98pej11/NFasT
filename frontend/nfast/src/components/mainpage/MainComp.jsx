import React from "react";
import styled from "styled-components";
import DepartureBoardTwoToneIcon from "@mui/icons-material/DepartureBoardTwoTone";
import RecordVoiceOverTwoToneIcon from "@mui/icons-material/RecordVoiceOverTwoTone";
import MainCard from "./MainCard";
// import Trans from "../../assets/trans.png";
// import Distance from "../../assets/distance.png";

function MainComp() {
  const Line = styled.div`
    margin: 3%;
    text-align: center;
    p {
      font-size: 1.3rem;
    }
  `;
  const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  return (
    <div>
      <Line>
        <Title>
          <DepartureBoardTwoToneIcon />
          <p>거리순</p>
        </Title>
        가까운 거리의 맛집들을 빠르게 만나보세요.
      </Line>
      <MainCard />
      <div style={{ marginBottom: 100 }}> </div>
      <Line>
        <Title>
          <RecordVoiceOverTwoToneIcon />
          <p>거래순</p>
        </Title>
        최신 가장 많은 거래가 있는 맛집들을 만나보세요.
      </Line>
      <MainCard />
      <div style={{ marginBottom: 160 }}> </div>
    </div>
  );
}

export default MainComp;
