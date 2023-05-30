import { createSlice } from '@reduxjs/toolkit';

const ROOT_URL = 'https://project-api-nerve.onrender.com';

export const challengesSlice = createSlice({
    name: 'challenges',
    initialState: {
        challenges: [],
        currentChallenge: null,
    },
    reducers: {
        setChallenges: (state, action) => {
            state.challenges = action.payload;
        },
        setCurrentChallenge: (state, action) => {
            state.currentChallenge = action.payload;
        },
    },
});

export const { setChallenges, setCurrentChallenge } = challengesSlice.actions;

export function fetchChallenges() {
    return async (dispatch) => {
        fetch(`${ROOT_URL}/api/challenges`)
            .then((response) => response.json())
            .then((data) => {
                dispatch(setChallenges(data));
            })
            .catch((er) => {
                console.log(er);
            });
    };
}

export function fetchChallenge(id) {
    return async (dispatch) => {
        fetch(`${ROOT_URL}/api/challenges/${id}`)
            .then((response) => response.json())
            .then((data) => {
                dispatch(setCurrentChallenge(data));
            })
            .catch((er) => {
                console.log(er);
            });
    };
}

export function createChallenge(challenge) {
    return async (dispatch) => {
        fetch(`${ROOT_URL}/api/challenges`, {
            method: 'POST',
            body: JSON.stringify(challenge),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                dispatch(fetchChallenges());
            })
            .catch((er) => {
                console.log(er);
            });
    }
}

export function submitChallenge(userId, videoUrl) {
    return async (dispatch) => {
        fetch(`${ROOT_URL}/api/users/${userId}/submissions`, {
            method: 'POST',
            body: JSON.stringify({ userId, videoUrl }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                dispatch(fetchChallenges());
            })
            .catch((er) => {
                console.log(er);
            });
    }
}

export default challengesSlice.reducer;