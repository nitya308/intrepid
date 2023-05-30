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

export function fetchFeed(userId) {
    return async (dispatch) => {
        fetch(`${ROOT_URL}api/users/${userId}/feed`)
            .then((response) => {
                dispatch(setSubmissions(response.data));
            })
            .catch((er) => {
                throw er;
            });
    };
}

export function submitVote(challengeId, userId, voteScore) {

}

export default feedSlice.reducer;