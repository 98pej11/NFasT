import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Picker = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #7b6ffc;
  button {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    border: solid 3px #bcb6ff;
    background-color: white;
    font-size: 30px;
    color: #bcb6ff;
    margin: 20px;
  }
`;
const Price = styled.h3`
  margin-right: 20px;
`;

function QtyPicker() {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <Wrapper>
      <Picker>
        <button type="submit" onClick={handleDecrement}>
          -
        </button>
        <span>{count}</span>
        <button type="submit" onClick={handleIncrement}>
          +
        </button>
      </Picker>
      <Price>원</Price>
    </Wrapper>
  );
}

export default QtyPicker;
