import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
import LoginBtn from "../loginpage/LoginButton";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import NFastLogo from "../../assets/HeaderLogo.png";
// eslint-disable-next-line import/named
import { getSequence } from "../../storage/Cookie";

function Header() {
  // const [isLogin, setIsLogin] = useState(false);
  // const isLoggedIn = useSelector((state) => state.authReducer.isLogin);
  const userInfo = useSelector((state) => state.mypageReducer.userInfo);
  console.log("USERRRRRRR", userInfo);

  // 세션에서 로그인 정보 확인
  // useEffect(() => {
  //   const session = getSession();
  //   if (session) {
  //     setIsLogin(true);
  //   } else {
  //     setIsLogin(false);
  //   }
  // }, []);

  // Redux store에 저장된 로그인 여부 값 업데이트
  useEffect(() => {
    console.log("userINFOOOOOo", userInfo);
  }, [userInfo]);

  return (
    <AppBar
      elevation={0}
      position="absolute"
      variant="outlined"
      style={{
        backgroundColor: "transparent",
        height: "80px",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            height: "80px",
            display: "flex",
            justifyContents: "space-between",
          }}
        >
          {/* 로고 */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              // marginLeft: "10%",
            }}
          >
            <Box component={Link} to="/mainPage">
              {/* 로고이미지가 나와야되는데? */}
              <img src={NFastLogo} alt="logo" height="20px" />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                // marginLeft: "10%",
              }}
            >
              {userInfo && <SearchBar />}
            </Box>
          </Box>

          <div style={{ display: "flex", alignItems: "center" }}>
            {getSequence() ? <SideBar /> : <LoginBtn />}
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
