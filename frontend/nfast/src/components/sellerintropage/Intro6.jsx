import React from "react";
import styled, { keyframes } from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import intro6 from "../../assets/intro6.png";
// import HighLight from "../commons/HighLight";

export default function Intro5() {
  return (
    <ProfilBox>
      <ContentBox>
        <Img>
          <img src={intro6} alt="프로필 이미지" />
        </Img>
        <Text>
          <TitleBox>
            <h4>한눈에 볼 수 있는 </h4>
            <h4>나의 수익!</h4>
          </TitleBox>
          <SubTitleBox>
            <span>거래 내역을</span>
            <span>한눈에 확인할 수 있어요</span>
          </SubTitleBox>
        </Text>
      </ContentBox>
      <MoreContentIconBox>
        <KeyboardDoubleArrowDownIcon fontSize="large" />
        <h4>가게 등록</h4>
      </MoreContentIconBox>
    </ProfilBox>
  );
}
const Img = styled.div`
  img {
    width: 100px;
    height: 120px;
  }
`;
const ProfilBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 10%;
`;

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

const ContentBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  animation: ${contentUpAnimation} 1s 1 ease-in normal;
`;
const Text = styled.div`
  h4 {
    font-size: 20px;
    width: 190px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  span {
    font-size: 15px;
    width: 190px;
    margin-bottom: 3px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  margin-left: 10px;
`;
const TitleBox = styled.div`
  animation: ${contentUpAnimation} 0.5s 1 ease-in normal;
`;
const SubTitleBox = styled.div`
  animation: ${contentUpAnimation} 0.8s 1 ease-in normal;
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
  display: flex;
  align-items: center;
`;
