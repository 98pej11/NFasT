import React from "react";
import styled from "styled-components";
import SellerMain from "../../components/sellerpage/SellerMain";

const PublishNft = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  margin-top: 200px;
`;
function SellerPage() {
  return (
    <PublishNft>
      <SellerMain />
    </PublishNft>
  );
}

export default SellerPage;
