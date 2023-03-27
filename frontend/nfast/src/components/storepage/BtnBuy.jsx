import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const StyleBtn = styled(Button)`
  margin: 17%;
  width: 120px;
  height: 50px;
  && {
    background-color: #bcb6ff;
    color: white;
    &:hover {
      background-color: #c9c5fc;
    }
  }
  font-size: 20px;
`;
function BtnBye() {
  return (
    <Wrapper>
      <StyleBtn variant="contained">구매</StyleBtn>
    </Wrapper>
  );
}

export default BtnBye;
