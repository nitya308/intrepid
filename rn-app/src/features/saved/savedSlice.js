import { createSlice } from '@reduxjs/toolkit';

export const savedSlice = createSlice({
    name: 'saved',
    initialState: {
        challenges: [],
    },
    reducers: {
        setChallenges: (state, action) => {
            state.challenges = action.payload;
        }
    },
});

export const { setChallenges } = savedSlice.actions;

export default savedSlice.reducer;