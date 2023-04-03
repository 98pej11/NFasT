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
  width: 95%;
  height: 40%;
  border: solid 1px #5b5299;
  color: #5b5299;
  border-radius: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: whitesmoke;
  position: fixed;
  top: 250px;
  h2 {
    margin-top: 50px;
  }
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
