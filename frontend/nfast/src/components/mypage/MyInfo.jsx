import React from "react";
import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";

const Styledh2 = styled.div`
  text-align: center;
  margin: 10%;
`;
function MyInfo() {
  return (
    <Styledh2>
      <h2 style={{ marginBottom: 50 }}>정보 수정</h2>
      <IconButton sx={{ width: 200, height: 200 }}>
        <Avatar
          alt="Remy Sharp"
          src="cat.png"
          sx={{ width: 200, height: 200 }}
        />
      </IconButton>
      <h2 style={{ marginTop: 30 }}>프로필 편집</h2>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </Styledh2>
  );
}

export default MyInfo;
