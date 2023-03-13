import React from "react";
import MainCard from "./maincard";

function maincomp() {
  return (
    <div>
      <h4>거리순</h4>
      <MainCard />
      <h4>거래순</h4>
      <MainCard />
    </div>
  );
}

export default maincomp;
