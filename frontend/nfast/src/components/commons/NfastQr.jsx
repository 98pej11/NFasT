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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QR = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  aling-items: center;
  top: 0;
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
          <h1>QR코두 스캔해보쟈~</h1>
          <button
            type="button"
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
        </div>
      </QR>
    </Wrapper>
  );
}

export default NfastQr;
