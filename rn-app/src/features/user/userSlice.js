import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const ROOT_URL = 'https://platform-api-aqkotz.onrender.com/api';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userId: 0,
        username: '',
        email: '',
        points: 0,
    },
    reducers: {
        setUser: (state, action) => {
            state.userId = action.payload.userId;
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.points = action.payload.points;
        },
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

export const { setUser } = userSlice.actions;

export default userSlice.reducer;