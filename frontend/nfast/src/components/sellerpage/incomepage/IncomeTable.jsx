import React, { useState } from "react";
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
import TextField from "@mui/material/TextField";

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

export default function IncomeTable() {
  const [data] = useState([
    { id: 1, name: "Apple", updown: "", price: 1.99, date: "2023.03.12" },
    { id: 2, name: "Banana", updown: "", price: 0.99, date: "2023.03.12" },
    { id: 3, name: "Orange", updown: "", price: 1.49, date: "2023.03.12" },
    { id: 4, name: "Grapes", updown: "", price: 2.99, date: "2023.03.12" },
  ]);
  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
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
            <TableCell sx={{ width: "20%" }}>
              <TextField
                label="가게 이름"
                value={filter}
                onChange={handleFilterChange}
              />
            </TableCell>

            <TableCell sx={{ width: "5%" }}>
              <ArrowIcon direction="up" />
              <ArrowIcon direction="down" />
            </TableCell>
            <TableCell sx={{ width: "20%" }}>가격</TableCell>
            <TableCell sx={{ width: "20%" }}>유효 날짜</TableCell>
          </TableRow>
        </TableHead>
        <TableBody align="center">
          {filteredData.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.updown}</TableCell>
              <TableCell>{item.price}Eth</TableCell>
              <TableCell>{item.date}</TableCell>
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
