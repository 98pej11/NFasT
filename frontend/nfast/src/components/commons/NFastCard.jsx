/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
// eslint-disable-next-line import/no-extraneous-dependencies
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";
import styled from "styled-components";
// import PropTypes from "prop-types";
// import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import Drawer from "@mui/material/Drawer";
// import Checkbox from "@mui/material/Checkbox";
// import { TextField } from "@mui/material";
// import { QrCode } from "@mui/icons-material";
import { storeAction } from "../../redux/actions/storeAction";
import { getSequence } from "../../storage/Cookie";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Ticket = styled.div`
  position: relative;
  //   종이같은 그림자
  &:before {
    z-index: -1;
    position: absolute;
    content: "";
    bottom: 15px;
    left: 10px;
    width: 50%;
    top: 80%;
    max-width: 300px;
    background: #777;
    -webkit-box-shadow: 0 15px 10px #777;
    -moz-box-shadow: 0 15px 10px #777;
    box-shadow: 0 15px 10px #777;
    -webkit-transform: rotate(-3deg);
    -moz-transform: rotate(-3deg);
    -o-transform: rotate(-3deg);
    -ms-transform: rotate(-3deg);
    transform: rotate(-3deg);
  }
  &:after {
    z-index: -1;
    position: absolute;
    content: "";
    bottom: 15px;
    width: 50%;
    top: 80%;
    max-width: 300px;
    background: #777;
    -webkit-box-shadow: 0 15px 10px #777;
    -moz-box-shadow: 0 15px 10px #777;
    box-shadow: 0 15px 10px #777;
    -webkit-transform: rotate(3deg);
    -moz-transform: rotate(3deg);
    -o-transform: rotate(3deg);
    -ms-transform: rotate(3deg);
    transform: rotate(3deg);
    right: 10px;
    left: auto;
  }
  background-color: whitesmoke;
  width: 380px;
  height: 140px;
  border-top: groove 20px #bcb6ff;
  display: flex;
  flex-wrap: wrap;
`;
const Info = styled.div`
  flex: 1;
  width: 150px;
  height: 140px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  & > div:not(:last-child) {
    margin: 6%;
  }
`;
const QR = styled.div`
  flex: 1;
  border-left: dashed 2px #bcb6ff;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyleBtn = styled.div`
  display: flex;
  justify-content: center;
  Button {
    margin: 2%;
    width: 80px;
    height: 30px;
    background-color: #bcb6ff;
    color: white;
    font-size: 12px;
  }
`;
// const ConfirmBtn = styled.div`
//   display: flex;
//   justify-content: center;
//   Button {
//     margin: 2%;
//     width: 120px;
//     height: 50px;
//     background-color: #bcb6ff;
//     color: white;
//     font-size: 18px;
//   }
// `;
// const MyDrawer = styled(Drawer)`
//   text-align: center;
//   & .MuiDrawer-paper {
//     width: 100%;
//     height: 40%;
//     overflow-y: auto;
//     border-radius: 50px 50px 0 0;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
// `;
// const Input = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   p {
//     margin-right: 5%;
//     font-size: 20px;
//   }
// `;
// const CheckText = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   p {
//     margin-left: 5%;
//     font-size: 20px;
//   }
// `;
// const label = { inputProps: { "aria-label": "Checkbox demo" } };

function NFastCard() {
  const dispatch = useDispatch();
  const floatingNfast = useSelector((state) => state.mainReducer.nfast);

  // console.log(nfastUsage);
  const navigate = useNavigate();
  const {
    storeName,
    nfastDate,
    nfastStartTime,
    nfastEndTime,
    nfastPrice,
    nfastSequence,
  } = floatingNfast;
  // const { nfastUsage } = nfastUse;
  // const [drawer1Open, setDrawer1Open] = useState(false);
  // const [drawer2Open, setDrawer2Open] = useState(false);
  const [qrStatus, setQrStatus] = useState(false);
  const userSequence = getSequence();

  const nfastUse = useSelector((state) => state.mainReducer.usage);
  // const [nfastUse, setNfastUse] = useState([]);
  useEffect(() => {
    console.log(nfastUse);
    dispatch(storeAction.getNfastUseState(userSequence, nfastSequence));
  }, nfastUse);

  const useStateRoute = (nfastSequence) => {
    console.log("======사용확인 누르면?!=====", nfastUse);

    if (nfastUse === 1) {
      // 네비ㄱ이터 해서 이동
      console.log("======리뷰쓸거아ㅑ아아======", nfastSequence);
      navigate(`/review/${nfastSequence}`);
    } else {
      alert("미사용 NFasT입니다.");
    }
  };
  const toggleDrawer2 = () => {
    // setDrawer2Open(!drawer2Open);
    setQrStatus(!qrStatus);
  };
  return (
    <Wrapper>
      <Ticket>
        <Info>
          <div>
            <span>{storeName}</span>
            <span>{nfastPrice} ETH</span>
          </div>
          <div>
            <span>
              {`${new Date(nfastDate).getFullYear()}.
                ${new Date(nfastDate).getMonth()}.
                ${new Date(nfastDate).getDay()}`}
            </span>
            <div>
              <span>{nfastStartTime}</span>
              <span>{nfastEndTime}</span>
            </div>
          </div>
          <div>
            <StyleBtn>
              <Button
                variant="contained"
                onClick={() => useStateRoute(nfastSequence)}
              >
                사용확인
              </Button>
              {!qrStatus ? (
                <Button variant="contained" onClick={toggleDrawer2}>
                  환불하기
                </Button>
              ) : (
                <Button variant="contained" onClick={toggleDrawer2}>
                  사용하기
                </Button>
              )}
            </StyleBtn>

            {/* 첫 번째 Drawer 내용 */}
            {/* <MyDrawer
              anchor="bottom"
              open={drawer1Open}
              onClose={toggleDrawer1}
            >
              <div>
                <h2>판매 희망 NFT</h2>
              </div>
              <Box
                sx={{
                  width: "60%",
                  display: "flex",
                  flexDirection: "column",
                  "& > *:not(:last-child)": { marginBottom: "8px" },
                }}
              >
                <Input>
                  <p>내 NFT</p>
                  <TextField sx={{ width: "70%" }} />
                </Input>
                <Input>
                  <p> 판매 희망가</p>
                  <TextField sx={{ width: "70%" }} />
                </Input>
                <Input>
                  <p> 구매 대비</p>
                  <TextField sx={{ width: "70%" }} />
                </Input>
                <ConfirmBtn>
                  <Button variant="contained" onClick={useQr}>
                    사용 확인
                  </Button>
                </ConfirmBtn>
              </Box>
            </MyDrawer> */}

            {/* 두 번째 Drawer 내용 */}
            {/* <MyDrawer
              anchor="bottom"
              open={drawer2Open}
              onClose={toggleDrawer2}
            >
              <Box
                sx={{
                  width: "60%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h2 style={{ marginTop: 0 }}>
                  티켓을 취소하면, <br />
                  <br />
                  사용이 더 이상 불가능하며 원가만 환불돼요.
                </h2>
                <CheckText>
                  <Checkbox {...label} />
                  <p>위의 내용을 확인하였습니다.</p>
                </CheckText>

                <Input>
                  <p> 판매 희망가</p>
                  <TextField sx={{ width: "70%" }} />
                </Input>
                <ConfirmBtn>
                  <Button variant="contained" onClick={toggleDrawer1}>
                    환불하기
                  </Button>
                </ConfirmBtn>
              </Box>
            </MyDrawer> */}
          </div>
        </Info>
        <QR>
          {!qrStatus ? (
            <QRCode
              value={JSON.stringify({
                nfastSequence,
                type: 1,
              })}
              size="100"
              fgColor="rgba(37, 74, 205, 1)"
            />
          ) : (
            <QRCode
              value={JSON.stringify({
                nfastSequence,
                type: 2,
              })}
              size="100"
              fgColor="rgba(255, 55, 55, 1)"
            />
          )}
        </QR>
      </Ticket>
    </Wrapper>
  );
}
NFastCard.defaultProps = {
  storeName: "가게이름",
  nfastDate: "날짜",
  nfastStartTime: "시작시간",
  nfastEndTime: "종료시간",
  nfastPrice: 0,
  nfastQr: "qr",
};

// NFastCard.propTypes = {
//   storeName: PropTypes.string,
//   nfastDate: PropTypes.string,
//   nfastStartTime: PropTypes.number,
//   nfastEndTime: PropTypes.number,
//   nfastPrice: PropTypes.number,
//   nfastQr: PropTypes.string,
// };

export default NFastCard;
