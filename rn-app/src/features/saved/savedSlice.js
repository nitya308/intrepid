import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const ROOT_URL = 'https://platform-api-aqkotz.onrender.com/api';

export const savedSlice = createSlice({
    name: 'saved',
    initialState: {

    },
    reducers: {

    },
});

export const { } = savedSlice.actions;

export default savedSlice.reducer;