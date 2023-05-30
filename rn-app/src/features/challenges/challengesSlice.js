import { createSlice } from '@reduxjs/toolkit';
import { getToken } from '../../app/utils';

const ROOT_URL = 'https://project-api-nerve.onrender.com';

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

export function fetchChallenges() {
    return async (dispatch) => {
        fetch(`${ROOT_URL}/api/challenges`)
            .then((response) => response.json())
            .then((data) => {
                dispatch(setAllChallenges(data));
            })
            .catch((er) => {
                throw er;
            });
    };
}

export function fetchTrendingChallenges(headers) {
    return async (dispatch) => {
        fetch(`${ROOT_URL}/api/challenges/trending`, {method: 'GET', ...headers})
            .then((response) => response.json())
            .then((data) => {
                dispatch(setTrendingChallenges(data));
            })
            .catch((er) => {
                throw er;
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
                throw er;
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
                throw er;
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
                throw er;
            });
    }
}

export default challengesSlice.reducer;