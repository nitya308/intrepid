import { createSlice } from '@reduxjs/toolkit';

export const historySlice = createSlice({
    name: 'history',
    initialState: {
        submissions: [],
    },
    reducers: {
        setSubmissions: (state, action) => {
            console.log("setting history submissions", action.payload);
            state.submissions = action.payload;
        }
    },
});


export const { setSubmissions } = historySlice.actions;

export default historySlice.reducer;