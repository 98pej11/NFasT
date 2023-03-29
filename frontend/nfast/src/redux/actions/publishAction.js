/* eslint-disable no-console */
import axios from "axios";

const url = `https://j8a307.p.ssafy.io/api/owner`;

function storeTitle(storeSequence) {
  console.log("storeSequence ", storeSequence);
  return async (dispatch) => {
    await axios
      .get(`${url}/${storeSequence}/mint`)
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

function checkQR(nfastSequence) {
  console.log("nfastSequence ", nfastSequence);
  return async () => {
    // const url = `http://localhost:8080/api/owner`;
    await axios
      .patch(`http://localhost:8080/api/owner/qr/${nfastSequence}`)
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
  checkQR,
};
