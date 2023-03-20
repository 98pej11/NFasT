import React from "react";
import styled from "styled-components";
import NFastCard from "./NFastCard";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Cards = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
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
