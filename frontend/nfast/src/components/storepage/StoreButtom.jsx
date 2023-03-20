import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import Button from "@mui/material/Button";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: "100%", position: "fixed", bottom: 0 }}>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          sx={{ width: "33%" }}
          icon={<TurnedInNotIcon fontSize="large" />}
        />
        <BottomNavigationAction sx={{ width: "33%" }} />
        <Button variant="contained" color="success">
          구매 하기
        </Button>
      </BottomNavigation>
    </Box>
  );
}
