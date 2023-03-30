import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
// import StoreImg from "../../assets/StoreImage.png";
import { storeAction } from "../../redux/actions/storeAction";

// eslint-disable-next-line react/prop-types
function StoreInfo(props) {
  // eslint-disable-next-line react/prop-types
  const { storeSequence } = props;
  console.log(`${storeSequence}임`);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(`${storeSequence}임222222`);
    dispatch(storeAction.getStoreDetail(storeSequence));
  }, []);

  const storedetail = useSelector(
    (state) => state.storepageReducer.storedetail
  );
  return (
    <Wrapper>
      <Img src={storedetail.store.storeImage} alt="car!" />
      <Info>
        <h3>{storedetail.store.storeName}</h3>
        <span>{storedetail.store.storeDetail}</span>
        <span>
          런치이용시간 &gt; {storedetail.store.storeLunchStart} ~{" "}
          {storedetail.store.storeLunchEnd}
        </span>
        <span>
          디너이용시간 &gt; {storedetail.store.storeDinnerStart} ~{" "}
          {storedetail.store.storeDinnerEnd}
        </span>
        <span>전화번호 &gt; {storedetail.store.storePhone}</span>
        <span>사용방법 &gt; {storedetail.store.storeInformation}</span>
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
