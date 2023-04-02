import * as React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import NFastLogo from "../../assets/HeaderLogo.png";

function HeaderSeller() {
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
              {" "}
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default HeaderSeller;
