import React from "react";
import styled from "styled-components";
// import { Box } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";
// import Burger from "../../assets/Burger.png";
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
        {/* <img src={Trans} alt="Trans" /> */}
        <p>거리순</p>
        가까운 거리의 맛집들을 빠르게 만나보세요.
      </Line>
      <MainCard />
      <div style={{ marginBottom: 50 }}> </div>
      <Line>
        {/* <img src={Distance} alt="Trans" /> */}
        <p>거래순</p>
        최신 가장 많은 거래가 있는 맛집들을 만나보세요.
      </Line>
      <MainCard />
    </div>
  );
}

export default MainComp;
