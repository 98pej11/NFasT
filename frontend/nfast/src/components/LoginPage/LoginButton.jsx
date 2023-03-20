import React from "react";
import Web3 from "web3";
// import Button from "@mui/material/Button";
import styled from "styled-components";
import MetamaskLogo from "../../assets/Metamask_Logo.png";

const Img = styled.img`
  width: 200px;
  background-color: whitesmoke;
  border-radius: 50px;
  padding: 0px 10px;
  margin: 20px 0px;
  &:hover {
    cursor: pointer;
  }
`;
const web3 = new Web3(window.ethereum);

async function requestAccount() {
  await window.ethereum.request({ method: "eth_requestAccounts" });
  const accounts = await web3.eth.getAccounts();
  if (accounts.length === 0) {
    console.log("Metamask is not connected.");
    return;
  }
  const address = accounts[0];
  console.log("Metamask is connected. Address:", address);
}
function LoginButton() {
  return (
    <Img
      src={MetamaskLogo}
      alt="gg"
      variant="contained"
      sx={{ margin: "10px", backgroundColor: "#FF5F2D" }}
      disableElevation
      onClick={requestAccount}
    />
  );
}

export default LoginButton;
