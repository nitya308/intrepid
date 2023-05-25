import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const ROOT_URL = 'https://platform-api-aqkotz.onrender.com/api';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {
            name: 'Test User',
        },
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
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

export function fetchUsers() {
    return async (dispatch) => {
        api
            .get("/users")
            .then((response) => {
                dispatch(setItems(response.data));
            })
            .catch((er) => {
                dispatch(setError());
            });
    };
}

export const { login } = userSlice.actions;

export default userSlice.reducer;