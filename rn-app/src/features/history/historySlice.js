import { createSlice } from '@reduxjs/toolkit';

export const historySlice = createSlice({
    name: 'history',
    initialState: {
        submissions: [],
    },
    reducers: {
        setSubmissions: (state, action) => {
            state.submissions = action.payload;
        }
    },
});


export const { setSubmissions } = historySlice.actions;

export default historySlice.reducer;