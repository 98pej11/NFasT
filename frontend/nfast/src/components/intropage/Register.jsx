import React from "react";
import styled from "styled-components";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";

import { Typography } from "@mui/material";
import Metamask from "../loginpage/Metamask";
// import logo from "../../assets/logo.png";

const StyleBtn = styled.div`
  Button {
    width: 120px;
    height: 50px;
    background-color: #bcb6ff;
    color: white;
    font-size: 13px;
  }
`;
export default function Register() {
  return (
    <ProfilBox>
      <ContentBox>
        <Box
          sx={{
            gap: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& .MuiTextField-root": {
              width: "100%",
            },
          }}
        >
          <Typography
            sx={{ display: "flex", justifyContent: "flex-start", marginTop: 3 }}
          >
            사업자 등록 번호
          </Typography>
          <TextField
            id="filled-read-only-input"
            placeholder="사업자 등록 번호를 입력하세요."
            fullWidth
            InputProps={{
              readOnly: true,
            }}
          />
          <Typography
            sx={{ display: "flex", justifyContent: "flex-start", marginTop: 3 }}
          >
            주소 입력
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              width: "100%",
              marginBottom: "16px",
            }}
          >
            <TextField
              id="outlined-basic"
              placeholder="ex) 강서로 348"
              variant="outlined"
            />
            <StyleBtn>
              <Button variant="contained">주소 검색</Button>
            </StyleBtn>
          </div>
          <TextField
            id="outlined-basic"
            placeholder="상세 주소를 입력하세요."
            variant="outlined"
          />
          <div style={{ marginTop: 20 }}> </div>
          <Metamask />
        </Box>
      </ContentBox>
    </ProfilBox>
  );
}
const ProfilBox = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 10%;
  position: relative; /* contact box 고정시키기위해서 */
`;
const ContentBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 682px) {
    height: 70%;
  }
`;
