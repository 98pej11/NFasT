import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import MetaMask from "../../assets/Metamask.png";

function Metamask() {
  const [address, setAddress] = useState("");
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    if (flag) {
      // eslint-disable-next-line
      console.log(address);
    }
  }, [address]);

  const handleConnectMetamask = async () => {
    if (window.ethereum) {
      try {
        // Connect to Metamask
        await window.ethereum.request({ method: "eth_requestAccounts" });
        // Get the user's Ethereum address
        const accounts = await window.ethereum.request({
          method: "eth_accounts",
        });
        // eslint-disable-next-line
        console.log("ACCOUNT ", accounts);
        setFlag(true);
        setAddress(accounts[0]);
      } catch (error) {
        // eslint-disable-next-line
        console.error(error);
      }
    }
  };

  return (
    <div>
      {address ? (
        <p>Connected with address {address}</p>
      ) : (
        <Button
          type="submit"
          onClick={handleConnectMetamask}
          variant="contained"
          sx={{
            backgroundColor: "#F3EAD1",
            color: "black",
            borderColor: "#924600",
            width: "260px",
          }}
          disableElevation
        >
          <img
            src={MetaMask}
            alt=""
            style={{ width: "30px", height: "30px", margin: "3%" }}
          />
          MetaMask로 연동하기
        </Button>
      )}
    </div>
  );
}

export default Metamask;
