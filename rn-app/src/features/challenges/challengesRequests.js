import { setAllChallenges, setTrendingChallenges, setCurrentChallenge } from './challengesSlice';
import { setChallenges } from '../saved/savedSlice';
import { getHeaders } from '../../app/store';
import store from '../../app/store';
import { fetchUser } from '../user/userRequests';

const ROOT_URL = 'https://project-api-nerve.onrender.com';

export function fetchChallenges(sortPoints) {

    console.log('fetching challenges');
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
        fetch(`${ROOT_URL}/api/challenges/${id}`, headers)
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

export function createChallenge(challenge_obj, navigation) {
    return async (dispatch) => {
        const headers = getHeaders();
        fetch(`${ROOT_URL}/api/challenges`, {
            method: 'POST',
            body: JSON.stringify(challenge_obj),
            ...headers,
        })
            .then((response) => response.json())
            .then((data) => {
                dispatch(fetchChallenges());
                dispatch(fetchUser());
                navigation.goBack();
            })
            .catch((er) => {
                throw er;
            });
    }
}

export function submitChallenge(videoUrl, challengeId) {
    return async (dispatch) => {
        const headers = getHeaders();
        fetch(`${ROOT_URL}/api/challenges/${challengeId}/submit`, {
            method: 'POST',
            body: JSON.stringify({ videoUrl }),
            headers: {
                'Content-Type': 'application/json',
                ...headers,
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
