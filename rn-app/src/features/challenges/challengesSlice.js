import { createSlice } from '@reduxjs/toolkit';

const ROOT_URL = 'https://platform-api-aqkotz.onrender.com/api';

export const challengesSlice = createSlice({
    name: 'challenges',
    initialState: {
        allChallenges: [],
        trendingChallenges: [],
        currentChallenge: null,
    },
    reducers: {
        setAllChallenges: (state, action) => {
            state.allChallenges = action.payload;
        },
        setTrendingChallenges: (state, action) => {
            state.trendingChallenges = action.payload;
        },
        setCurrentChallenge: (state, action) => {
            state.currentChallenge = action.payload;
        },
    },
});

export const { setAllChallenges, setTrendingChallenges, setCurrentChallenge } = challengesSlice.actions;

export default challengesSlice.reducer;