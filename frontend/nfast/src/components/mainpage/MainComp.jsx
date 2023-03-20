import React from "react";
import styled from "styled-components";
import { Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Burger from "../../assets/Burger.png";
import MainCard from "./MainCard";
import SearchBar from "../commons/SearchBar";

function MainComp() {
  const Styledh2 = styled.div`
    display: flex;
    align-items: center; /* 수직 중앙 정렬 */
    justify-content: center;
    text-align: center;
    margin-top: 10%;
  `;
  const Line = styled.div`
    h3 {
      margin: 5%;
    }
  `;
  return (
    <div>
      <div>
        <Styledh2>
          <img src={Burger} alt="logo" />
          <h3>~ 줄서지 말고 먹쟈 ~</h3>
          <img src={Burger} alt="logo" />
        </Styledh2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SearchBar />
          <Box>
            <SearchIcon />
          </Box>
        </div>
      </div>
      <Line>
        <h3>거리순</h3>
      </Line>
      <MainCard />
      <div style={{ marginBottom: 80 }}> </div>
      <Line>
        <h3>거래순</h3>
      </Line>
      <MainCard />
    </div>
  );
}

export default MainComp;
