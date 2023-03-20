import React from "react";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import MainCard from "../mainpage/MainCard";

function MyBookmark() {
  const Styledh2 = styled.div`
    text-align: center;
    margin: 10%;
  `;
  const Pag = styled.div`
    text-align: center;
    margin: 10%;
  `;
  return (
    <div>
      <Styledh2>
        <h4>나의 북마크</h4>
      </Styledh2>
      <MainCard />
      <MainCard />
      <Pag>
        <Stack spacing={2}>
          <Pagination count={10} variant="outlined" color="secondary" />
        </Stack>
      </Pag>
    </div>
  );
}

export default MyBookmark;
