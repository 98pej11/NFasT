import React from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";

const LoginBtn = styled(Button)`
  margin-right: 20px;
  background-color: #ff9e45;
  &:hover {
    background-color: #ffb800;
  }
`;
function LoginButton() {
  return (
    <div>
      <LoginBtn
        variant="contained"
        sx={{ backgroundColor: "#ff9e45" }}
        href="/loginCustomer"
        disableElevation
      >
        로그인
      </LoginBtn>
    </div>
  );
}

export default LoginButton;
