import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import styled from "styled-components";
import MakedTable from "./MakedTable";
import { publishAction } from "../../../redux/actions/publishAction";
import { getSequence } from "../../../storage/Cookie";

function Publish() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(publishAction.getPublishNfastList(getSequence()));
  }, []);

  const publishNfasts = useSelector((state) => state.publishReducer.nfastList);
  publishNfasts.push(
    {
      nfastDate: 1680879600000,
      nfastDefaultPrice: 0.01,
      nfastSaleCount: 3,
      nfastTotalCount: 6,
    },
    {
      nfastDate: 1680966000000,
      nfastDefaultPrice: 0.01,
      nfastSaleCount: 2,
      nfastTotalCount: 3,
    },
    {
      nfastDate: 1681052400000,
      nfastDefaultPrice: 0.01,
      nfastSaleCount: 1,
      nfastTotalCount: 3,
    },
    {
      nfastDate: 1680274800000,
      nfastDefaultPrice: 0.01,
      nfastSaleCount: 3,
      nfastTotalCount: 3,
    },
    {
      nfastDate: 1680361200000,
      nfastDefaultPrice: 0.01,
      nfastSaleCount: 0,
      nfastTotalCount: 3,
    },
    {
      nfastDate: 1681052400000,
      nfastDefaultPrice: 0.01,
      nfastSaleCount: 1,
      nfastTotalCount: 3,
    }
  );
  console.log(publishNfasts);
  return (
    <div>
      <MakedTable publishNfasts={publishNfasts} />
    </div>
  );
}
export default Publish;
