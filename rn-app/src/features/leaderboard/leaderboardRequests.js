import { setTopUsers } from './leaderboardSlice';
import { getHeaders } from '../../app/store';

const ROOT_URL = 'https://nerveapi.onrender.com';
// const ROOT_URL = 'http://127.0.0.1:9090';


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
