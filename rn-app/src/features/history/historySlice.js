import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const ROOT_URL = 'https://project-api-nerve.onrender.com';

export const historySlice = createSlice({
    name: 'history',
    initialState: {
        submissions: [],
    },
    reducers: {
        setSubmissions: (state, action) => {
            state.submissions = action.payload;
        }
    },
});

const api = axios.create({
    baseURL: "http://localhost:9090/",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

export function fetchSubmissions(userId) {
    return async (dispatch) => {
        api
            .get(`/users/${userId}/submissions`)
            .then((response) => {
                dispatch(setSubmissions(response.data));
            })
            .catch((er) => {
                throw er;
            });
    };
}

export const { setSubmissions } = historySlice.actions;

export default historySlice.reducer;