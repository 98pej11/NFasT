/* eslint-disable no-console */
import axios from "axios";

const baseUrl = `https://j8a307.p.ssafy.io/api/owner`;

function storeTitle(storeSequence) {
  console.log("storeSequence ", storeSequence);
  return async (dispatch) => {
    await axios
      .get(`${baseUrl}/${storeSequence}/mint`)
      .then((response) => {
        const { data } = response;
        dispatch({ type: "GET_STORETITLE_SUCCESS", payload: { data } });
        console.log("RESPONSE DATA ", data);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };
}

function getPublishNfastList(storeSequence) {
  return async (dispatch) => {
    const url = `${baseUrl}/${storeSequence}/nfts`;
    await axios
      .get(url)
      .then((response) => {
        const { data } = response;
        dispatch({ type: "GET_PUBLISH_NFASTLIST_SUCCESS", payload: { data } });
      })
      .catch((error) => {
        console.log("GET STORE ERROR", error);
      });
  };
}

function getIncomeList(storeSequence) {
  return async (dispatch) => {
    const url = `${baseUrl}/${storeSequence}/incomes`;
    await axios
      .get(url)
      .then((response) => {
        const { data } = response;
        dispatch({ type: "GET_INCOMELIST_SUCCESS", payload: { data } });
      })
      .catch((error) => {
        console.log("GET STORE ERROR", error);
      });
  };
}

function checkQR(nfastInfo, storeSequence) {
  const { nfastSequence, type } = JSON.parse(nfastInfo);
  // const nfastSequence = info.nfastSequence;
  // const type = info.type;
  console.log("nfastSequence ", nfastSequence, type);
  return async () => {
    // const url = `http://localhost:8080/api/owner`;
    await axios
      .patch(
        `http://localhost:8080/api/owner/qr/${storeSequence}/${type}/${nfastSequence}`
      )
      .then((response) => {
        const { data } = response;
        // dispatch({type: "GET_CHECKQR_SUCCESS", payload: {data}});

        if (data.result === "success") {
          console.log("RESPONSE DATA ", data);
        } else {
          alert(data.result);
        }
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };
}

export const publishAction = {
  storeTitle,
  getPublishNfastList,
  getIncomeList,
  checkQR,
};
