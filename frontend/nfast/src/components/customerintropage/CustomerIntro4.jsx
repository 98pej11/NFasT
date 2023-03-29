import React from "react";
import styled from "styled-components";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

const ProfilBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const PageLink = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Box = styled(Paper)`
  width: 60%;
  height: 120px;
  background-color: blue;
  margin: 20px 0px;
  border-radius: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Intro5() {
  return (
    <ProfilBox>
      <PageLink to="/mainpage">
        <Box elevation={3} sx={{ borderRadius: "70px" }}>
          <h3>손님으로 이용하기</h3>
        </Box>
      </PageLink>
      <PageLink to="/introduce">
        <Box elevation={3} sx={{ borderRadius: "70px" }}>
          <h3>사장님으로 이용하기</h3>
        </Box>
      </PageLink>
    </ProfilBox>
  );
}
