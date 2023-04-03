import React from "react";
import styled from "styled-components";
import NFastCard from "./NFastCard";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Cards = styled.div`
  width: 100%;
  height: 30%;
  border: solid 1px #5b5299;
  color: #5b5299;
  border-radius: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
  position: fixed;
  top: 130px;
`;
function FloatingCards() {
  return (
    <Wrapper>
      <Cards>
        <NFastCard />
      </Cards>
    </Wrapper>
  );
}

export default FloatingCards;
