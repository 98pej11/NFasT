import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
// import { Link } from "react-router-dom";
// import FloatingQr from "./FloatingQr";
import NFastQr from "./NfastQr";

const FloatingAnimation = keyframes`
0% {
  transform: translateY(0%);	
}
50% {
  transform: translateY(6%);	
}	
100% {
  transform: translateY(0%);
}	
`;

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
  background-color: #5b5299;
  color: white;
  animation: ${FloatingAnimation} 2s linear infinite;
  opacity: 90%;
  font-size: 20px;
  border: none;
  border-radius: 50px;
  position: fixed;
  bottom: 40px;
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
