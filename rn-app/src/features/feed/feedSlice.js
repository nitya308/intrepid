import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const ROOT_URL = 'https://project-api-nerve.onrender.com';

export const feedSlice = createSlice({
    name: 'leaderboard',
    initialState: {
        submissions: [],
    },
    reducers: {
        setSubmissions: (state, action) => {
            state.submissions = action.payload;
        },
    },
});

export const { setSubmissions } = feedSlice.actions;

const api = axios.create({
    baseURL: "http://localhost:9090/",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export function fetchFeed(userId) {
    return async (dispatch) => {
        api
            .get(`/submissions`)
            .then((response) => {
                dispatch(setSubmissions(response.data));
            })
            .catch((er) => {
                throw er;
            });
    };
}

export function submitVote(challengeId, userId, voteScore) {
    return async (dispatch) => {
        api
            .post(`/submissions/${challengeId}/vote`, {
                userId,
                voteScore,
            })
            .then((response) => {
                dispatch(fetchFeed());
            })
            .catch((er) => {
                throw er;
            });
    };
}

export default feedSlice.reducer;