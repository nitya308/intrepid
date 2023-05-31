import { createSlice } from '@reduxjs/toolkit';
import { getHeaders } from '../../app/store'

const ROOT_URL = 'https://platform-api-aqkotz.onrender.com/api';

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

export function fetchSaved(){
    return async (dispatch) => {
        const headers = await getHeaders();
        fetch(`${ROOT_URL}/api/saved`, {
            method: 'GET',
            headers,
        })
            .then((response) => response.json())
            .then((data) => {
                dispatch(setChallenges(data));
            })
            .catch((er) => {
                throw er;
            });
    }
}

export default savedSlice.reducer;