import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

function PublishField({
  content,
  type,
  sx,
  placeholder,
  variant,
  ...otherProps
}) {
  const activeBorderColor = "#BCB6FF";
  const activeLabelColor = "#BCB6FF";

  switch (content) {
    case "date":
      return (
        <TextField
          sx={{
            ...sx,
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: activeBorderColor,
              },
            "& .MuiInputLabel-outlined.Mui-focused": {
              color: activeLabelColor,
            },
          }}
          required
          variant={variant}
          type="date"
          fullWidth
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...otherProps}
        />
      );
    case "time":
      return (
        <TextField
          sx={{
            ...sx,
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: activeBorderColor,
              },
            "& .MuiInputLabel-outlined.Mui-focused": {
              color: activeLabelColor,
            },
          }}
          required
          variant={variant}
          type="time"
          fullWidth
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...otherProps}
        />
      );
    case "count":
      return (
        <TextField
          sx={{
            ...sx,
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: activeBorderColor,
              },
            "& .MuiInputLabel-outlined.Mui-focused": {
              color: activeLabelColor,
            },
          }}
          required
          variant={variant}
          label="숫자만 입력"
          type="number"
          fullWidth
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...otherProps}
        />
      );
    case "price":
      return (
        <TextField
          sx={{
            ...sx,
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                borderColor: activeBorderColor,
              },
            "& .MuiInputLabel-outlined.Mui-focused": {
              color: activeLabelColor,
            },
          }}
          required
          label="숫자만 입력"
          type="text"
          placeholder={placeholder}
          variant={variant}
          fullWidth
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...otherProps}
        />
      );
    default:
      return <TextField />;
  }
}

PublishField.defaultProps = {
  sx: {},
  content: "",
  type: "",
  placeholder: "",
  variant: "",
};

PublishField.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  sx: PropTypes.object,
  content: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  variant: PropTypes.string,
};

export default PublishField;
