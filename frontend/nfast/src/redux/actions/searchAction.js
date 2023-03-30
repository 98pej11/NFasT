import axios from "axios";

const baseUrl = `https://j8a307.p.ssafy.io/api`;

function getSearchList() {
  return async (dispatch) => {
    const url = `${baseUrl}/main/search-list/`;
    await axios
      .get(url)
      .then((response) => {
        const { data } = response;
        dispatch({ type: "GET_SEARCH_LIST_SUCCESS", payload: { data } });
      })
      .catch((error) => {
        // eslint-disable-next-line
        console.log("GETSEARCH ERROR", error);
      });
  };
}

export const searchAction = {
  getSearchList,
};
