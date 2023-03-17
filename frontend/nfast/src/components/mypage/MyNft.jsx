import * as React from "react";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import MyNftCard1 from "./MyNftCard1";
import MyNftCard2 from "./MyNftCard2";

function MyNft() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  return (
    <div>
      <Box sx={{ width: "100%", marginTop: 3 }}>
        <Tabs
          value={selectedTabIndex}
          onChange={(event, newValue) => setSelectedTabIndex(newValue)}
          centered
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example"
        >
          <Tab label="사용 예정 NFT" />
          <Tab label="사용한 NFT" />
        </Tabs>
        {selectedTabIndex === 0 && (
          <div>
            <MyNftCard1 />
            <MyNftCard1 />
            <MyNftCard1 />
            <MyNftCard1 />
          </div>
        )}
        {selectedTabIndex === 1 && (
          <div>
            <MyNftCard2 />
            <MyNftCard2 />
            <MyNftCard2 />
            <MyNftCard2 />
          </div>
        )}
      </Box>
    </div>
  );
}

export default MyNft;
