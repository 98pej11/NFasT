import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import FloatingCards from "./FloatingCards";
import { mainAction } from "../../redux/actions/mainAction";
import { getSequence } from "../../storage/Cookie";

const Floating = styled.div`
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
  background-color: transparent;
  border: none;
  position: fixed;
  bottom: 80px;
  right: 30px;
  &:hover {
    cursor: pointer;
    opacity: 80%;
  }

  img {
    width: 80px;
    height: 80px;
  }
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
        지갑
      </Btn>
    </div>
  );
}

export default FloatingBtn;
