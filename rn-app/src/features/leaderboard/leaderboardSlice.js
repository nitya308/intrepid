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

export default leaderboardSlice.reducer;