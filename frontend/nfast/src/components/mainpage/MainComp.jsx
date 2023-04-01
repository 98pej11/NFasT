import React from "react";
import styled from "styled-components";
import DepartureBoardTwoToneIcon from "@mui/icons-material/DepartureBoardTwoTone";
import RecordVoiceOverTwoToneIcon from "@mui/icons-material/RecordVoiceOverTwoTone";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import DistanceCard from "./DistanceCard";
import TransCard from "./TransCard";
import FloatingBtn from "../commons/FloatingBtn";

function MainComp() {
  const Line = styled.div`
    margin-left: 3%;
    margin-right: 3%;
    text-align: center;
    p {
      font-size: 1.1rem;
    }
    span {
      font-size: 0.9rem;
    }
  `;
  const Card = styled.div`
    margin: 3%;
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
        <span
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          가까운 거리의 맛집들을 빠르게 만나보세요.
        </span>
        <span style={{ float: "right", display: "flex", alignItems: "center" }}>
          전체 보기 <KeyboardDoubleArrowRightIcon />
        </span>
      </Line>
      <Card>
        <DistanceCard />
      </Card>
      <div style={{ marginBottom: 100 }}> </div>
      <Line>
        <Title>
          <RecordVoiceOverTwoToneIcon />
          <p>거래순</p>
        </Title>
        <span
          style={{
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          최신 가장 많은 거래가 있는 맛집들을 만나보세요.
        </span>
        <span style={{ float: "right", display: "flex", alignItems: "center" }}>
          전체 보기 <KeyboardDoubleArrowRightIcon />
        </span>
      </Line>
      <Card>
        <TransCard />
      </Card>
      <FloatingBtn>Floating</FloatingBtn>
      <div style={{ marginBottom: 100 }}> </div>
    </div>
  );
}

export default MainComp;
