import { setAllChallenges, setTrendingChallenges, setCurrentChallenge } from './challengesSlice';
import { setChallenges } from '../saved/savedSlice';
import { getHeaders } from '../../app/store';
import store from '../../app/store';

const ROOT_URL = 'https://nerveapi.onrender.com';
// const ROOT_URL = 'http://127.0.0.1:9090';


export function fetchChallenges(sortPoints) {
    return async (dispatch) => {
        fetch(`${ROOT_URL}/api/challenges${sortPoints ? '?sortBy=points' : ''}`)
            .then((response) => response.json())
            .then((data) => {
                dispatch(setAllChallenges(data));
            })
            .catch((er) => {
                throw er;
            });
    };
}

export function fetchTrendingChallenges() {
    return async (dispatch) => {
        const headers = getHeaders();
        fetch(`${ROOT_URL}/api/trending`, headers)
            .then((response) => response.json())
            .then((data) => {
                dispatch(setTrendingChallenges(data));
            })
            .catch((er) => {
                throw er;
            });
    };
}

export function fetchChallenge(id) {
    return async (dispatch) => {
        const headers = getHeaders();
        fetch(`${ROOT_URL}/api/challenges/${id}`, headers )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                dispatch(setCurrentChallenge(data));
            })
            .catch((er) => {
                throw er;
            });
    };
}

export function createChallenge(challenge) {
    return async (dispatch) => {
        const { headers } = getHeaders();
        console.log("challenge: ", challenge);
        console.log("stringify:", JSON.stringify(challenge));
        fetch(`${ROOT_URL}/api/challenges`, {
            method: 'POST',
            body: JSON.stringify(challenge),
            headers: {
                'Content-Type': 'application/json',
                authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2NDc3NzBjNmI3YjIyZjUzNjUyNDgyOTQiLCJpYXQiOjE2ODU1NTMzOTE1Mzl9.o2jrMcWxmODiYq9_lSsrrFFaI9KoCBGQq3h8MHmphs4'
            },
        })
            .then((response) => { console.log(response.json()); return response.json(); })
            .then((data) => {
                dispatch(fetchChallenges());
            })
            .catch((er) => {
                throw er;
            });
    }
}

export function submitChallenge(videoUrl, challengeId) {
    return async (dispatch) => {
        const {headers} = getHeaders();
        console.log("videoUrl: ", videoUrl);
        const stringifiedBody = JSON.stringify({ videoUrl });
        console.log("stringifiedBody: ", stringifiedBody);
        console.log("token", headers.Authorization);
        fetch(`${ROOT_URL}/api/challenges/647781f851ebb63798c34ee2/submit`, {
            method: 'POST',
            body: JSON.stringify({videoUrl}),
            headers: {
                'Content-Type': 'application/json',
                authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI2NDc3NzBjNmI3YjIyZjUzNjUyNDgyOTQiLCJpYXQiOjE2ODU1NTMzOTE1Mzl9.o2jrMcWxmODiYq9_lSsrrFFaI9KoCBGQq3h8MHmphs4'
            },
        })
            .then((response) => { return response.json(); })
            .then((data) => {
                console.log(data);
                // dispatch(fetchChallenges());
            })
            .catch((er) => {
                console.log("error", er);
                throw er;
            });
    }
}

export function saveChallenge(challengeId) {
    return async (dispatch) => {
        const headers = getHeaders();
        fetch(`${ROOT_URL}/api/saved/${challengeId}`, {
            method: 'POST',
            ...headers
        })
            .then((data) => {
                const currentChallenge = store.getState().challenges.currentChallenge;
                dispatch(setCurrentChallenge({ ...currentChallenge, isSaved: !currentChallenge.isSaved }))
                dispatch(fetchChallenge(challengeId));
            })
            .catch((er) => {
                throw er;
            });
    }
}
