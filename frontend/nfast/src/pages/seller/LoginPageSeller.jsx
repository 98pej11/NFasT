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

const PurpleBox = styled.div`
  display: flex;
  padding-top: 50px;
  flex-direction: column;
  align-items: center;
  background-color: #4a46b5;
  border-top-left-radius: 120px;
  height: 420px;

  h1 {
    margin-top: 5;
    color: whitesmoke;
  }

  h2 {
    margin: 0;
    color: #0a0c37;
  }
  h3 {
    margintop: 10;
    color: #888ce9;
  }
`;

function LoginPageSeller() {
  return (
    <Wrapper>
      <Button href="/loginCustomer">손님 로그인</Button>
      <Logo>
        <Link to="/login">
          <img src="logo.png" alt="logo" width="100px" />
        </Link>
      </Logo>
      <PurpleBox>
        <h1>HELLO</h1>
        <h2>Welcome to NFasT!</h2>
        <h3>기다리지 말고 먹자</h3>
        {/* <LoginButton /> */}
        <div>
          <Button
            variant="contained"
            sx={{
              margin: "10px",
              color: "#4A46B5",
              backgroundColor: "#B8B6F5",
            }}
            disableElevation
          >
            소개보기
          </Button>
          <Button
            variant="contained"
            sx={{
              margin: "10px",
              color: "#4A46B5",
              backgroundColor: "#8E8AFF",
            }}
            disableElevation
            href="./publishNft"
          >
            로그인
          </Button>
        </div>
      </PurpleBox>
    </Wrapper>
  );
}

export default LoginPageSeller;
