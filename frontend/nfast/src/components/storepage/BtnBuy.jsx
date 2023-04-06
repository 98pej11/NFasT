/* eslint-disable no-alert */
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

function BtnBye() {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(storeAction.saveHandler(1));
    alert("구매가 완료되었습니다.");
    window.location.reload();
  };

  return (
    <Wrapper>
      <Button
        sx={{
          backgroundColor: "white",
          border: "solid 1px #bcb6ff",
          borderRadius: "50px",
          color: "#5B5299",
          width: "110px",
          height: "40px",
          fontSize: "13px",
          margin: "0px 5px",
          "&:hover": {
            backgroundColor: "#5B5299",
            color: "white",
          },
        }}
        variant="contained"
        onClick={onClickHandler}
      >
        구매
      </Button>
    </Wrapper>
  );
}

export default BtnBye;
