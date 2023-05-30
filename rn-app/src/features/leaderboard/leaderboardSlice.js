import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const ROOT_URL = 'https://platform-api-aqkotz.onrender.com/api';

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
                dispatch(setError());
            });
    };
}

export default leaderboardSlice.reducer;