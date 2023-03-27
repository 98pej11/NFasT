import * as React from "react";
import styled from "styled-components";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import NewTicket from "../commons/NewTicket";

const Wrapper = styled.div`
  height: 100vh;
`;

const Ticket = styled(NewTicket)``;

const Tickets = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

function MyNft() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  return (
    <Wrapper>
      <Tabs
        value={selectedTabIndex}
        onChange={(event, newValue) => setSelectedTabIndex(newValue)}
        centered
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab label="미사용 NFT" />
        <Tab label="사용한 NFT" />
      </Tabs>
      {selectedTabIndex === 0 && (
        <Tickets>
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
        </Tickets>
      )}
      {selectedTabIndex === 1 && (
        <Tickets>
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
        </Tickets>
      )}
    </Wrapper>
  );
}

export default MyNft;
