import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const feedSlice = createSlice({
    name: 'feed',
    initialState: {
        submissions: [],
        carousel: [],
    },
    reducers: {
        setSubmissions: (state, action) => {
            state.submissions = action.payload;
            console.log("THING", state.submissions)
        },    
        setCarousel: (state, action) => {
            state.carousel = action.payload;
        },
    },
});

export const { setSubmissions, setCarousel } = feedSlice.actions;

export default feedSlice.reducer;