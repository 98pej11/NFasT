import React, { useState } from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
// import FloatingQr from "./FloatingQr";
import NFastQr from "./NfastQr";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 60px;
  padding-bottom: 700px;
`;
const Floating = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Cards = styled.div`
  display: ${(props) => props.isDisplay};
`;

const Btn = styled.button`
  width: 70px;
  height: 70px;
  background-color: #ffcb45;
  opacity: 90%;
  font-size: 20px;
  border: none;
  border-radius: 50px;
  position: fixed;
  bottom: 80px;
  right: 30px;
`;

function FloatingBtnSeller() {
  const [floating, setFloating] = useState("none");

  const handleClick = () => {
    if (floating === "none") {
      setFloating("auto");
    } else {
      setFloating("none");
    }
  };
  return (
    <Wrapper>
      <Floating>
        <Cards isDisplay={floating}>
          <NFastQr />
        </Cards>
      </Floating>
      <Btn type="button" onClick={handleClick}>
        QR
      </Btn>
      {/* <Link to="/nFastCard">Go to NFastCard</Link>
      <Link to="/review">Go to review</Link> */}
    </Wrapper>
  );
}

export default FloatingBtnSeller;
