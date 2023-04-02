/* eslint-disable no-console */
import axios from "axios";
import { baseUrl as base } from "./url";

// const baseUrl = `https://j8a307.p.ssafy.io/api`;
const baseUrl = `${base}`;

function getStoreDetail(storeSequence) {
  console.log("나 들어왔어");
  return async (dispatch) => {
    await axios
      .get(`${baseUrl}/main/search-list/store/${storeSequence}`)
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

function writeReview(nfastSequence, userSequence, reviews) {
  console.log(nfastSequence);
  console.log(reviews);
  const data = {
    nfastSequence,
    userSequence,
    reviews,
  };
  console.log(data);
  return async () => {
    const url = `${baseUrl}/review-count/${nfastSequence}`;
    await axios
      .post(url, JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

function getPurchaseList(data) {
  return async (dispatch) => {
    await axios
      .post(
        `${baseUrl}/store/${data.storeSequence}/purchase/detail`,
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      )
      .then((response) => {
        const { data } = response;
        dispatch({ type: "GET_PURCHASE_LIST_SUCCESS", payload: { data } });
        console.log("RESPONSE DATA ", data);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };
}

function postPurchase(inputs, amount, userSequence) {
  const data = {
    nfastDate: inputs.nfastDate,
    nfastMealType: inputs.nfastMealType,
    amount,
  };
  console.log("PURCHASE", data);
  return async (dispatch) => {
    await axios
      .post(
        `${baseUrl}/store/${inputs.storeSequence}/${userSequence}/purchase/detail/confirm`,
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      )
      .then((response) => {
        const { data } = response;
        dispatch({ type: "GET_PURCHASE_INFO", payload: { data } });
        console.log("RESPONSE DATA ", data);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };
}

function getNfastPrice(nfastSequence) {
  return async (dispatch) => {
    await axios
      .get(`${baseUrl}/store/${nfastSequence}/sale`)
      .then((response) => {
        const { data } = response;
        dispatch({ type: "GET_NFAST_PRICE", payload: { data } });
        console.log("RESPONSE DATA ", data);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };
}

function registSell(data) {
  return async () => {
    await axios
      .post(
        `${baseUrl}/store/${data.nfastSequence}/sale`,
        JSON.stringify(data),
        {
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
        }
      )
      .then((response) => {
        console.log("REGISTSELL DATA ", response);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
  };
}

function saveTotalCnt(data) {
  return async (dispatch) => {
    dispatch({ type: "SAVE_TOTALCNT", payload: { data } });
  };
}

function saveAmount(data) {
  return async (dispatch) => {
    dispatch({ type: "SAVE_AMOUNT", payload: { data } });
  };
}

function saveHandler(data) {
  return async (dispatch) => {
    dispatch({ type: "SAVE_HANDLER", payload: { data } });
  };
}

function getNfastUseState(userSequence, nfastSequence) {
  return async (dispatch) => {
    await axios
      .get(
        `${baseUrl}/floating-button/confirmation/${userSequence}/${nfastSequence}`
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
  writeReview,
  getPurchaseList,
  saveTotalCnt,
  saveAmount,
  saveHandler,
  postPurchase,
  getNfastUseState,
  getNfastPrice,
  registSell,
};
