import {
    createSlice
} from '@reduxjs/toolkit';
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
        },
        setHasVoted: (state, action) => {
            const submissionId = action.payload;
            const submission = state.submissions.find(
                (submission) => submission.id === submissionId
            );
            submission.hasVoted = true;
        },
        setCarousel: (state, action) => {
            state.carousel = action.payload;
        },
    },
});

export const {
    setSubmissions,
    setCarousel
} = feedSlice.actions;

export default feedSlice.reducer;