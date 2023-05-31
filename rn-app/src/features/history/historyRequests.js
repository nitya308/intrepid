import { getHeaders } from "../../app/store";
import { setSubmissions } from "./historySlice";

const ROOT_URL = 'https://project-api-nerve.onrender.com';

export function fetchHistory() {
    return async (dispatch) => {
        const headers = getHeaders();
        fetch(`${ROOT_URL}/api/submissions`, headers )
            .then((response) => response.json())
            .then((data) => {
                dispatch(setSubmissions(data));
            })
            .catch((er) => {
                throw er;
            });
    };
}