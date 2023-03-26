import React from "react";
// import styled from "styled-components";
// import Avatar from "@mui/material/Avatar";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Metamask from "../../components/loginpage/Metamask";
import logo from "../../assets/logo.png";
import moneylogin from "../../assets/moneylogin.png";

const theme = createTheme();

export default function LoginPage() {
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" m={30}>
        <Box
          sx={{
            marginTop: 25,
            gap: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={logo} alt="" />
          <Typography variant="h6">줄서지말고 먹자!</Typography>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Metamask />
          </div>
          <Button
            variant="contained"
            href="/loginSeller"
            sx={{
              backgroundColor: "#BCB6FF",
              color: "white",
              width: "260px",
            }}
            disableElevation
          >
            <img
              src={moneylogin}
              alt=""
              style={{ width: "30px", height: "30px", margin: "3%" }}
            />
            비즈니스 계정으로 이용하기
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
