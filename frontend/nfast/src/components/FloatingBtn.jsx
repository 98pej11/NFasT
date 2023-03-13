import React, { useState } from "react";
import styled from "styled-components";
import FloatingIcon from "../assets/FloatingIcon.png";
import NFastForUse from "./NFastForUse";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Floating = styled.div`
  width: 100%;
  height: 100vh;
  display: ${(props) => props.isDisplay};
`;

const Btn = styled.button`
  background-color: transparent;
  border: none;
  &:hover {
    cursor: pointer;
    opacity: 80%;
  }
  position: fixed;
  bottom: 20px;
  right: 20px;
  img {
    width: 80px;
    height: 80px;
  }
`;

function FloatingBtn() {
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
      <Floating isDisplay={floating}>
        <NFastForUse />
      </Floating>
      <Btn type="button" onClick={handleClick}>
        <img src={FloatingIcon} alt="floatingIcon" />
      </Btn>
    </Wrapper>
  );
}

export default FloatingBtn;
