/* eslint-disable no-console */
import axios from "axios";

const baseUrl = `https://j8a307.p.ssafy.io/api`;

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

function writeReview(storesequence, userSequence, reviews) {
  console.log(storesequence);
  console.log(reviews);
  const data = {
    storeSequence: storesequence,
    userSequence,
    reviews,
  };
  console.log(data);
  return async () => {
    const url = `${baseUrl}/review-count/${storesequence}`;
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

export const storeAction = {
  getStoreDetail,
  writeReview,
};
