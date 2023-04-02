import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import StoreInfo from "../../components/storepage/StoreInfo";
import StoreReview from "../../components/storepage/StoreReview";
import StoreChart from "../../components/storepage/StoreChart";
import KaKaoMap from "../../components/storepage/KaKaoMap";
import StoreNav from "../../components/storepage/StoreNav";
import { storeAction } from "../../redux/actions/storeAction";
import FloatingBtn from "../../components/commons/FloatingBtn";

export default function StorePage() {
  // eslint-disable-next-line react/destructuring-assignment, react/prop-types
  const { storeSequence } = useParams();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    tokenId: "",
    nfastPrice: "",
    nfastHopePrice: "",
  });

  useEffect(() => {
    dispatch(storeAction.getStoreDetail(storeSequence));
  }, []);

  const storedetail = useSelector(
    (state) => state.storepageReducer.storedetail
  );
  const purchaseInfo = useSelector(
    (state) => state.storepageReducer.purchaseInfo
  );

  useEffect(() => {
    console.log("PURCHASE", purchaseInfo);
    const temp = purchaseInfo.map((item) => {
      return {
        nfastHash: item.nfastHash,
        nfastPrice: item.nfastPrice,
        nfastHopePrice: item.nfastHopePrice,
      };
    });
    setData(temp);
  }, [purchaseInfo]);
  console.log(data);

  console.log("STORE DETAIL", storedetail);
  return (
    storedetail && (
      <div>
        <Wrapper>
          <StoreInfo
            storeImage={storedetail.store.storeImage}
            storeName={storedetail.store.storeName}
            storeCategory={storedetail.store.storeCategory}
            storeDetail={storedetail.store.storeDetail}
            storeLunchStart={storedetail.store.storeLunchStart}
            storeLunchEnd={storedetail.store.storeLunchEnd}
            storeDinnerStart={storedetail.store.storeDinnerStart}
            storeDinnerEnd={storedetail.store.storeDinnerEnd}
            storePhone={storedetail.store.storePhone}
            storeInformation={storedetail.store.storeInformation}
          />
          <Divider />
          <Review review={storedetail.review} />
          <Divider />
          <Graph>
            <Chart
              PriceMax={storedetail.storeNfastPriceMax}
              PriceMin={storedetail.storeNfastPriceMin}
            />
          </Graph>
          <Divider />
          <h4>지도</h4>
          <MapWrapper>
            <Map>
              <KaKaoMap
                storeLat={storedetail.store.storeLat}
                storeLng={storedetail.store.storeLng}
              />
            </Map>
          </MapWrapper>
          <Divider />
          <Footer>
            <StoreNav />
          </Footer>
        </Wrapper>
        <FloatingBtn>Floating</FloatingBtn>
      </div>
    )
  );
}
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  height: auto;

  h4 {
    width: 100%;
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
  width: 400px;
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
