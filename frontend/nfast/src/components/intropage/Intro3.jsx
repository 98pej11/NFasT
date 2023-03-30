import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import intro2 from "../../assets/intro2.png";
// import HighLight from "../commons/HighLight";

export default function Intro3() {
  return (
    <ProfilBox>
      <ContentBox>
        <Text>
          <TitleBox>
            <h4>우선권을 구매한</h4>
            <h4>특별한 손님만이 </h4>
            <h4> 이용할 수 있어요</h4>
          </TitleBox>
          <SubTitleBox>
            <span>NFasT 서비스의 품질을 위해</span>
            <span>발행 수의 제한이 있어요</span>
            <span>이쯤에서, </span>
            <span>수익에 대한 의문이 드시나요?</span>
          </SubTitleBox>
        </Text>
        <Img>
          <img src={intro2} alt="" />
        </Img>
      </ContentBox>
      <MoreContentIconBox>
        <Link to="/intro4">
          <KeyboardDoubleArrowDownIcon fontSize="large" />
        </Link>
      </MoreContentIconBox>
    </ProfilBox>
  );
}
const Img = styled.div`
  img {
    width: 120px;
    height: 140px;
  }
`;
const ProfilBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  justify-content: center;
  animation: ${contentUpAnimation} 1s 1 ease-in normal;
`;
const Text = styled.div`
  h4 {
    font-size: 20px;
    width: 145px;
  }
  span {
    font-size: 15px;
    width: 200px;
    margin-bottom: 3px;
  }
`;

const TitleBox = styled.div`
  animation: ${contentUpAnimation} 0.5s 1 ease-in normal;
  @media screen and (max-width: 200px) {
    font-size: 20px;
    line-height: 10px;
  }
`;
const SubTitleBox = styled.div`
  display: flex;
  flex-direction: center;
  flex-direction: column;
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
`;
