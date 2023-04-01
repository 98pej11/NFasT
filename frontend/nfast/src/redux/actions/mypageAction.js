/* eslint-disable no-console */
import axios from "axios";

// const baseUrl = `http://localhost:8080/api`;
const baseUrl = `https://j8a307.p.ssafy.io/api`;

function getAvailableNfasts(userSequence) {
  return async (dispatch) => {
    const url = `${baseUrl}/available-NFasT/${userSequence}`;
    await axios
      .get(url)
      .then((response) => {
        const { data } = response;
        // eslint-disable-next-line
        console.log(data);
        dispatch({ type: "GET_AVAILABLE_NFASTS_SUCCESS", payload: { data } });
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.log("GETPOINT ERROR", error);
      });
  };
}

function getUnAvailableNfasts(userSequence) {
  return async (dispatch) => {
    const url = `${baseUrl}/unavailable-NFasT/${userSequence}`;
    await axios
      .get(url)
      .then((response) => {
        const { data } = response;
        // eslint-disable-next-line
        console.log(data);
        dispatch({ type: "GET_UNAVAILABLE_NFASTS_SUCCESS", payload: { data } });
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.log("GETPOINT ERROR", error);
      });
  };
}

function getBookMarkList(userSequence) {
  return async (dispatch) => {
    const url = `${baseUrl}/bookmark-list/${userSequence}`;
    await axios
      .get(url)
      .then((response) => {
        const { data } = response;
        // eslint-disable-next-line
        console.log(data.stores + "데이터 들어오세요");
        dispatch({ type: "GET_BOOKMARKLIST_SUCCESS", payload: { data } });
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.log("GETPOINT ERROR", error);
      });
  };
}

function getUserInfo(userSequence) {
  return async (dispatch) => {
    const url = `${baseUrl}/my-data/${userSequence}`;
    await axios
      .get(url)
      .then((response) => {
        const { data } = response;
        dispatch({ type: "GET_USERINFO_SUCCESS", payload: { data } });
      })
      .catch((error) => {
        console.log("GETPOINT ERROR", error);
      });
  };
}

function modifyUserInfo(userSequence, user) {
  console.log(user);
  return async (dispatch) => {
    const url = `${baseUrl}/my-data/${userSequence}`;
    await axios
      .patch(url, user, {
        headers: {},
      })
      .then((response) => {
        const { data } = response;
        dispatch({ type: "PATCH_USERINFO_SUCCESS", payload: { data } });
      })
      .catch((error) => {
        console.log("MODIFYUSER", error);
      });
  };
}

function getStoreInfo(storeSequence) {
  return async (dispatch) => {
    const url = `${baseUrl}/owner/my-data/${storeSequence}`;
    await axios
      .get(url)
      .then((response) => {
        const { data } = response;
        dispatch({ type: "GET_STOREINFO_SUCCESS", payload: { data } });
      })
      .catch((error) => {
        console.log("GET STORE ERROR", error);
      });
  };
}

function getMintIncome(storeSequence) {
  return async (dispatch) => {
    const url = `${baseUrl}/owner/${storeSequence}/monthly-mint-income`;
    await axios
      .get(url)
      .then((response) => {
        const { data } = response;
        dispatch({ type: "GET_MINTINCOME_SUCCESS", payload: { data } });
      })
      .catch((error) => {
        console.log("GET STORE ERROR", error);
      });
  };
}

function getResellIncome(storeSequence) {
  return async (dispatch) => {
    const url = `${baseUrl}/owner/${storeSequence}/monthly-resell-income`;
    await axios
      .get(url)
      .then((response) => {
        const { data } = response;
        dispatch({ type: "GET_RESELLINCOME_SUCCESS", payload: { data } });
      })
      .catch((error) => {
        console.log("GET STORE ERROR", error);
      });
  };
}

export const mypageAction = {
  getAvailableNfasts,
  getUnAvailableNfasts,
  getBookMarkList,
  getUserInfo,
  modifyUserInfo,
  getStoreInfo,
  getMintIncome,
  getResellIncome,
};
