import { getHeaders } from '../../app/store'
import { setChallenges } from './savedSlice'

const ROOT_URL = 'https://nerveapi.onrender.com';
// const ROOT_URL = 'http://127.0.0.1:9090';


export function fetchSaved() {
    return async (dispatch) => {
        const headers = getHeaders();
        fetch(`${ROOT_URL}/api/saved`, headers )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                dispatch(setChallenges(data));
            })
            .catch((er) => {
                throw er;
            });
    };
}