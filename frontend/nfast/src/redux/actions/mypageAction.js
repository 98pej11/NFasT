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
        console.log(data);
        dispatch({ type: "GET_BOOKMARKLIST_SUCCESS", payload: { data } });
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.log("GETPOINT ERROR", error);
      });
  };
}

export const mypageAction = {
  getAvailableNfasts,
  getUnAvailableNfasts,
  getBookMarkList,
};
