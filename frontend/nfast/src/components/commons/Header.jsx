import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
// import Button from "@mui/material/Button";
// import LoginBtn from "../loginpage/LoginButton";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";

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
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              marginLeft: "10%",
            }}
          >
            <Box component={Link} to="/">
              {/* 로고이미지가 나와야되는데? */}
              <img src="logo.png" alt="logo" height="60px" />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <SearchBar />
            </Box>
          </Box>
          <div style={{ marginRight: "14%" }}>
            {/* <LoginBtn /> */}
            <SideBar />
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
