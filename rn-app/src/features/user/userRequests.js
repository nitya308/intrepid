import { setUser, emptyUser, authUser, deauthUser, authFailed } from './userSlice';
import { setToken, getToken } from '../../app/utils';
import { getHeaders } from '../../app/store';

const ROOT_URL = 'https://project-nerve-backend.onrender.com';

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
                dispatch(authUser(data.token));
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
            .then((response) => response.json())
            .then((data) => {
                dispatch(setUser(data.newUser));
                dispatch(authUser(data.token));
                setToken(data.token);
            })
            .catch((er) => {
                throw er;
            });
    };
}

export function signoutUser() {
    return async (dispatch) => {
        dispatch(emptyUser());
        dispatch(deauthUser());
        setToken('');
    }
}

export function fetchUser() {
    return async (dispatch) => {
        const headers = getHeaders();
        fetch(`${ROOT_URL}/api/profile`, headers )
            .then((response) => response.json())
            .then((data) => {
                dispatch(setUser(data));
            })
            .catch((er) => {
                throw er;
            });
    };
}