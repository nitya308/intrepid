import { createSlice } from '@reduxjs/toolkit';
import { setToken } from '../../app/utils';

const ROOT_URL = 'https://project-api-nerve.onrender.com';
// const ROOT_URL = 'http://129.170.212.19:9090';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: '',
        email: '',
        points: 0,
        authenticated: false,
        token: '',
        loading: true,
    },
    reducers: {
        setUser: (state, action) => {
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.points = action.payload.points;
        },
        emptyUser: (state) => {
            state.username = '';
            state.email = '';
            state.points = 0;
        },
        authUser: (state, action) => {
            loading = false;
            state.authenticated = true;
            state.token = action.payload;
        },
        deauthUser: (state) => {
            state.authenticated = false;
            state.token = '';
        },
        authFailed: (state) => {
            state.authenticated = false;
            state.token = '';
            state.loading = false;
        }
    },
});

export const { setUser, emptyUser, authUser, deauthUser, authFailed } = userSlice.actions;

export function signinUser( email, password ) {
    return async (dispatch) => {
        fetch(`${ROOT_URL}/api/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
            .then((response) => response.json())
            .then((data) => {
                dispatch(setUser(data));
                setToken(data.token, authUser, dispatch);
            })
            .catch((er) => {
                throw er;
            });
    };
}

export function signupUser( username, email, password ) {
    return async (dispatch) => {
        fetch(`${ROOT_URL}/api/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                dispatch(setUser(data));
                setToken(data.token);
            })
            .catch((er) => {
                throw er;
            });
    };
}

export function signoutUser() {
    dispatch(emptyUser());
    setToken('');
}

export function fetchUsers() {
    return async (dispatch) => {
        api
            .get("/users")
            .then((response) => {
                dispatch(setItems(response.data));
            })
            .catch((er) => {
                throw er;
            });
    };
}

export function fetchUser(id) {
    return async (dispatch) => {
        api
            .get(`/users/${id}`)
            .then((response) => {
                dispatch(setUser(response.data));
            })
            .catch((er) => {
                dispatch(setError());
            });
    };
}

export default userSlice.reducer;