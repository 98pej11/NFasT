import React from "react";
import styled from "styled-components";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const Header = styled.div`
  width: 100%;
  height: 150px;
  position: fixed;
  background-color: white;
  top: 90px;
`;

const Profit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  top: 90px;
`;

const ToggleButtons = styled(ToggleButtonGroup)`
  width: 100%;
`;

const ToggleBtn = styled(ToggleButton)`
  width: 100%;
`;

function HeaderSeller() {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <Header>
      <Profit>이번달 수익 :</Profit>
      <ToggleButtons
        color="primary"
        width="100%"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <ToggleBtn value="web" href="publishNft">
          NFast 발행
        </ToggleBtn>
        <ToggleBtn value="android" href="currentIncome">
          입금 현황
        </ToggleBtn>
        <ToggleBtn value="ios" href="makedNft">
          발행한 NFast
        </ToggleBtn>
        <ToggleBtn value="ios" href="mypageSeller">
          마이페이지
        </ToggleBtn>
      </ToggleButtons>
    </Header>
  );
}

export default HeaderSeller;
