/* eslint-disable no-console */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { QrReader } from "react-qr-reader";
import styled from "styled-components";
// import { mypageAction } from "../../redux/actions/mypageAction";
import { getSequence } from "../../storage/Cookie";
import { publishAction } from "../../redux/actions/publishAction";
// import NFastCard from "./NFastCard";

const Wrapper = styled.div`
  width: 100%;
  // height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Btn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  button {
    border: none;
    width: 120px;
    height: 30px;
    border-radius: 0.5em;
    margin-bottom: 10px;
  }

  select {
    border: none;
    height: 40px;
  }
`;

const QR = styled.div`
  width: 80%;
  height: 60%;
  position: fixed;
  h2,
  p {
    display: flex;
    justify-content: center;
    color: white;
  }

  content {
    margin-left: 20px;
  }

  top: 100px;
  background-color: #5b5299;
`;

function NfastQr() {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("environment");
  const [startScan, setStartScan] = useState(false);
  const [loadingScan, setLoadingScan] = useState(false);
  const [data, setData] = useState("");

  // const storeSequence;
  const handleScan = async (scanData) => {
    setLoadingScan(true);
    console.log(`loaded data data`, scanData);
    const sq = getSequence();
    if (scanData && scanData !== "") {
      console.log(`loaded >>>`, scanData);
      console.log(sq);
      // storeSequence=scanData
      setData(scanData.text);
      dispatch(publishAction.checkQR(scanData.text, sq));
      setStartScan(false);
      setLoadingScan(false);
      // setPrecScan(scanData);
    }
  };
  const handleError = (err) => {
    console.error(err);
  };
  return (
    <Wrapper>
      <QR>
        <div>
          <h2>QR코드 스캔하기</h2>
          <Btn>
            <button
              type="button"
              style={{ backgroundColor: "#bcb6ff", color: "white" }}
              onClick={() => {
                setStartScan(!startScan);
              }}
            >
              {startScan ? "Stop Scan" : "Start Scan"}
            </button>

            {startScan && (
              <>
                <select onChange={(e) => setSelected(e.target.value)}>
                  <option value="environment">Back Camera</option>
                  <option value="user">Front Camera</option>
                </select>
                <QrReader
                  facingMode={selected}
                  delay={1000}
                  onError={handleError}
                  onResult={handleScan}
                  // chooseDeviceId={()=>selected}
                  style={{ width: "300px" }}
                />
              </>
            )}
            {loadingScan && <p>Loading</p>}
            {data !== "" && <p>{data}</p>}
          </Btn>
        </div>
      </QR>
    </Wrapper>
  );
}

export default NfastQr;
