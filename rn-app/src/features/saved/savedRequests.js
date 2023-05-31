import { getHeaders } from '../../app/store'
import { setChallenges } from './savedSlice'

const ROOT_URL = 'https://project-api-nerve.onrender.com';

export function fetchSaved() {
    return async (dispatch) => {
        const headers = getHeaders();
        fetch(`${ROOT_URL}/api/saved`, headers )
            .then((response) => response.json())
            .then((data) => {
                dispatch(setChallenges(data));
            })
            .catch((er) => {
                throw er;
            });
    };
}