import React from "react";
import styled from "styled-components";
import Logo from "../../assets/NFast_Logo.png";

const Wrapper = styled.div`
  height: 60px;
  width: 100%;
  background-color: #ffcb45;
  display: flex;
  align-items: center;
  padding: 10px;
  position: fixed;
  top: 0;
  img {
    margin-left: 10px;
    width: 50px;
    height: 50px;
  }
`;

const Buttons = styled.div`
  width: 100%;
  text-align: right;
  button {
    margin-right: 10px;
  }
`;

function Header() {
  return (
    <Wrapper>
      <img src={Logo} alt="logo" />
      <Buttons>
        <button type="button">로그인</button>
        <button type="button">사장님 로그인</button>
      </Buttons>
    </Wrapper>
  );
}

export default Header;
