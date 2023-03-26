import React, { useState, useEffect } from "react";

function Metamask() {
  const [address, setAddress] = useState("");
  const [flag, setFlag] = useState(false);
  useEffect(() => {
    if (flag) {
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
        console.log("ACCOUNT ", accounts);
        setFlag(true);
        setAddress(accounts[0]);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    }
  };

  return (
    <div>
      {address ? (
        <p>Connected with address {address}</p>
      ) : (
        <button type="submit" onClick={handleConnectMetamask}>
          Connect with Metamask
        </button>
      )}
    </div>
  );
}

export default Metamask;
