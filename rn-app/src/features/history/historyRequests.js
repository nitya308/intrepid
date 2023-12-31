import { getHeaders } from "../../app/store";
import { setSubmissions } from "./historySlice";

const ROOT_URL = "https://project-nerve-backend.onrender.com";

export function fetchHistory() {
  return async (dispatch) => {
    const headers = getHeaders();
    fetch(`${ROOT_URL}/api/history`, headers)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setSubmissions(data));
      })
      .catch((er) => {
        throw er;
      });
  };
}
