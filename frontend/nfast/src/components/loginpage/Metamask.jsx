import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import Stack from "@mui/material/Stack";
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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (flag) {
      setOpen(true);
    }
  }, [flag]);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

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
        setAddress(accounts[0]);
        setFlag(true);
      } catch (error) {
        // eslint-disable-next-line
        console.error(error);
      }
    }
  };

  useEffect(() => {
    if (flag) {
      if (isSeller === 0) {
        dispatch(authAction.userConfirm(address)).then(() => {
          setOpen(true);
        });
        setType(1);
      } else if (isSeller === 1) {
        dispatch(authAction.storeConfirm(address)).then(() => {
          setOpen(true);
        });
        setType(2);
      } else if (isSeller === 2) {
        dispatch(authAction.storeRegister(address, store)).then(() => {
          setOpen(true);
        });
        setType(2);
      }
    }
  }, [address, dispatch, flag, isSeller, store]);

  useEffect(() => {
    if (type === 1) {
      console.log("CUSTOM");
      navigate("/mainpage");
    } else if (type === 2) {
      console.log("SELLER");
      navigate("/PageSeller");
    }
  }, [isLogin, type]);

  return (
    <div>
      <div style={{ position: "fixed", top: 80 }}>
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Slide
            in={open}
            direction="down"
            mountOnEnter
            unmountOnExit
            timeout={500}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "250px" }}
            >
              연동이 완료되었습니다.
            </Alert>
          </Slide>
        </Stack>
      </div>
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
