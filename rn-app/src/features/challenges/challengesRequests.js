import { setAllChallenges, setTrendingChallenges, setCurrentChallenge } from './challengesSlice';
import { getHeaders } from '../../app/store';

// const ROOT_URL = 'https://project-api-nerve.onrender.com';
const ROOT_URL = 'http://129.170.212.19:9090';

export function fetchChallenges() {
    return async (dispatch) => {
        fetch(`${ROOT_URL}/api/challenges`)
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
        console.log(`headers: ${JSON.stringify(headers)}`);
        fetch(`${ROOT_URL}/api/challenges/trending`, headers)
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
        fetch(`${ROOT_URL}/api/challenges/${id}`)
            .then((response) => response.json())
            .then((data) => {
                dispatch(setCurrentChallenge(data));
            })
            .catch((er) => {
                throw er;
            });
    };
}

export function createChallenge(challenge) {
    return async (dispatch) => {
        fetch(`${ROOT_URL}/api/challenges`, {
            method: 'POST',
            body: JSON.stringify(challenge),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                dispatch(fetchChallenges());
            })
            .catch((er) => {
                throw er;
            });
    }
}

export function submitChallenge(userId, videoUrl) {
    return async (dispatch) => {
        fetch(`${ROOT_URL}/api/users/${userId}/submissions`, {
            method: 'POST',
            body: JSON.stringify({ userId, videoUrl }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                dispatch(fetchChallenges());
            })
            .catch((er) => {
                throw er;
            });
    }
}