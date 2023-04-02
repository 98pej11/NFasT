import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import CalendarList from "./CalendarList";
import { storeAction } from "../../redux/actions/storeAction";
import { getSequence } from "../../storage/Cookie";

export default function StoreNav() {
  const [value, setValue] = useState(0);
  const [showCalendar, setShowCalendar] = useState(false);
  const [bookmark, setBookmark] = useState("BookmarkBorderIcon");
  const dispatch = useDispatch();
  const { storeSequence } = useParams();
  const isBookMark = useSelector((state) => state.storepageReducer.isBookMark);

  useEffect(() => {
    dispatch(storeAction.isBookMark(storeSequence, getSequence()));
    console.log("redux에서 어떻게 넘어오니 : ", isBookMark);
    if (isBookMark === 0) {
      setBookmark("BookmarkIcon");
    } else {
      setBookmark("BookmarkBorderIcon");
    }
  }, []);

  // Load bookmark state from session storage
  useEffect(() => {
    console.log(bookmark);
  }, [bookmark]);

  const toggleCalendar = () => {
    setShowCalendar((prev) => !prev);
  };

  const toggleBookmark = () => {
    if (bookmark === "BookmarkIcon") {
      dispatch(storeAction.removeBookMark(storeSequence, getSequence()));
      // localStorage.setItem("storeBookmark", "BookmarkBorderIcon");
      setBookmark("BookmarkBorderIcon");
    } else {
      dispatch(storeAction.addBookMark(storeSequence, getSequence()));
      // localStorage.setItem("storeBookmark", "BookmarkIcon");
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
