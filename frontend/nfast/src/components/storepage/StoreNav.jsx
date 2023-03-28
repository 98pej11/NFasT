import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import CalendarList from "./CalendarList";

export default function Navbar() {
  const [value, setValue] = React.useState(0);
  const [showCalendar, setShowCalendar] = React.useState(false);
  const [bookmark, setBookmark] = React.useState("BookmarkIcon");

  const toggleCalendar = () => {
    setShowCalendar((prev) => !prev);
  };
  const toggleBookmark = () => {
    setBookmark((prev) =>
      prev === "BookmarkIcon" ? "BookmarkBorderIcon" : "BookmarkIcon"
    );
  };

  return (
    <Box sx={{ width: "100%" }}>
      {showCalendar && <CalendarList />}
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          icon={
            bookmark === "BookmarkIcon" ? (
              <BookmarkIcon />
            ) : (
              <BookmarkBorderIcon />
            )
          }
          onClick={toggleBookmark}
        />
        <BottomNavigationAction label="구매하기" onClick={toggleCalendar} />
      </BottomNavigation>
    </Box>
  );
}
