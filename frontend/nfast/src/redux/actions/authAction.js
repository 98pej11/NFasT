/* eslint-disable react/jsx-filename-extension */
import axios from "axios";
import Alert from "@mui/material/Alert";

import {
  setAccessToken,
  setRefreshToken,
  setSequence,
  removeAccessToken,
  removeRefreshToken,
  removeSequence,
} from "../../storage/Cookie";
// import jwtDecode from "jwt-decode";

// import { apiInstance } from "../../api/index";

// const baseUrl = `http://localhost:8080/api`;
const baseUrl = `https://j8a307.p.ssafy.io/api`;

// const api = apiInstance();

function walletLogin(wallet) {
  console.log("WALLET LOGIN ", wallet);
  const data = {
    wallet,
  };
  return async () => {
    const url = `http://localhost:8080/api/login`;
    await axios
      .post(url, JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
      .then((response) => {
        const { data } = response;
        console.log("RESPONSE DATA ", data);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };
}

// function onLogin(id, password) {
//   let data = {
//     identity: id,
//     password: password,
//   };
//   console.log("로그인요청은 옴", data);
//   return async (dispatch, getState) => {
//     let url = `${baseUrl}/login`;
//     // let url = `http://i8a508.p.ssafy.io:8080/api/v1/login`;
//     let response = await axios
//       .post(url, JSON.stringify(data), {
//         headers: {
//           "Content-Type": "application/json;charset=utf-8",
//         },
//       })
//       .then((response) => {
//         let data = response.data;
//         let refreshtoken = data["jwt-refresh-token"];
//         let userid = data["userId"];
//         getRefreshToken(refreshtoken);
//         setUserId(userid);
//         dispatch({ type: "POST_AUTH_SUCCESS", payload: { data } });
//       })
//       .catch((error) => {
//         console.log("인증에러", error);
//       });
//   };
// }
function onLogout(wallet) {
  console.log("로그아웃요청", wallet);
  const data = {
    wallet,
  };
  return async (dispatch) => {
    const url = `${baseUrl}/logout`;
    // let url = `http://i8a508.p.ssafy.io:8080/api/v1/logout?userId=${id}`;
    await axios
      .post(url, JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
      .then(() => {
        dispatch({ type: "SET_IS_LOGIN", payload: false });
        dispatch({ type: "SET_IS_VALID_TOKEN", payload: false });
        dispatch({ type: "SET_IS_LOGIN_ERROR", payload: false });
        removeAccessToken(null);
        removeRefreshToken(null);
        removeSequence(null);
      })
      .catch((error) => {
        console.log("로그아웃에러", error);
      });
  };
}

// function resetToken(refreshtoken, userId) {
//   let data = {
//     userId: userId,
//     refreshToken: refreshtoken,
//   };
//   console.log("리셋토큰데이터", data);
//   return async (dispatch, getstate) => {
//     let url = `${baseUrl}/users/refresh`;
//     // let url = `http://i8a508.p.ssafy.io:8080/api/v1/users/refresh`
//     let response = await axios
//       .post(url, JSON.stringify(data), {
//         headers: {
//           "Content-Type": "application/json;charset=utf-8",
//         },
//       })
//       .then((response) => {
//         let data = response.data;
//         let accesstoken = data["jwt-auth-token"];
//         dispatch({ type: "POST_RESETTOEKN_SUCCESS", payload: { data } });
//       })
//       .catch((error) => {
//         console.log("토큰리셋인증에러", error);
//       });
//   };
// }

function userConfirm(wallet) {
  const inputs = {
    wallet,
  };
  return async (dispatch) => {
    const url = `${baseUrl}/login`;
    // let url = `http://i8a508.p.ssafy.io:8080/api/v1/login`;
    await axios
      .post(url, JSON.stringify(inputs), {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
      .then((response) => {
        const { data } = response;
        if (data.result === "success") {
          const { jwtAuthToken, jwtRefreshToken, sequence } = data;
          dispatch({ type: "SET_IS_LOGIN", payload: true });
          dispatch({ type: "SET_IS_VALID_TOKEN", payload: true });
          dispatch({ type: "SET_IS_LOGIN_ERROR", payload: false });

          setAccessToken(jwtAuthToken);
          setRefreshToken(jwtRefreshToken);
          setSequence(sequence);
        } else {
          // eslint-disable-next-line react/react-in-jsx-scope
          <Alert severity="success">아이디와 비밀번호를 확인하세요.</Alert>;
          dispatch({ type: "SET_IS_LOGIN", payload: false });
          dispatch({ type: "SET_IS_VALID_TOKEN", payload: false });
          dispatch({ type: "SET_IS_LOGIN_ERROR", payload: true });
        }
      })
      .catch((error) => {
        // eslint-disable-next-line react/react-in-jsx-scope
        <Alert severity="success">아이디와 비밀번호를 확인하세요.</Alert>;
        console.log("userConfirm Error", error);
      });
  };
}

// function getUserInfo(token) {
//   console.log("OOOO", token);
//   let decodeToken = jwtDecode(token);
//   // console.log("2. getUserInfo() decodeToken :: ", decodeToken);
//   return async (dispatch) => {
//     let url = `${baseUrl}/users/${decodeToken.userId}`;
//     api.defaults.headers["jwt-auth-token"] = token;
//     let response = await api
//       .get(url)
//       .then((response) => {
//         let data = response.data.userId;
//         console.log(data);
//         dispatch({ type: "GET_USER_INFO_SUCCESS", payload: { data } });
//       })
//       .catch(async (error) => {
//         console.log("getUser", error);
//       });
//   };
// }

// function tokenRegeneration(refreshtoken, userId) {
//   let data = {
//     userId: userId,
//     refreshToken: refreshtoken,
//   };
//   console.log("리셋토큰데이터", data);
//   return async (dispatch, getstate) => {
//     let url = `${baseUrl}/users/refresh`;
//     // let url = `http://i8a508.p.ssafy.io:8080/api/v1/users/refresh`
//     let response = await axios
//       .post(url, JSON.stringify(data), {
//         headers: {
//           "Content-Type": "application/json;charset=utf-8",
//         },
//       })
//       .then((response) => {
//         let data = response.data;
//         let accesstoken = data["jwt-auth-token"];
//         dispatch({ type: "POST_RESETTOEKN_SUCCESS", payload: { data } });
//       })
//       .catch((error) => {
//         console.log("토큰리셋인증에러", error);
//       });
//   };
// }

export const authAction = {
  onLogout,
  walletLogin,
  userConfirm,
};
