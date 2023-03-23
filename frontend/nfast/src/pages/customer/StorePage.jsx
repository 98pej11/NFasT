import React from "react";
import styled from "styled-components";
import AboutStore from "../../components/storepage/AboutStore";
import ReviewButton from "../../components/storepage/ReviewButton";
// import PurchaseModal from "../components/storepage/PurchaseModal";
// import StoreButtom from "../components/storepage/StoreButtom";
import PriceChart from "../../components/storepage/PriceChart";
// import KakaoMap from "../../components/storepage/KakaoMap";
import Header from "../../components/commons/Header2";

const Wrapper = styled.div`
  background-color: whitesmoke;
  height: 1500px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Graph = styled.div`
  display: flex;
`;

const Map = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function StorePage() {
  return (
    <div>
      <Header />
      <Wrapper>
        <AboutStore />
        <ReviewButton />
        <Graph>
          <PriceChart />
        </Graph>
        <Map>
          <h3>지도</h3>
          {/* <KakaoMap /> */}
        </Map>
      </Wrapper>
    </div>
  );
}

export default StorePage;
