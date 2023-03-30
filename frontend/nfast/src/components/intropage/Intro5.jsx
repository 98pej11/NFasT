import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import SellerIncome from "../../assets/SellerIncome.png";

export default function Intro5() {
  return (
    <ProfilBox>
      <ContentBox>
        <Text>
          <TitleBox>
            <h4>NFasT를 이용하는</h4>
            <h4>사장님들의</h4>
            <h4>평균 수입이에요!</h4>
          </TitleBox>
          <SubTitleBox>
            <span>하루 평균</span>
            <span>= 2825.15 Eth 수익이 발생해요 </span>
          </SubTitleBox>
        </Text>
        <Img>
          <img src={SellerIncome} alt="프로필 이미지" />
        </Img>
      </ContentBox>
      <MoreContentIconBox>
        <Link to="/intro6">
          <KeyboardDoubleArrowDownIcon fontSize="large" />
        </Link>
      </MoreContentIconBox>
    </ProfilBox>
  );
}
const Img = styled.div`
  img {
    width: 120px;
    height: 70px;
    opacity: 80%;
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
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${contentUpAnimation} 1s 1 ease-in normal;
`;

const Text = styled.div`
  h4 {
    font-size: 20px;
    width: 170px;
  }
  span {
    font-size: 15px;
    width: 220px;
    margin-bottom: 3px;
  }
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
