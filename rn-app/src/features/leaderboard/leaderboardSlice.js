import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const ROOT_URL = 'https://project-api-nerve.onrender.com';

export const leaderboardSlice = createSlice({
    name: 'leaderboard',
    initialState: {
        topUsers: [],
    },
    reducers: {
        setTopUsers: (state, action) => {
            state.topUsers = action.payload;
        },
    },
});

export const { setTopUsers } = leaderboardSlice.actions;

const api = axios.create({
    baseURL: "http://localhost:9090/",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export function fetchTopUsers() {
    return async (dispatch) => {
        axios
            .get(`${ROOT_URL}/leaderboard`)
            .then((response) => {
                dispatch(setTopUsers(response.data));
            })
            .catch((er) => {
                throw er;
            });
    };
}

export default leaderboardSlice.reducer;