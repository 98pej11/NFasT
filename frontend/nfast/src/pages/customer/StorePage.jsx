import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import NavigationOutlinedIcon from "@mui/icons-material/NavigationOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StoreInfo from "../../components/storepage/StoreInfo";
import StoreReview from "../../components/storepage/StoreReview";
import StoreChart from "../../components/storepage/StoreChart";
import KaKaoMap from "../../components/storepage/KaKaoMap";
import StoreNav from "../../components/storepage/StoreNav";
import { storeAction } from "../../redux/actions/storeAction";
import FloatingBtn from "../../components/commons/FloatingBtn";
import {
  web3,
  // NFasTContract,
  saleFactory,
  // ssafyTokenContract,
  createSaleContract,
} from "../../components/axios/web3";

export default function StorePage() {
  // eslint-disable-next-line react/destructuring-assignment, react/prop-types
  const { storeSequence } = useParams();
  const dispatch = useDispatch();
  const [data, setData] = useState({
    tokenId: "",
    nfastPrice: "",
    nfastHopePrice: "",
  });

  // 구매
  async function purchase(sale, saleInfo) {
    console.log("purchase sale");
    console.log(sale);
    console.log(saleInfo);
    await window.ethereum.request({ method: "eth_requestAccounts" });
    const accounts = await web3.eth.getAccounts();
    console.log("??? 될까?");
    const tx = await sale.methods.purchase().send({
      from: accounts[0],
      // value: web3.utils.toWei("0.0", "ether"),
    });
    console.log("??? 됏니?");
    console.log(tx);
  }
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

  useEffect(() => {
    console.log("123");
    console.log(data);
    saleFactory.getPastEvents(
      "NewSale",
      {
        // filter: { _workId: 10 }, // nftId가 1번인 것으로 필터해서 보여주기
        // filter: { _owner: `${address}` }, // 가게 사장 거래 중 nft들 모두 불러오기
        fromBlock: 0,
        toBlock: "latest",
      },
      (err, event) => {
        // console.log(address);
        console.log(err);
        console.log(event);
        console.log(event[0].returnValues[2]); // tokenId , data[tokenCnt].nfastHash +1 == event[0].returnValues[2]
        // eslint-disable-next-line no-underscore-dangle
        console.log(event[0].returnValues._saleContract); // sale 주소
        let tokenCnt;
        for (tokenCnt = 0; tokenCnt < data.length; tokenCnt += 1) {
          const saleIdx = data[tokenCnt].nfastHash;
          const saleInfo = event[saleIdx].returnValues;
          // eslint-disable-next-line no-underscore-dangle
          const saleCA = saleInfo._saleContract;
          const saleContract = createSaleContract(saleCA);
          console.log(saleContract);
          console.log(purchase);
          // purchase(saleContract, saleInfo);
        }
      }
    );
  }, [data]);

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
          <h4>
            <NavigationOutlinedIcon style={{ fontSize: 20 }} />
            상세 주소
          </h4>
          <MapWrapper>
            <Map>
              <KaKaoMap
                storeLat={storedetail.store.storeLat}
                storeLng={storedetail.store.storeLng}
              />
            </Map>
            <h5>
              <LocationOnIcon style={{ color: "orange" }} />
              {storedetail.store.storeAddress}
            </h5>
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
  margin: 0;
  height: 100vh;

  h4,
  h5 {
    margin-left: 3%;
    display: flex;
    align-items: center;
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
  // height: 100%;
  display: flex;
  justify-content: center;
`;

const Chart = styled(StoreChart)`
  width: 100%;
  // height: 100%;
`;

const MapWrapper = styled.div`
  width: 100%;
  // height: 300px;
  display: flex;
  flex-direction: column;

  margin-bottom: 70px;
`;

const Map = styled.div`
  width: 100%;
  // height: 100%;
  z-index: 0; /* Set z-index to 0 */
`;
const Footer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1; /* Set z-index to 1 */
`;
