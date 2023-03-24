import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
import LoginBtn from "../loginpage/LoginButton";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
// const pages = ["Products", "Pricing", "Blog"];
// const settings = [
//   "사용한 NFT",
//   "거래 내역",
//   "나의 북마크",
//   "정보 수정",
//   "로그아웃",
// ];

function Header() {
  return (
    <AppBar
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
            sx={{ flexGrow: 1, display: "flex", alignItems: "center" }}
            component={Link}
            to="/"
          >
            {/* 로고이미지가 나와야되는데? */}
            <img src="logo.png" alt="logo" height="60px" />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <SearchBar />
            </Box>
          </Box>

          <LoginBtn />
          <SideBar />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
