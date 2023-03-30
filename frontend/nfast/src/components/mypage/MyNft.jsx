import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import QRCode from "react-qr-code";
import Stack from "@mui/material/Stack";
import styled from "styled-components";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Pagination from "@mui/material/Pagination";
import { getSequence } from "../../storage/Cookie";
import { mypageAction } from "../../redux/actions/mypageAction";
import FastTicket from "../commons/PastTicket";
import FutureTicket from "../commons/FutureTicket";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

// const Ticket1 = styled(PastTicket)`
//   flex: 1;
// `;

const Ticket2 = styled(FutureTicket)`
  flex: 1;
`;

const TabsContainer = styled.div`
  flex-shrink: 0;
`;

const Tickets = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const Pag = styled.div`
  margin: 3%;
  display: flex; /* 가로 정렬을 위해 flexbox 설정 */
  justify-content: center; /* 가운데 정렬 */
`;

function MyNft() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const dispatch = useDispatch();
  const sequence = getSequence();

  useEffect(() => {
    dispatch(mypageAction.getAvailableNfasts(sequence));
  }, []);
  const availableNfasts = useSelector(
    (state) => state.mypageReducer.availableNfasts
  );
  const unavailableNfasts = useSelector(
    (state) => state.mypageReducer.unavailableNfasts
  );

  return (
    <Wrapper>
      <TabsContainer>
        <Tabs
          value={selectedTabIndex}
          onChange={(event, newValue) => setSelectedTabIndex(newValue)}
          centered
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab label="미사용 NFT" />
          <Tab label="사용한 NFT" />
        </Tabs>
        {/* <Ticket2
          nfastQr={
            <QRCode
              value={JSON.stringify({ nfastSequence: 27, type: 2 })}
              size="100"
              style={{ fgColor: "#000123" }}
            />
          }
        /> */}
      </TabsContainer>
      {selectedTabIndex === 0 &&
        (availableNfasts.length !== 0 ? (
          availableNfasts.map((nfast) => {
            return (
              <Tickets>
                <Ticket2
                  storeName={nfast.storeName}
                  nfastDate={nfast.nfastDate}
                  nfastStartTime={nfast.nfastStartTime}
                  nfastEndTime={nfast.nfastEndTime}
                  nfastPrice={nfast.nfastPrice}
                  nfastQr={
                    <QRCode
                      value={JSON.stringify({
                        nfastSequence: nfast.nfastSequence,
                        type: 1,
                      })}
                      size="100"
                      style={{ fgColor: "#000123" }}
                    />
                  }
                />
              </Tickets>
            );
          })
        ) : (
          <div>
            <div>사용 가능한 NFasT가 없습니다ㅠㅠ</div>
            {/* <div>이것은 그냥큐알 코드이다</div>
            <QRCode
              value={JSON.stringify({ nfastSequence: 26, type: 1 })}
              size="100"
              style={{ fgColor: "#000123" }}
            />
            <div>이것은 환불큐알 코드이다</div>
            <QRCode
              value={JSON.stringify({ nfastSequence: 27, type: 2 })}
              size="100"
              style={{ fgColor: "#000123" }}
            /> */}
          </div>
        ))}
      {selectedTabIndex === 1 &&
        (unavailableNfasts.length !== 0 ? (
          unavailableNfasts.map((nfast) => {
            return (
              <Tickets>
                <Ticket2
                  storeName={nfast.storeName}
                  nfastDate={nfast.nfastDate}
                  nfastStartTime={nfast.nfastStartTime}
                  nfastEndTime={nfast.nfastEndTime}
                  nfastPrice={nfast.nfastPrice}
                  nfastQr={nfast.nfastQr}
                />
              </Tickets>
            );
          })
        ) : (
          <div>사용한 NFasT가 없습니다!</div>
        ))}
      <Pag>
        <Stack spacing={2}>
          <Pagination count={5} variant="outlined" color="secondary" />
        </Stack>
      </Pag>
    </Wrapper>
  );
}

export default MyNft;
