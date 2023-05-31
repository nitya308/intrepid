import { getHeaders } from "../../app/store";
import { setSubmissions } from "./historySlice";

const ROOT_URL = 'https://nerveapi.onrender.com';
// const ROOT_URL = 'http://127.0.0.1:9090';


export function fetchHistory() {
    return async (dispatch) => {
        const headers = getHeaders();
        fetch(`${ROOT_URL}/api/submissions`, headers )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                dispatch(setSubmissions(data));
            })
            .catch((er) => {
                throw er;
            });
    };
}