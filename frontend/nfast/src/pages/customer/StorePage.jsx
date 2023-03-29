import React from "react";
import styled from "styled-components";
import StoreInfo from "../../components/storepage/StoreInfo";
import StoreReview from "../../components/storepage/StoreReview";
import StoreChart from "../../components/storepage/StoreChart";
// import KakaoMap from "../../components/storepage/KakaoMap";
import KaKaoMap from "../../components/storepage/KaKaoMap";
import StoreNav from "../../components/storepage/StoreNav";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  height: auto;

  h4 {
    width: 100%;
    border-top: solid 1px black;
  }
`;
const Divider = styled.div`
  border-top: 1px solid #bcb6ff;
  width: 100%;
  margin-top: 20px;
`;

const Review = styled(StoreReview)`
  width: 100%;
`;
const Graph = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Chart = styled(StoreChart)`
  width: 100%;
  height: 100%;
`;

const MapWrapper = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

const Map = styled.div`
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
        <StoreInfo />
        <Divider />
        <Review />
        <Divider />
        <Graph>
          <Chart />
        </Graph>
        <Divider />
        <h4>지도</h4>
        <MapWrapper>
          <Map>
            <KaKaoMap />
          </Map>
        </MapWrapper>
        <Footer>
          <StoreNav />
        </Footer>
      </Wrapper>
    </div>
  );
}

export default StorePage;
