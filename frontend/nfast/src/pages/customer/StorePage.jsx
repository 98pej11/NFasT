import React from "react";
import styled from "styled-components";
import AboutStore from "../../components/storepage/AboutStore";
import ReviewButton from "../../components/storepage/ReviewButton";
import PriceChart from "../../components/storepage/PriceChart";
// import KakaoMap from "../../components/storepage/KakaoMap";
import KaKaoMap from "../../components/storepage/KaKaoMap";
import Navbar from "../../components/storepage/Navbar";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;

  @media only screen and (min-width: 320px) and (max-width: 768px) {
    height: auto;
  }
  @media only screen and (min-width: 768px) {
    min-height: 100vh; /* set minimum height to fill entire viewport */
  }
`;

const Graph = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Chart = styled(PriceChart)`
  width: 100%;
  height: 100%;
  display: flex;
`;

const MapWrapper = styled.div`
  position: relative; /* Set position to relative */
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1; /* Set z-index to 1 */
`;

const Map = styled.div`
  position: absolute; /* Set position to absolute */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0; /* Set z-index to 0 */
`;

const Footer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1; /* Set z-index to 1 */
`;

function StorePage() {
  return (
    <div>
      <Wrapper>
        <AboutStore />
        <ReviewButton />
        <Graph>
          <Chart />
        </Graph>

        <MapWrapper>
          <h3>지도</h3>
          <Map>
            <KaKaoMap />
          </Map>
        </MapWrapper>
        <Footer>
          <Navbar />
        </Footer>
      </Wrapper>
    </div>
  );
}

export default StorePage;
