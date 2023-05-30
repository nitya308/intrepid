import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const ROOT_URL = 'https://platform-api-aqkotz.onrender.com/api';

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

export function fetchFeed(userId) {
    return async (dispatch) => {
        fetch(`${ROOT_URL}api/users/${userId}/feed`)
            .then((response) => {
                dispatch(setSubmissions(response.data));
            })
            .catch((er) => {
                dispatch(setError());
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
                dispatch(setError());
            });
    };
}

export default feedSlice.reducer;