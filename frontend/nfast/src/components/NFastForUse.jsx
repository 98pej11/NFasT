import React from "react";
import styled from "styled-components";
import NFastCard from "./commons/NFastCard";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
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
function NFastForUse() {
  return (
    <Wrapper>
      <Cards>
        <NFastCard />
      </Cards>
    </Wrapper>
  );
}

export default NFastForUse;
