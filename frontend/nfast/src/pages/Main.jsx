import React from "react";
import styled from "styled-components";
import FloatingBtn from "../components/FloatingBtn";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

function Main() {
  return (
    <Wrapper>
      <FloatingBtn />
    </Wrapper>
  );
}

export default Main;
