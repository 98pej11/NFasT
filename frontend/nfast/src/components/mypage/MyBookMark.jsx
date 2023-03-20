import React from "react";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
// import Stack from "@mui/material/Stack";
import MainCard from "../mainpage/MainCard";

function MyBookMark() {
  const Styledh2 = styled.div`
    text-align: center;
    margin: 10%;
  `;
  const Pag = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10%;
    spacing: 2;
  `;
  return (
    <div>
      <Styledh2>
        <h4>나의 북마크</h4>
      </Styledh2>
      <MainCard />
      <MainCard />
      <Pag>
        <Pagination count={10} variant="outlined" color="secondary" />
      </Pag>
    </div>
  );
}

export default MyBookMark;
