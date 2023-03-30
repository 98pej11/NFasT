import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import FloatingIcon from "../../assets/FloatingIcon.png";
import FloatingCards from "./FloatingCards";
import { mainAction } from "../../redux/actions/mainAction";
import { getSequence } from "../../storage/Cookie";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 60px;
  padding-bottom: 700px;
  background-color: red;
`;
const Floating = styled.div`
  width: 100%;
  height: 100vh;
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
    <Wrapper>
      <Floating>
        <Cards isDisplay={floating}>
          <FloatingCards />
        </Cards>
      </Floating>
      <Btn type="button" onClick={handleClick}>
        <img src={FloatingIcon} alt="floatingIcon" />
      </Btn>
      <Link to="/nFastCard">Go to NFastCard</Link>
      <Link to="/review">Go to review</Link>
    </Wrapper>
  );
}

export default FloatingBtn;
