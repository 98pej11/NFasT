import * as React from "react";
import styled from "styled-components";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Select from "@mui/material/Select";

const names = ["전체", "수익", "지출(?)"];
const columns = [
  { id: " ", label: "↑↓", maxWidth: 1 },
  { id: "name", label: "금액 (Eth)", minWidth: 130 },
  { id: "code", label: "가게 이름", minWidth: 130 },
  {
    id: "population",
    label: "유효 날짜",
    minWidth: 130,
  },
];

function createData(col, name, code, population) {
  return { col, name, code, population };
}

const rows = [
  createData(" ", "India", "IN", 1324171354),
  createData(" ", "China", "CN", 1403500365),
  createData(" ", "Italy", "IT", 60483973),
  createData(" ", "United States", "IT", 327167434),
  createData(" ", "Canada", "CA", 37602103),
  createData(" ", "Australia", "AU", 25475400),
  createData(" ", "Germany", "DE", 83019200),
  createData(" ", "Ireland", "IE", 70273),
  createData(" ", "Mexico", "MX", 1972550),
  createData(" ", "Japan", "JP", 377973),
  createData(" ", "France", "FR", 640679),
  createData(" ", "United Kingdom", "GB", 242495),
  createData(" ", "Russia", "RU", 17098246),
  createData(" ", "Nigeria", "NG", 923768),
  createData(" ", "Brazil", "BR", 8515767),
];

export default function MakedTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const Styledh2 = styled.div`
    text-align: center;
    margin-top: 10%;
  `;
  const Filter = styled.div`
    float: right;
  `;
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div>
      <Styledh2>
        <h4>발행한 NFAST</h4>
      </Styledh2>
      <Filter>
        <FormControl sx={{ m: 1, width: 150 }}>
          <Select>
            <MenuItem disabled value="">
              <em>filter</em>
            </MenuItem>
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Filter>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{
                      minWidth: column.minWidth,
                      backgroundColor: "#FFDB7E",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
