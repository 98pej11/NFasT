import React from "react";
import styled from "styled-components";
import DepartureBoardTwoToneIcon from "@mui/icons-material/DepartureBoardTwoTone";
import RecordVoiceOverTwoToneIcon from "@mui/icons-material/RecordVoiceOverTwoTone";
import MainCard from "./MainCard";
// import Trans from "../../assets/trans.png";
// import Distance from "../../assets/distance.png";

function MainComp() {
  const Line = styled.div`
    margin: 5%;
    p {
      font-size: 1.3rem;
    }
  `;
  return (
    <div>
      <Line>
        <DepartureBoardTwoToneIcon />
        <p>거리순</p>
        가까운 거리의 맛집들을 빠르게 만나보세요.
      </Line>
      <MainCard />
      <div style={{ marginBottom: 50 }}> </div>
      <Line>
        <RecordVoiceOverTwoToneIcon />
        <p>거래순</p>
        최신 가장 많은 거래가 있는 맛집들을 만나보세요.
      </Line>
      <MainCard />
    </div>
  );
}

export default MainComp;
