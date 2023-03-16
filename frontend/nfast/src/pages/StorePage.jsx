import React from "react";
import styled from "styled-components";
import AboutStore from "../components/storepage/AboutStore";
import ReviewButton from "../components/storepage/ReviewButton";
// import PurchaseModal from "../components/storepage/PurchaseModal";
// import StoreButtom from "../components/storepage/StoreButtom";
import SwipeableEdge from "../components/storepage/SwipeableEdge";
import PriceChart from "../components/storepage/PriceChart";

const Wrapper = styled.div`
  background-color: whitesmoke;
  height: 1000px;
`;

const Graph = styled.div`
  display: flex;
`;

const Map = styled.div`
  display: flex;
`;

function StorePage() {
  return (
    <Wrapper>
      <AboutStore />
      <ReviewButton />
      <Graph>
        <PriceChart />
      </Graph>
      <Map>
        <h3>지도</h3>
      </Map>
      <SwipeableEdge />
    </Wrapper>
  );
}

export default StorePage;
