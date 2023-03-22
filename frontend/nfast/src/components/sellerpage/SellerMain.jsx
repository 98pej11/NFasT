/* eslint-disable react/jsx-props-no-spreading */
import * as React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SellerPublish from "./publishpage/SellerPublish";
import SellerIncome from "./incomepage/SellerIncome";
import SellerMaked from "./makedpage/SellerMaked";
import SellerMypage from "./mypage/SellerMypage";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

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

const HeaderTab = styled(Tab)`
  width: 25%;
`;

export default function SellerMain() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Header>
      <Profit>이번달 수익 :</Profit>
      <Box>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <HeaderTab label="NFasT 발행" {...a11yProps(0)} />
            <HeaderTab label="현재 수익" {...a11yProps(1)} />
            <HeaderTab label="뱔행한 NFasT" {...a11yProps(2)} />
            <HeaderTab label="마이페이지" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <SellerPublish />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SellerIncome />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <SellerMaked />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <SellerMypage />
        </TabPanel>
      </Box>
    </Header>
  );
}
