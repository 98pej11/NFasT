import React from "react";
import styled from "styled-components";
import FooterLogo from "../../assets/NFasT_footer_logo.png";

const Wrapper = styled.div`
  width: 100%;
  height: 25px;
  position: fixed;
  bottom: 0;
  padding: 20px;
  display: flex;
  justify-content: flex-right;
  background-color: whitesmoke;
  img {
    margin-left: 10px;
    padding-bottom: 10px;
  }
`;

function Header() {
  return (
    <Wrapper>
      <img src={FooterLogo} alt="logo" />
    </Wrapper>
  );
}

export default Header;
