import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { makeStyles } from "@mui/styles";
import styled from "styled-components";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  arrowIcon: {
    color: "grey",
  },
});

// eslint-disable-next-line react/prop-types
function ArrowIcon({ direction }) {
  const classes = useStyles();

  return direction === "up" ? (
    <ArrowUpwardIcon className={classes.arrowIcon} />
  ) : (
    <ArrowDownwardIcon className={classes.arrowIcon} />
  );
}

export default function IncomeTable(props) {
  const { incomeList } = props;
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
            <TableCell sx={{ width: "5%" }}>
              <ArrowIcon direction="up" />
              <ArrowIcon direction="down" />
            </TableCell>
            <TableCell sx={{ width: "20%" }}>수수료 수익</TableCell>
            <TableCell sx={{ width: "20%" }}>유효 날짜</TableCell>
          </TableRow>
        </TableHead>
        <TableBody align="center">
          {incomeList.map((item) => (
            <TableRow>
              <TableCell>{item.updown}</TableCell>
              <TableCell>{item.incomeListPrice}Eth</TableCell>
              <TableCell>
                {`${new Date(item.incomeListDate).getFullYear()}.
                ${new Date(item.incomeListDate).getMonth()}.
                ${new Date(item.incomeListDate).getDay()}`}
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

IncomeTable.propTypes = {
  incomeList: PropTypes.arrayOf(
    PropTypes.shape({
      incomeListDate: PropTypes.string,
      incomeListPrice: PropTypes.number,
      incomeListTransaction: PropTypes.string,
      incomeListType: PropTypes.number,
    })
  ).isRequired,
};
