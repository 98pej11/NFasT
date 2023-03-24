import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CalendarList from "./CalendarList";

export default function Navbar() {
  const [value, setValue] = React.useState(0);
  const [showCalendar, setShowCalendar] = React.useState(false);

  const toggleCalendar = () => {
    setShowCalendar((prev) => !prev);
  };

  return (
    <Box sx={{ width: 500 }}>
      {showCalendar && <CalendarList />}
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction icon={<TurnedInNotIcon />} />
        <BottomNavigationAction label="구매하기" onClick={toggleCalendar} />
      </BottomNavigation>
    </Box>
  );
}
