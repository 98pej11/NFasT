import React from "react";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import TransCard from "../mainpage/TransCard";

function MyBookmark() {
  const Styled = styled.div`
    text-align: center;
    h4 {
      margin-top: 150px;
      margin-bottom: 70px;
    }
  `;
  const Pag = styled.div`
    margin: 10%;
    display: flex; /* 가로 정렬을 위해 flexbox 설정 */
    justify-content: center; /* 가운데 정렬 */
  `;
  return (
    <div>
      <Styled>
        <h4>나의 북마크</h4>
        <TransCard />
        <TransCard />
        <Pag>
          <Stack spacing={2}>
            <Pagination count={5} variant="outlined" color="secondary" />
          </Stack>
        </Pag>
      </Styled>
    </div>
  );
}

export default MyBookmark;
