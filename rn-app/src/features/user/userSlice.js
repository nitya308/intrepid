import { createSlice } from '@reduxjs/toolkit';
import { setToken } from '../../app/utils';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        points: 0,
        authenticated: false,
        token: '',
        loading: true,
    },
    reducers: {
        setUser: (state, action) => {
            state.username = action.payload.username;
            state.points = action.payload.totalPoints;
        },
        emptyUser: (state) => {
            state.username = '';
            state.points = 0;
        },
        authUser: (state, action) => {
            loading = false;
            state.authenticated = true;
            state.token = action.payload;
        },
        deauthUser: (state) => {
            state.authenticated = false;
            state.token = '';
        },
        authFailed: (state) => {
            state.authenticated = false;
            state.token = '';
            state.loading = false;
        }
    },
});

export const { setUser, emptyUser, authUser, deauthUser, authFailed } = userSlice.actions;

export default userSlice.reducer;