import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const [type, setType] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector((state) => state.authReducer.isLogin);

  useEffect(() => {
    if (flag) {
      if (isSeller === 0) {
        // dispatch(authAction.walletLogin(address));
        // console.log(address);
        dispatch(authAction.userConfirm(address));
        setType(1);
      } else if (isSeller === 1) {
        // eslint-disable-next-line no-console
        console.log(address);
        dispatch(authAction.storeConfirm(address));
        console.log("check STORECONFIRM");
        setType(2);
      } else if (isSeller === 2) {
        dispatch(authAction.storeRegister(address, store));
        setType(2);
      }
    }
  }, [address, dispatch, navigate, flag]);

  useEffect(() => {
    if (type === 1) {
      console.log("CUSTOM");
      navigate("/mainPage");
    } else if (type === 2) {
      console.log("SELLER");
      navigate("/PageSeller");
    }
  }, [isLogin]);

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
