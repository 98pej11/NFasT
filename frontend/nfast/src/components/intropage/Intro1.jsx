import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import intro1 from "../../assets/intro1.png";
// import HighLight from "../commons/HighLight";

const ProfilBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 10%;
  position: relative; /* contact box 고정시키기위해서 */
`;

const contentUpAnimation = keyframes`
  0% {
    -webkit-transform: translateY(25px);
            transform: translateY(25px);
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
const Text = styled.div`
  h4 {
    font-size: 20px;
    width: 180px;
  }
  span {
    font-size: 15px;
    width: 150px;
    margin-bottom: 3px;
  }
`;
const Img = styled.div`
  img {
    width: 150px;
    height: 170px;
  }
  @media screen and (max-width: 200px) {
    width: 200px;
    height: 250px;
  }
`;
const ContentBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  animation: ${contentUpAnimation} 1s 1 ease-in normal;
  @media screen and (max-width: 200px) {
    height: 60%;
  }
`;

const TitleBox = styled.div`
  position: relative; /* 포지션 설정 */
  z-index: 1;
  animation: ${contentUpAnimation} 0.5s 1 ease-in normal;
  @media screen and (max-width: 200px) {
    font-size: 20px;
    line-height: 10px;
  }
`;
const SubTitleBox = styled.div`
  display: flex;
  flex-direction: column;
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
      -webkit-transform: translateY(25px);
              transform: translateY(25px);
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

export default function Intro1() {
  return (
    <ProfilBox>
      <ContentBox>
        <Text>
          <TitleBox>
            <h4>음식에 대한 값</h4>
            <h4>제대로 받고 있나요?</h4>
          </TitleBox>
          <SubTitleBox>
            <span>줄 서서 먹는 맛집</span>
            <span>그 기다림의 가치는</span>
            <span> 과연 얼마일까요?</span>
          </SubTitleBox>
        </Text>
        <Img>
          <img src={intro1} alt="" />
        </Img>
      </ContentBox>
      <MoreContentIconBox>
        <Link to="/intro2">
          <KeyboardDoubleArrowDownIcon fontSize="large" />
        </Link>
      </MoreContentIconBox>
    </ProfilBox>
  );
}
