import * as React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import CalendarList from "./CalendarList";
import { getSequence } from "../../storage/Cookie";
import { storeAction } from "../../redux/actions/storeAction";

export default function StoreNav() {
  const [value, setValue] = React.useState(0);
  const [showCalendar, setShowCalendar] = React.useState(false);
  const [bookmark, setBookmark] = React.useState("BookmarkBorderIcon");
  const dispatch = useDispatch();
  const { storeSequence } = useParams();

  const toggleCalendar = () => {
    setShowCalendar((prev) => !prev);
  };
  const toggleBookmark = () => {
    if (bookmark === "BookmarkIcon") {
      dispatch(storeAction.removeBookMark(storeSequence, getSequence()));
    } else {
      dispatch(storeAction.addBookMark(storeSequence, getSequence()));
    }
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
