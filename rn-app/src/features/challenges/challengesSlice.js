import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const ROOT_URL = 'http://localhost/9090';//'https://project-api-nerve.onrender.com';

export const challengesSlice = createSlice({
    name: 'challenges',
    initialState: {
        challenges: [],
        currentChallenge: null,
    },
    reducers: {
        setChallenges: (state, action) => {
            state.challenges = action.payload;
        },
        setCurrentChallenge: (state, action) => {
            state.currentChallenge = action.payload;
        },
    },
});

export const { setChallenges, setCurrentChallenge } = challengesSlice.actions;

const api = axios.create({
    baseURL: ROOT_URL,
    withCredentials: false,
    headers: {
        Accept: "application/vnd.GitHub.v3+json",
        "Content-Type": "application/vnd.GitHub.v3+json",
    },
});

export function fetchChallenges() {
    return async (dispatch) => {
        console.log(`fetchChallenges`);
        api

            .get("/challenges?sortBy=points")
            .then((response) => {
                console.log(`response.data: ${JSON.stringify(response.data)}`);
                dispatch(setChallenges(response.data));
            })
            .catch((er) => {
                throw er;
            });
    };
}

export function fetchChallenge(id) {
    return async (dispatch) => {
        api
            .get(`/challenges/${id}`)
            .then((response) => {
                dispatch(setCurrentChallenge(response.data));
            })
            .catch((er) => {
                throw er;
            });
    };
}

export function createChallenge(challenge) {
    return async (dispatch) => {
        api
            .post(`/challenges`, challenge)
            .then((response) => {
                dispatch(fetchChallenges());
            })
            .catch((er) => {
                throw er;
            });
    };
}

export function submitChallenge(userId, videoUrl) {
    return async (dispatch) => {
        api
            .post(`/challenges/${userId}/submit`, { userId, videoUrl })
            .then((response) => {
                dispatch(fetchChallenges());
            })
            .catch((er) => {
                throw er;
            });
    };
}

export default challengesSlice.reducer;