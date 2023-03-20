import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import styled from "styled-components";
// import LoginButton from "../../components/LoginPage/LoginButton";

const Wrapper = styled.div`
  background-color: whitesmoke;
`;

const Logo = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
  height: 120px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const YellowBox = styled.div`
  display: flex;
  padding-top: 50px;
  flex-direction: column;
  align-items: center;
  background-color: #ffcb45;
  border-top-left-radius: 120px;
  height: 420px;

  h1 {
    margin-top: 5;
  }

  h2 {
    margin: 0;
    color: #756436;
  }
  h3 {
    margintop: 10;
    color: #ff5f2d;
  }
`;

function LoginPageCustomer() {
  return (
    <Wrapper>
      <Link to="/login-seller">
        <Button>사장님 로그인</Button>
      </Link>
      <Logo>
        <Link to="/login">
          <img src="logo.png" alt="logo" width="100px" />
        </Link>
      </Logo>
      <YellowBox>
        <h1>HELLO</h1>
        <h2>Welcome to NFasT!</h2>
        <h3>기다리지 말고 먹자</h3>
        {/* <LoginButton /> */}
        <div>
          <Button
            variant="contained"
            sx={{ margin: "10px", backgroundColor: "#FF5F2D" }}
            disableElevation
          >
            소개보기
          </Button>
          <Button
            variant="contained"
            sx={{ margin: "10px", backgroundColor: "#FF5F2D" }}
            disableElevation
          >
            회원가입
          </Button>
        </div>
      </YellowBox>
    </Wrapper>
  );
}

export default LoginPageCustomer;
