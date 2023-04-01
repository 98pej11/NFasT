/* eslint-disable react/prop-types */
import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
// import StoreImg from "../../assets/StoreImage.png";
// import { storeAction } from "../../redux/actions/storeAction";

function StoreInfo(props) {
  // eslint-disable-next-line react/prop-types
  const {
    storeImage,
    storeName,
    storeCategory,
    storeDetail,
    storeLunchStart,
    storeLunchEnd,
    storeDinnerStart,
    storeDinnerEnd,
    storePhone,
    storeInformation,
  } = props;
  // console.log(storeImage);

  return (
    <Wrapper>
      <Img src={storeImage} alt="car!" />
      {/* <Img src={StoreImg} alt="car!" /> */}

      <Info>
        <h3>{storeName}</h3>
        <span>{storeDetail}</span>
        <span>카테고리 &gt; {storeCategory}</span>
        <span>
          런치이용시간 &gt; {storeLunchStart} ~ {storeLunchEnd}
        </span>
        <span>
          디너이용시간 &gt; {storeDinnerStart} ~ {storeDinnerEnd}
        </span>
        <span>전화번호 &gt; {storePhone}</span>
        <span>사용방법 &gt; {storeInformation}</span>
      </Info>
    </Wrapper>
  );
}

export default StoreInfo;
const Wrapper = styled.div`
  margin-top: 20px;
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    height: auto;
  }
  @media only screen and (min-width: 768px) {
    height: auto;
  }
`;

const Img = styled.img`
  width: 100%;
  @media only screen and (min-width: 320px) and (max-width: 768px) {
    height: auto;
  }
  @media only screen and (min-width: 768px) {
    height: 500px;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  span {
    font-size: 12px;
    color: #828282;
  }
`;
