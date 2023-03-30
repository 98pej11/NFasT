import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import intro3 from "../../assets/intro3.png";
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
const ContentBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  animation: ${contentUpAnimation} 1s 1 ease-in normal;
`;
const Text = styled.div`
  h4 {
    font-size: 20px;
    width: 130px;
  }
  span {
    font-size: 15px;
    width: 220px;
    margin-bottom: 3px;
  }
`;
const Img = styled.div`
  img {
    width: 200px;
    height: 130px;
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
  display: flex;
  align-items: center;
  animation: ${contentUpAnimation} 0.5s 1 ease-in normal;
  h4 {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;
const SubTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  span {
    width: 100%;
    text-align: end;
  }
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

export default function Intro2() {
  return (
    <ProfilBox>
      <ContentBox>
        <Text>
          <TitleBox>
            <Img>
              <img src={intro3} alt="프로필 이미지" />
            </Img>
            <div>
              <h4>NFasT로</h4>
              <h4>입장은 빠르게 </h4>
              <h4>만족은 높게</h4>
            </div>
          </TitleBox>

          <SubTitleBox>
            <span>기다림에 지친 손님에게</span>
            <span>더욱 가치있는 서비스를 제공해요!</span>
          </SubTitleBox>
        </Text>
      </ContentBox>
      <MoreContentIconBox>
        <KeyboardDoubleArrowDownIcon fontSize="large" />
      </MoreContentIconBox>
    </ProfilBox>
  );
}
