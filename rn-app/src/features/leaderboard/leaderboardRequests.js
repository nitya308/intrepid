import { setTopUsers } from './leaderboardSlice';
import { getHeaders } from '../../app/store';

const ROOT_URL = 'https://project-api-nerve.onrender.com';

export function fetchTopUsers() {
    return (dispatch) => {
    fetch(`${ROOT_URL}/api/leaderboard`)
        .then((response) => response.json())
        .then((data) => {
            dispatch(setTopUsers(data));
        })
        .catch((er) => {
            throw er;
        });
    };
}
