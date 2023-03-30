import React from "react";
import styled, { keyframes } from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub } from "@fortawesome/free-brands-svg-icons";
// import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import intro5 from "../../assets/intro5.png";
// import HighLight from "../commons/HighLight";

export default function Intro4() {
  return (
    <ProfilBox>
      <ContentBox>
        <Img>
          <img src={intro5} alt="프로필 이미지" />
        </Img>
        <Text>
          <TitleBox>
            <h4>고객들간의 거래로</h4>
            <h4>가게에 수입이 들어와요!</h4>
          </TitleBox>
          <SubTitleBox>
            <span>한정된 수량의 NFT만 발급해도 </span>
            <span>계속되는 수입을 볼 수 있어요.</span>
          </SubTitleBox>
        </Text>
      </ContentBox>
      <MoreContentIconBox>
        <KeyboardDoubleArrowDownIcon fontSize="large" />
      </MoreContentIconBox>
    </ProfilBox>
  );
}
const Img = styled.div`
  img {
    width: 150px;
    height: 100px;
  }
`;
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
  height: 65%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  animation: ${contentUpAnimation} 1s 1 ease-in normal;
`;

const Text = styled.div`
  h4 {
    font-size: 20px;
    width: 210px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  span {
    font-size: 15px;
    width: 210px;
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
  display: flex;
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
