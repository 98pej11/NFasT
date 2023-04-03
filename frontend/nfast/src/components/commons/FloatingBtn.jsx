import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";
import FloatingCards from "./FloatingCards";
import { mainAction } from "../../redux/actions/mainAction";
import { getSequence } from "../../storage/Cookie";

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

const Floating = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-color: blue;
`;
const Cards = styled.div`
  width: 100%;
  height: 100vh;
  display: ${(props) => props.isDisplay};
`;

const Btn = styled.button`
  background-color: #5b5299;
  width: 60px;
  height: 60px;
  border: none;
  border-radius: 50px;
  position: fixed;
  bottom: 80px;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${FloatingAnimation} 2s linear infinite;
`;
function FloatingBtn() {
  const [floating, setFloating] = useState("none");

  const dispatch = useDispatch();

  const handleClick = () => {
    if (floating === "none") {
      dispatch(mainAction.getFloatingNfast(getSequence()));
      setFloating("auto");
    } else {
      setFloating("none");
    }
  };
  return (
    <div>
      <Floating>
        <Cards isDisplay={floating}>
          <FloatingCards />
        </Cards>
      </Floating>
      <Btn type="button" onClick={handleClick}>
        <ConfirmationNumberIcon fontSize="large" style={{ color: "white" }} />
      </Btn>
    </div>
  );
}

export default FloatingBtn;
