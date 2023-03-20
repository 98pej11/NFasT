import React from "react";
import styled from "styled-components";
import HeaderSeller from "../../components/commons/HeaderSeller";
import NFastCard1 from "../../components/mypage/MyNftCard1";

const PublishNft = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  margin-top: 200px;
`;
function PublishNFT() {
  return (
    <PublishNft>
      <HeaderSeller />
      <NFastCard1 />
    </PublishNft>
  );
}

export default PublishNFT;
