import React from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";

function PublishField({
  content,
  // emailCheck,
  // pwd,
  // nicknameCheck,
  type,
  sx,
  placeholder,
  variant,
  ...otherProps
}) {
  // const [input, setInput] = useState("");

  // const verifier = {
  //   email: () => {
  //     if (input === "") return false;
  //     if (emailCheck === "Duplicate") return true;
  //     // eslint-disable-next-line
  //     const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //     if (input.match(regExp) != null) {
  //       return false;
  //     }
  //     return true;
  //   },
  //   password: () => {
  //     if (input === "") return false;
  //     if (input.length < 8) return true;
  //     return false;
  //   },
  //   passwordCheck: () => {
  //     if (input === "") return false;
  //     if (input !== pwd) return true;
  //     return false;
  //   },
  //   nickname: () => {
  //     if (input === "") return false;
  //     if (nicknameCheck === "Duplicate") return true;
  //     if (input.length < 3) return true;
  //     return false;
  //   },
  // };
  // const msg = {
  //   email: "유효한 이메일 형식이 아닙니다.",
  //   emailCheckError: "이미 사용중인 이메일입니다.",
  //   emailCheckSuccess: "사용 가능한 이메일입니다.",
  //   password: "비밀번호는 8자 이상입니다.",
  //   passwordCheck: "비밀번호가 일치하지 않습니다.",
  //   nickname: "닉네임은 3자 이상입니다.",
  //   nicknameCheckError: "이미 사용중인 닉네임입니다.",
  //   nicknameCheckSuccess: "사용 가능한 닉네임입니다.",
  // };

  // const emailHelper = () => {
  //   if (verifier.email()) {
  //     if (emailCheck === "Duplicate") {
  //       return msg.emailCheckError;
  //     }
  //     return msg.email;
  //   }
  //   if (emailCheck === "Unique" && input.length > 0) {
  //     return msg.emailCheckSuccess;
  //   }
  //   return "";
  // };

  // const nicknameHelper = () => {
  //   if (verifier.nickname()) {
  //     if (nicknameCheck === "Duplicate") {
  //       return msg.nicknameCheckError;
  //     }
  //     return msg.nickname;
  //   }
  //   if (nicknameCheck === "Unique" && input.length > 0) {
  //     return msg.nicknameCheckSuccess;
  //   }
  //   return "";
  // };

  // const onChange = (e) => {
  //   setInput(e.target.value);
  // };

  switch (content) {
    case "date":
      return (
        <TextField
          sx={sx}
          required
          variant={variant}
          type="date"
          fullWidth
          // error={verifier.email()}
          // helperText={emailHelper()}
          // onChange={onChange}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...otherProps}
        />
      );
    case "time":
      return (
        <TextField
          sx={sx}
          required
          variant={variant}
          type="time"
          fullWidth
          // error={verifier.password()}
          // helperText={verifier.password() ? msg.password : ""}
          // onChange={onChange}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...otherProps}
        />
      );
    case "count":
      return (
        <TextField
          sx={sx}
          required
          variant={variant}
          label="숫자만 입력"
          type="number"
          fullWidth
          // error={verifier.passwordCheck()}
          // helperText={verifier.passwordCheck() ? msg.passwordCheck : ""}
          // onChange={onChange}
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...otherProps}
        />
      );
    case "price":
      return (
        <TextField
          sx={sx}
          required
          label="숫자만 입력"
          type="text"
          placeholder={placeholder}
          variant={variant}
          fullWidth
          // error={verifier.nickname()}
          // helperText={nicknameHelper()}
          // onChange={onChange}
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
