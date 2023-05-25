import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const ROOT_URL = 'https://platform-api-aqkotz.onrender.com/api';

export const challengesSlice = createSlice({
    name: 'challenges',
    initialState: {

    },
    reducers: {

    },
});

export const { } = challengesSlice.actions;

export default challengesSlice.reducer;