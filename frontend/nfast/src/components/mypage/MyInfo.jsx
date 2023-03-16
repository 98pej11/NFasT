import React from "react";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";

const Styledh2 = styled.div`
  text-align: center;
  margin: 10%;
  h3 {
    margin-bottom: 50px;
  }
  p {
    font-size: 22px;
    margin-top: 50px;
  }
`;

const StyleBtn = styled.div`
  margin: 17%;
  Button {
    width: 150px;
    height: 60px;
    background-color: #ffcb45;
    color: black;
    font-size: 20px;
  }
`;
function MyInfo() {
  return (
    <div>
      <Styledh2>
        <h3>정보 수정</h3>
        <IconButton sx={{ width: 200, height: 200 }}>
          <Avatar
            alt="Remy Sharp"
            src="cat.png"
            sx={{ width: 200, height: 200 }}
          />
        </IconButton>
        <p>프로필 편집</p>
        <EditIcon />
        <p style={{ textAlign: "left", fontSize: "large" }}>연동지갑 주소</p>
        <TextField
          id="filled-read-only-input"
          defaultValue="지갑주소에요 우하핫"
          fullWidth
          InputProps={{
            readOnly: true,
          }}
        />
        <p style={{ textAlign: "left", fontSize: "large" }}>닉네임 변경</p>
        <TextField
          id="outlined-basic"
          label="변경할 닉네임을 입력하세요."
          variant="outlined"
          fullWidth
        />
        <StyleBtn>
          <Button variant="contained">수정</Button>
        </StyleBtn>
      </Styledh2>
    </div>
  );
}

export default MyInfo;
