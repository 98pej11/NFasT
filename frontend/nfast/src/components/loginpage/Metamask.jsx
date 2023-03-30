import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import Button from "@mui/material/Button";

// import Alert from "@mui/material/Alert";
import MetaMask from "../../assets/Metamask.png";
import { authAction } from "../../redux/actions/authAction";

function Metamask(props) {
  const { isSeller, store } = props;
  const [address, setAddress] = useState("");
  const [flag, setFlag] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (flag) {
      if (isSeller === 0) {
        // dispatch(authAction.walletLogin(address));
        // console.log(address);
        dispatch(authAction.userConfirm(address));
        navigate("/mainpage");
      } else if (isSeller === 1) {
        dispatch(authAction.storeConfirm(address));
        navigate("/sellerPage");
      } else if (isSeller === 2) {
        dispatch(authAction.storeRegister(address, store));
        navigate("/sellerPage");
      }
    }
  }, [address, dispatch, navigate]);

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

Metamask.defaultProps = {
  isSeller: 0,
};
Metamask.propTypes = {
  isSeller: PropTypes.number,
  store: PropTypes.shape({
    storeInfoNumber: PropTypes.number,
    storeAddress: PropTypes.string,
  }).isRequired,
};
export default Metamask;
