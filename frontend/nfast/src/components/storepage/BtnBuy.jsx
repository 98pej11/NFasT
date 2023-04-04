import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { storeAction } from "../../redux/actions/storeAction";

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
  const dispatch = useDispatch();
  const onClickHandler = () => {
    dispatch(storeAction.saveHandler(1));
  };

  return (
    <Wrapper>
      <StyleBtn variant="contained" onClick={onClickHandler}>
        구매
      </StyleBtn>
    </Wrapper>
  );
}

export default BtnBye;
