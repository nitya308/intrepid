import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const ROOT_URL = 'https://project-api-nerve.onrender.com';

export const savedSlice = createSlice({
    name: 'saved',
    initialState: {
        challenges: [],
    },
    reducers: {
        setChallenges: (state, action) => {
            state.challenges = action.payload;
        }
    },
});

export const { setChallenges } = savedSlice.actions;

const api = axios.create({
    baseURL: "http://localhost:9090/",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export function fetchSaved(userId) {
    return async (dispatch) => {
        api
            .get(`/users/${userId}/saved`)
            .then((response) => {
                dispatch(setChallenges(response.data));
            })
            .catch((er) => {
                throw er;
            });
    };
}

export default savedSlice.reducer;