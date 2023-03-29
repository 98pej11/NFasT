import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import intro2 from "../../assets/intro2.png";
// import HighLight from "../commons/HighLight";

export default function Intro2() {
  return (
    <ProfilBox>
      <ContentBox>
        <Img>
          <img src={intro2} alt="프로필 이미지" />
        </Img>
        <TitleBox>
          <h3>NFasT로</h3>
          <h3>입장은 빠르게</h3>
          <h3>만족은 높게</h3>
        </TitleBox>
        <SubTitleBox>
          <h4>기다림에 지친 손님에게</h4>
          <h4>더욱 가치있는 서비스를 제공해요!</h4>
        </SubTitleBox>
      </ContentBox>
      <MoreContentIconBox>
        <Link to="/intro3">
          <KeyboardDoubleArrowDownIcon fontSize="large" />
        </Link>
      </MoreContentIconBox>
    </ProfilBox>
  );
}

const contentUpAnimation = keyframes`
  0% {
    -webkit-transform: translateY(50px);
            transform: translateY(50px);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    -webkit-transform: translateY(0);
            transform: translateY(0);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
  }
`;
const Img = styled.div`
  img {
    width: 350px;
    height: 400px;
    position: absolute;
    top: 10vw;
    left: 30vw;
    opacity: 80%;
  }
  @media screen and (max-width: 200px) {
    width: 200px;
    height: 250px;
  }
`;
const ContentBox = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  flex-direction: column;
  animation: ${contentUpAnimation} 1s 1 ease-in normal;
  @media screen and (max-width: 682px) {
    height: 60%;
  }
`;
const ProfilBox = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 10%;
  position: relative; /* contact box 고정시키기위해서 */
`;
const TitleBox = styled.div`
  font-size: 1.4rem;
  line-height: 1rem;
  position: relative; /* 포지션 설정 */
  z-index: 1;
  animation: ${contentUpAnimation} 0.5s 1 ease-in normal;
  @media screen and (max-width: 200px) {
    font-size: 20px;
    line-height: 10px;
  }
`;
const SubTitleBox = styled.div`
  font-size: 0.9rem;
  line-height: 0.8rem;
  animation: ${contentUpAnimation} 0.8s 1 ease-in normal;
  @media screen and (max-width: 200px) {
    font-size: 18px;
  }
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
  animation-duration: 2s;
  animation-delay: 3s;
  animation-name: ${downIconAnimation};
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;
