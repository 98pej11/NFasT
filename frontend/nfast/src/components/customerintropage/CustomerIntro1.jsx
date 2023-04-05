import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import back from "../../assets/back.png";

const ProfilBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const ContentBox = styled.div`
  width: 100%;
  height: 912px;
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 30px;
  }
  margin-bottom: 20px;
`;

const downIconAnimation = keyframes`
    0% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-transform-origin: 50% 50%;
              transform-origin: 50% 50%;
      text-shadow: none;
    }
    100% {
      -webkit-transform: translateY(50px);
              transform: translateY(50px);
      -webkit-transform-origin: 50% 50%;
              transform-origin: 50% 50%;
    }
`;
const MoreContentIconBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  // animation-duration: 2s;
  // animation-delay: 3s;
  animation-name: ${downIconAnimation};
  // animation-iteration-count: infinite;
  // animation-direction: alternate;
  z-index: 1;
`;

export default function CustomerIntro1() {
  return (
    <ProfilBox>
      <ContentBox>
        <img src={back} alt="" style={{ width: "100%", minHeight: "912px" }} />
        <MoreContentIconBox>
          <Link to="/introSeller3" style={{ color: "black" }}>
            <KeyboardDoubleArrowDownIcon fontSize="large" />
          </Link>
        </MoreContentIconBox>
      </ContentBox>
    </ProfilBox>
  );
}
