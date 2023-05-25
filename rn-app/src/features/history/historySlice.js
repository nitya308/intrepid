import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const ROOT_URL = 'https://platform-api-aqkotz.onrender.com/api';

export const historySlice = createSlice({
    name: 'history',
    initialState: {

    },
    reducers: {

    },
});

export const { } = historySlice.actions;

export default historySlice.reducer;