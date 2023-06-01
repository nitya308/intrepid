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

const ROOT_URL = 'https://project-nerve-backend.onrender.com';
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
    console.log("IN FEED REQUESTS", submissionId, voteScore);
    return async (dispatch) => {
        const headers = getHeaders();
        fetch(`${ROOT_URL}/api/submissions/${submissionId}/vote`, {
                method: 'POST',
                body: JSON.stringify({
                    voteScore
                }),
                ...headers
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

// export function submitChallenge(challengeId, videoUrl) {
//     console.log(`inside the dispatch submitting to challengeId: ${challengeId}`);
//     return async (dispatch) => {
//         const headers = getHeaders();
//         console.log(`videoUrl: ${videoUrl}`);
//         fetch(`${ROOT_URL}/api/challenges/${challengeId}/submit`, {
//             method: 'POST',
//             body: JSON.stringify({ videoUrl }),
//             ...headers
//         })
//             .then((response) => response.json())
//             .then((data) => {
//                 console.log("VIDEO SUBMITTED", data);
//                 dispatch(fetchChallenges());
//             })
//             .catch((er) => {
//                 throw er;
//             });
//     }
// }

