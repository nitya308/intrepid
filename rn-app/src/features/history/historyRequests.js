import { getHeaders } from "../../app/store";
import { setSubmissions } from "./historySlice";

const ROOT_URL = "https://project-api-nerve.onrender.com";

export function fetchHistory() {
  console.log("fetching history");
  return async (dispatch) => {
    const headers = getHeaders();
    fetch(`${ROOT_URL}/api/history`, headers)
      .then((response) => response.json())
      .then((data) => {
        // console.log("data in history", data);
        dispatch(setSubmissions(data));
      })
      .catch((er) => {
        throw er;
      });
  };
}
