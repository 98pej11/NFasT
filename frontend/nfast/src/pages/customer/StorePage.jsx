import React from "react";
import styled from "styled-components";
import AboutStore from "../../components/storepage/AboutStore";
import ReviewButton from "../../components/storepage/ReviewButton";
import PriceChart from "../../components/storepage/PriceChart";
import KaKaoMap from "../../components/storepage/KaKaoMap";
import Header from "../../components/commons/Header2";
import CalendarList from "../../components/storepage/CalendarList";

const Wrapper = styled.div`
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    height: auto;
  }
  @media only screen and (min-width: 768px) {
    height: 1500px;
  }
`;

const Graph = styled.div`
  display: flex;
`;

const Map = styled.div`
  width: 400px;
  height: 400px;
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
          <KaKaoMap />
        </Map>
        <CalendarList />
      </Wrapper>
    </div>
  );
}

export default StorePage;
