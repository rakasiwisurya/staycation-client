import API from "configs/axios";
import { FETCH_PAGE } from "../types";

export const fetchPage = (url, page) => (dispatch) => {
  return API.get(url).then((response) => {
    dispatch({
      type: FETCH_PAGE,
      payload: {
        [page]: response.data,
      },
    });
  });
};
