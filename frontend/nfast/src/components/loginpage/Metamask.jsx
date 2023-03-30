import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PropTypes } from "prop-types";
import Button from "@mui/material/Button";

// import Alert from "@mui/material/Alert";
import MetaMask from "../../assets/Metamask.png";
import { authAction } from "../../redux/actions/authAction";

function Metamask(props) {
  const { isSeller } = props;
  const [address, setAddress] = useState("");
  const [flag, setFlag] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (flag) {
      // eslint-disable-next-line no-console
      console.log(address);
      dispatch(authAction.userConfirm(address));
      // eslint-disable-next-line no-alert
      // <Alert severity="success">성공적으로 처리되었습니다!</Alert>;
      alert("로그인ㅋㅋ");
      console.log("나 여기 들어오긴했단다");

      if (isSeller === 0) {
        // dispatch(authAction.walletLogin(address));
        // console.log(address);
        navigate("/mainpage");
      } else if (isSeller === 1) {
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

        // 계정 변경시 로그아웃하도록 설정
        const accountWasChanged = (accounts) => {
          setAddress(accounts[0]);
          console.log("accountWasChanged");
          alert("계정이 바뀜");
          authAction.onLogout();
        };
        // 연결 끊겼을 때 로그아웃하도록 설정
        const accountWasDisconnected = (accounts) => {
          setAddress(accounts[0]);
          console.log("accountWasDisconnected");
          alert("연결이 끊김");
          authAction.onLogout();
        };

        window.ethereum.on("accountsChanged", accountWasChanged);
        window.ethereum.on("disconnect", accountWasDisconnected);
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
};

export default Metamask;
