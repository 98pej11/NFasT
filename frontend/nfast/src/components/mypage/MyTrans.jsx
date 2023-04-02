import React, { useState, useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDispatch, useSelector } from "react-redux";
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
import { mypageAction } from "../../redux/actions/mypageAction";
import { getSequence } from "../../storage/Cookie";
import { toStringByFormatting } from "../../api/transDate";

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

export default function MyTrans() {
  const Styledh2 = styled.div`
    text-align: center;
    margin-left: 5%;
    margin-right: 5%;
    h4 {
      margin-top: 150px;
      margin-bottom: 70px;
    }
  `;
  const dispatch = useDispatch();

  const [filter, setFilter] = useState("");

  useEffect(() => {
    dispatch(mypageAction.getTransactionList(getSequence()));
  }, []);

  const transactionList = useSelector(
    (state) => state.mypageReducer.transactionList
  );
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  console.log(transactionList);
  const Pag = styled.div`
    margin: 10%;
    display: flex; /* 가로 정렬을 위해 flexbox 설정 */
    justify-content: center; /* 가운데 정렬 */
  `;
  return (
    <div>
      <Styledh2>
        <h4>거래 내역</h4>

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
            {transactionList.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.tradeListType === 0 ? "-" : "+"}</TableCell>
                <TableCell>{item.tradeListPrice}Eth</TableCell>
                <TableCell>
                  {toStringByFormatting(new Date(item.tradeListDate))}
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
      </Styledh2>
    </div>
  );
}
