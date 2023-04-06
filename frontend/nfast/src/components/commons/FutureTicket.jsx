/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import Checkbox from "@mui/material/Checkbox";
import { TextField } from "@mui/material";
import { storeAction } from "../../redux/actions/storeAction";
import { toStringByFormatting } from "../../api/transDate";

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
const ConfirmBtn = styled.div`
  display: flex;
  justify-content: center;
  Button {
    margin: 10%;
    width: 100px;
    height: 45px;
    background-color: #bcb6ff;
    color: white;
    font-size: 15px;
  }
`;
const MyDrawer = styled(Drawer)`
  text-align: center;
  & .MuiDrawer-paper {
    width: 100%;
    height: 50%;
    overflow-y: auto;
    border-radius: 50px 50px 0 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Input = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin-right: 5%;
    font-size: 15px;
  }
`;
const CheckText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    margin-left: 5%;
    font-size: 20px;
  }
`;
const label = { inputProps: { "aria-label": "Checkbox demo" } };

function FutureTicket(props) {
  const dispatch = useDispatch();
  const {
    storeName,
    nfastDate,
    nfastStartTime,
    nfastEndTime,
    nfastPrice,
    nfastQr,
    nfastSequence,
    nfastMealType,
  } = props;
  const [drawer1Open, setDrawer1Open] = useState(false);
  const [drawer2Open, setDrawer2Open] = useState(false);
  const [inputs, setInputs] = useState({
    nfastHopePrice: "",
    nfastSequence,
  });
  const comparePrice = useSelector(
    (state) => state.storepageReducer.nfastPrice
  );

  const resellNfast = useSelector(
    (state) => state.storepageReducer.resellNfast
  );

  useEffect(() => {
    dispatch(storeAction.getNfastPrice(nfastSequence));
  }, []);

  useEffect(() => {
    console.log("RESELLNfast", resellNfast);
  }, [resellNfast]);

  const toggleDrawer1 = () => {
    setDrawer1Open(!drawer1Open);
  };

  const toggleDrawer2 = () => {
    setDrawer2Open(!drawer2Open);
  };

  const sellTicket = () => {
    dispatch(storeAction.registSell(inputs));
  };

  const onChangeHandler = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    const nextInputs = { ...inputs, [name]: value };
    setInputs(nextInputs);
    // eslint-disable-next-line no-console
    console.log(nextInputs);
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
            <span>{toStringByFormatting(new Date(nfastDate))}</span>
            <div>
              <span>{nfastStartTime}</span>
              <span>{nfastEndTime}</span>
            </div>
          </div>
          <div>
            <StyleBtn>
              <Button variant="contained" onClick={toggleDrawer1}>
                판매하기
              </Button>
            </StyleBtn>

            {/* 첫 번째 Drawer 내용 */}
            <MyDrawer
              anchor="bottom"
              open={drawer1Open}
              onClose={toggleDrawer1}
            >
              <div style={{ margin: 25 }}>
                <h3>판매 희망 NFT</h3>
              </div>
              <Box
                sx={{
                  width: "80%",
                  display: "flex",
                  flexDirection: "column",
                  "& > *:not(:last-child)": { marginBottom: "8px" },
                }}
              >
                <Input>
                  <p>내 NFT</p>
                  <TextField
                    sx={{ width: "70%" }}
                    value={`${storeName} / ${
                      nfastMealType === 0 ? "런치" : "디너"
                    } `}
                  />
                </Input>
                <Input>
                  <p> 판매 희망가</p>
                  <TextField
                    sx={{ width: "70%" }}
                    value={inputs.nfastHopePrice}
                    onChange={onChangeHandler}
                    name="nfastHopePrice"
                  />
                </Input>
                <Input>
                  <p> 구매 대비</p>
                  <TextField
                    sx={{ width: "70%" }}
                    value={inputs.nfastHopePrice - comparePrice}
                  />
                </Input>
                <ConfirmBtn>
                  <Button variant="contained" onClick={sellTicket}>
                    판매하기
                  </Button>
                </ConfirmBtn>
              </Box>
            </MyDrawer>

            {/* 두 번째 Drawer 내용 */}
            <MyDrawer
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
            </MyDrawer>
            {/* <StyleBtn></StyleBtn> */}
          </div>
        </Info>
        <QR>{nfastQr}</QR>
      </Ticket>
    </Wrapper>
  );
}
FutureTicket.defaultProps = {
  storeName: "가게이름",
  nfastDate: "날짜",
  nfastStartTime: "시작시간",
  nfastEndTime: "종료시간",
  nfastPrice: 0,
  nfastQr: "qr",
};
FutureTicket.propTypes = {
  storeName: PropTypes.string,
  nfastDate: PropTypes.string,
  nfastStartTime: PropTypes.number,
  nfastEndTime: PropTypes.number,
  nfastPrice: PropTypes.number,
  nfastQr: PropTypes.string,
  nfastSequence: PropTypes.string.isRequired,
  nfastMealType: PropTypes.string.isRequired,
};
export default FutureTicket;
