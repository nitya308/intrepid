import {
    setSubmissions
} from './feedSlice';
import {
    setChallenges
} from '../saved/savedSlice';
import {
    getHeaders
} from '../../app/store';
import store from '../../app/store';

const ROOT_URL = 'https://project-api-nerve.onrender.com';
// const ROOT_URL = 'http://127.0.0.1:9090';

export function fetchSubmissions() {
    return async (dispatch) => {
        const headers = getHeaders();
        console.log("token", headers.headers.Authorization);
        fetch(`${ROOT_URL}/api/submissions`, headers)
            .then((response) => response.json())
            .then((data) => {
                dispatch(setSubmissions(data));
                console.log("data: ", data);
            })
            .catch((er) => {
                throw er;
            });
    };
}
export function fetchCarousel(challengeId) {
    return async (dispatch) => {
        const headers = getHeaders();
        fetch(`${ROOT_URL}/api/challenges/${challengeId}/submissions`, headers)
            .then((response) => response.json())
            .then((data) => {
                dispatch(setCarousel(data));
                console.log("data: ", data);
            })
            .catch((er) => {
                throw er;
            });
    };
}

export function voteForSubmission(submissionId, voteScore) {
    return async (dispatch) => {
        const headers = getHeaders();
        fetch(`${ROOT_URL}/api/submissions/${submissionId}/vote`, {
                method: 'POST',
                body: JSON.stringify({
                    voteScore
                }),
                headers: {
                    'Content-Type': 'application/json',
                    ...headers,
                },
            })
            .then((response) => response.json())
            .then((data) => {
                dispatch(setSubmissions(data));
                console.log("data: ", data);
            })
            .catch((er) => {
                throw er;
            });
    };
}
