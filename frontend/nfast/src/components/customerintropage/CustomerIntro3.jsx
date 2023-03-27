import React from "react";
import styled, { keyframes } from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import intro2 from "../../assets/intro4.png";
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
`;
const ContentBox = styled.div`
  width: 100%;
  height: 65%;
  display: flex;
  justify-content: space-evenly;
  animation: ${contentUpAnimation} 1s 1 ease-in normal;
  @media screen and (max-width: 682px) {
    height: 60%;
  }
`;
const Img = styled.div`
  img {
    width: 150px;
    height: 150px;

    opacity: 80%;
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
`;
const TitleBox = styled.div`
  font-size: 1.4rem;
  line-height: 1rem;
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

export default function Intro2() {
  return (
    <ProfilBox>
      <ContentBox>
        <Text>
          <TitleBox>
            <h4>못구해도 괜찮다!</h4>
            <h4>사고 팔면 되니까~</h4>
          </TitleBox>
          <SubTitleBox>
            <h4>구매한 NFasT는</h4>
            <h4>개인간의 거래가 가능해요!</h4>
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
