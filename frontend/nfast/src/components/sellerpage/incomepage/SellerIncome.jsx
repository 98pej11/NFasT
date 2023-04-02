import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import styled from "styled-components";
import IncomeTable from "./IncomeTable";
import { publishAction } from "../../../redux/actions/publishAction";
import { getSequence } from "../../../storage/Cookie";

function SellerIncome() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(publishAction.getIncomeList(getSequence()));
  }, []);
  const incomeList = useSelector((state) => state.publishReducer.incomeList);
  incomeList.push(
    {
      incomeListTransaction: "TRANSACTION",
      incomeListPrice: 0.01,
      incomeListDate: 1679559906000,
      incomeListType: 0,
    },
    {
      incomeListTransaction: "TRANSACTION",
      incomeListPrice: 0.01,
      incomeListDate: 1679560003000,
      incomeListType: 0,
    },
    {
      incomeListTransaction: "TRANSACTION",
      incomeListPrice: 0.01,
      incomeListDate: 1679560003000,
      incomeListType: 0,
    },
    {
      incomeListTransaction: "TRANSACTION",
      incomeListPrice: 0.01,
      incomeListDate: 1679880013000,
      incomeListType: 0,
    },
    {
      incomeListTransaction: "TRANSACTION",
      incomeListPrice: 0.01,
      incomeListDate: 1679880015000,
      incomeListType: 0,
    },
    {
      incomeListTransaction: "TRANSACTION",
      incomeListPrice: 0.01,
      incomeListDate: 1679880041000,
      incomeListType: 0,
    },
    {
      incomeListTransaction: "TRANSACTION",
      incomeListPrice: 0.01,
      incomeListDate: 1679892714000,
      incomeListType: 0,
    },
    {
      incomeListTransaction: "TRANSACTION",
      incomeListPrice: 0.01,
      incomeListDate: 1679892716000,
      incomeListType: 0,
    },
    {
      incomeListTransaction: "TRANSACTION",
      incomeListPrice: 0.01,
      incomeListDate: 1679894280000,
      incomeListType: 0,
    }
  );
  console.log(incomeList);
  return (
    incomeList.length !== 0 && (
      <div>
        <IncomeTable incomeList={incomeList} />
      </div>
    )
  );
}
export default SellerIncome;
