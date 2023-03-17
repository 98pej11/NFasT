import React from "react";
import styled from "styled-components";
import FooterLogo from "../../assets/NFasT_footer_logo.png";

const Wrapper = styled.div`
  width: 100%;
  margin-left: 0;
  display: flex;
  justify-content: flex-right;
  background-color: whitesmoke;
  img {
    width: 70px;
    padding-bottom: 20px;
    padding-left: 20px;
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
