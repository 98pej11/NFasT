import React from "react";
import styled, { keyframes } from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import intro2 from "../../assets/intro2.png";
// import HighLight from "../commons/HighLight";

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

const Text = styled.div`
  display: flex;
  flex-direction: column;
  h4 {
    font-size: 20px;
    width: 200px;
  }
  span {
    font-size: 16px;
    width: 250px;
    margin-bottom: 10px;
  }
`;
const ContentBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  animation: ${contentUpAnimation} 1s 1 ease-in normal;
  margin-bottom: 20px;
`;
const Img = styled.div`
  img {
    width: 80px;
    height: 140px;
  }
  @media screen and (max-width: 200px) {
    width: 200px;
    height: 250px;
  }
`;
const ProfilBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 10%;
  margin-top: 100px;
  margin-bottom: 120px;
`;
const TitleBox = styled.div`
  line-height: 1rem;
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

export default function Intro2() {
  return (
    <ProfilBox>
      <ContentBox>
        <Text>
          <TitleBox>
            <h4>NFasT에서는</h4>
            <h4>가능하다!</h4>
          </TitleBox>
          <SubTitleBox>
            <span>줄이 너무 길어서 못가던 맛집</span>
            <span>바로 들어갈 수 있어요!</span>
          </SubTitleBox>
        </Text>
        <Img>
          <img src={intro2} alt="프로필 이미지" />
        </Img>
      </ContentBox>
      <MoreContentIconBox>
        <KeyboardDoubleArrowDownIcon fontSize="large" />
      </MoreContentIconBox>
    </ProfilBox>
  );
}
