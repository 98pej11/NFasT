import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import PropTypes from "prop-types";

export default function MakedTable(props) {
  const { publishNfasts } = props;
  console.log("PUBLISH", publishNfasts);

  const Pag = styled.div`
    margin: 10%;
    display: flex; /* 가로 정렬을 위해 flexbox 설정 */
    justify-content: center; /* 가운데 정렬 */
  `;
  return (
    <div>
      <Table sx={{ textAlign: "center" }}>
        <TableHead align="center">
          <TableRow>
            <TableCell sx={{ width: "20%" }}>날짜</TableCell>
            <TableCell sx={{ width: "5%" }}>발행 가격</TableCell>
            <TableCell sx={{ width: "20%" }}>판매/총 개수</TableCell>
          </TableRow>
        </TableHead>
        <TableBody align="center">
          {publishNfasts.map((item) => (
            <TableRow key={item.id}>
              <TableCell>
                {`${new Date(item.nfastDate).getFullYear()}.
                ${new Date(item.nfastDate).getMonth()}.
                ${new Date(item.nfastDate).getDay()}`}
              </TableCell>
              <TableCell>{item.nfastDefaultPrice}Eth</TableCell>
              <TableCell>
                {item.nfastSaleCount}/{item.nfastTotalCount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Pag>
        <Stack spacing={2}>
          <Pagination count={5} variant="outlined" color="secondary" />
        </Stack>
      </Pag>
    </div>
  );
}

MakedTable.propTypes = {
  publishNfasts: PropTypes.arrayOf(
    PropTypes.shape({
      incomeListDate: PropTypes.string,
      incomeListPrice: PropTypes.number,
      incomeListTransaction: PropTypes.string,
      incomeListType: PropTypes.number,
    })
  ).isRequired,
};
