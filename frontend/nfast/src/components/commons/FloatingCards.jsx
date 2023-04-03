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
  width: 80%;
  height: 50%;
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
        <h2>오늘의 NFasT</h2>
        <div
          style={{
            width: "80%",
            borderBottom: "1px solid #5b5299",
            marginBottom: "30px",
          }}
        />
        <NFastCard />
      </Cards>
    </Wrapper>
  );
}

export default FloatingCards;
