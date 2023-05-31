import { setUser, emptyUser, authUser, deauthUser, authFailed } from './userSlice';
import { setToken } from '../../app/utils';
import { getHeaders } from '../../app/store';

const ROOT_URL = 'https://project-api-nerve.onrender.com';

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
    return async (dispatch) => {

        dispatch(emptyUser());
        setToken('');
    }
}

export function fetchUser() {
    return async (dispatch) => {
        const headers = getHeaders();
        fetch(`${ROOT_URL}/api/profile`, headers )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                dispatch(setUser(data));
            })
            .catch((er) => {
                throw er;
            });
    };
}