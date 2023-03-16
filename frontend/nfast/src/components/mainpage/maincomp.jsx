import React from "react";
import styled from "styled-components";
import MainCard from "./Maincard";

const Wrapper = styled.div`
  margin-top: "800px";
`;
function MainComp() {
  return (
    <Wrapper>
      <h4>거리순</h4>
      <MainCard />
      <h4>거래순</h4>
      <MainCard />
    </Wrapper>
  );
}

export default MainComp;
