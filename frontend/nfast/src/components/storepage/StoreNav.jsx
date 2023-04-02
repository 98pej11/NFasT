import React, { useEffect, useState } from "react";
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
  const [value, setValue] = useState(0);
  const [showCalendar, setShowCalendar] = useState(false);
  const [bookmark, setBookmark] = useState("BookmarkBorderIcon");
  const dispatch = useDispatch();
  const { storeSequence } = useParams();
  // const isBookMark = useSelector((state) => state.storepageReducer.isBookMark);

  // Load bookmark state from session storage
  useEffect(() => {
    const storedBookmark = localStorage.getItem("storeBookmark");
    if (storedBookmark) {
      setBookmark(storedBookmark);
    } else {
      setBookmark("BookmarkBorderIcon");
    }
  }, []);

  const toggleCalendar = () => {
    setShowCalendar((prev) => !prev);
  };

  const toggleBookmark = () => {
    if (bookmark === "BookmarkIcon") {
      dispatch(storeAction.removeBookMark(storeSequence, getSequence()));
      localStorage.setItem("storeBookmark", "BookmarkBorderIcon");
      setBookmark("BookmarkBorderIcon");
    } else {
      dispatch(storeAction.addBookMark(storeSequence, getSequence()));
      localStorage.setItem("storeBookmark", "BookmarkIcon");
      setBookmark("BookmarkIcon");
    }
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
