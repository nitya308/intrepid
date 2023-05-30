import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const ROOT_URL = 'https://platform-api-aqkotz.onrender.com/api';

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
    baseURL: "http://localhost:9090/",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export function fetchChallenges() {
    return async (dispatch) => {
        api
            .get("/challenges")
            .then((response) => {
                dispatch(setItems(response.data));
            })
            .catch((er) => {
                dispatch(setError());
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
                dispatch(setError());
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
                dispatch(setError());
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
                dispatch(setError());
            });
    };
}

export default challengesSlice.reducer;