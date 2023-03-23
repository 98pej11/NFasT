import React, { useState } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

export default function SearchBar() {
  const [IsClicked, setIsClicked] = useState(false);

  const handleFocus = () => {
    setIsClicked(true);
  };

  const handleBlur = () => {
    setIsClicked(false);
  };

  return (
    <TextField
      variant="outlined"
      size="small"
      placeholder="식당명을 입력해보세요."
      // size={20}
      onClick={handleFocus}
      onBlur={handleBlur}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
        sx: {
          borderRadius: 9999,
          marginLeft: 5,
          disableUnderline: "true",
          bgcolor: IsClicked ? "white" : "#E9E7FF",
          bordercolor: IsClicked ? "white" : "#E9E7FF",
        },
      }}
    />
  );
}
