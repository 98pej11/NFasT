/* eslint-disable no-console */
import axios from "axios";

const url = `https://j8a307.p.ssafy.io/api`;

function getStoreDetail(storeSequence) {
  console.log("나 들어왔어");
  return async (dispatch) => {
    await axios
      .get(`${url}/main/search-list/store/${storeSequence}`)
      .then((response) => {
        const { data } = response;
        dispatch({ type: "GET_STOREDETAIL_SUCCESS", payload: { data } });
        console.log("RESPONSE DATA ", data);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };
}

function getNfastUseState(userSequence, nfastSequence) {
  return async (dispatch) => {
    await axios
      .get(
        `${url}/floating-button/confirmation/${userSequence}/${nfastSequence}`
      )
      .then((response) => {
        const { data } = response;
        dispatch({ type: "GET_NFASTUSESTATE_SUCCESS", payload: { data } });
        console.log("RESPONSE DATA ", data);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };
}

export const storeAction = {
  getStoreDetail,
  getNfastUseState,
};
