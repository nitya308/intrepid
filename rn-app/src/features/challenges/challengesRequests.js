import { setAllChallenges, setTrendingChallenges, setCurrentChallenge } from './challengesSlice';
import { fetchSaved } from '../saved/savedRequests';
import { getHeaders } from '../../app/store';
import store from '../../app/store';
import { fetchUser } from '../user/userRequests';

const ROOT_URL = 'https://project-nerve-backend.onrender.com';

export function fetchChallenges(sortPoints) {

    return async (dispatch) => {
        fetch(`${ROOT_URL}/api/challenges${sortPoints ? '?sortBy=points' : ''}`)
            .then((response) => response.json())
            .then((data) => {
                dispatch(setAllChallenges(data));
            })
            .catch((er) => {
                throw er;
            });
    };
}

export function fetchTrendingChallenges() {
    return async (dispatch) => {
        const headers = getHeaders();
        fetch(`${ROOT_URL}/api/trending`, headers)
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
        const headers = getHeaders();
        fetch(`${ROOT_URL}/api/challenges/${id}`, headers)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                dispatch(setCurrentChallenge(data));
            })
            .catch((er) => {
                throw er;
            });
    };
}

export function createChallenge(challenge_obj, navigation) {
    return async (dispatch) => {
        const headers = getHeaders();
        fetch(`${ROOT_URL}/api/challenges`, {
            method: 'POST',
            body: JSON.stringify(challenge_obj),
            ...headers,
        })
            .then((response) => response.json())
            .then((data) => {
                dispatch(fetchChallenges());
                dispatch(fetchTrendingChallenges());
                dispatch(fetchUser());
                navigation.goBack();
            })
            .catch((er) => {
                throw er;
            });
    }
}

export function submitChallenge(challengeId, videoUrl) {
    // console.log(`inside the dispatch submitting to challengeId: ${challengeId}`);
    return async (dispatch) => {
        const headers = getHeaders();
        // console.log(`videoUrl: ${videoUrl}`);
        fetch(`${ROOT_URL}/api/challenges/${challengeId}/submit`, {
            method: 'POST',
            body: JSON.stringify({ videoUrl }),
            ...headers
        })
            .then((response) => response.json())
            .then((data) => {
                // console.log("VIDEO SUBMITTED", data);
                dispatch(fetchChallenge(data.challengeId));
            })
            .catch((er) => {
                throw er;
            });
    }
}

export function deleteChallenge(challengeId) {
    return async (dispatch) => {
        const headers = getHeaders();
        fetch(`${ROOT_URL}/api/challenges/${challengeId}`, {
            method: 'DELETE',
            ...headers
        })
            .then((data) => {
                dispatch(fetchChallenges());
                dispatch(fetchTrendingChallenges());
            })
            .catch((er) => {
                throw er;
            });
    }
}

export function saveChallenge(challengeId, savedScreen) {
    return async (dispatch) => {
        const headers = getHeaders();
        fetch(`${ROOT_URL}/api/saved/${challengeId}`, {
            method: 'POST',
            ...headers
        })
            .then((data) => {
                if (!savedScreen) {
                    const currentChallenge = store.getState().challenges.currentChallenge;
                    console.log(`currentChallenge: ${currentChallenge}`)
                    dispatch(setCurrentChallenge({ ...currentChallenge, isSaved: !currentChallenge.isSaved }));
                }
                // } else {
                //     console.log('here')
                //     const allChallenges = store.getState().challenges.allChallenges;
                //     console.log(`allChallenges: ${allChallenges}`)
                //     const challenge = allChallenges.find((challenge) => challenge.id === challengeId);
                //     dispatch(setAllChallenges( ...allChallenges, { ...challenge, isSaved: !challenge.isSaved } ));
                //     dispatch(fetchSaved());
                // }
                dispatch(fetchChallenge(challengeId));
                dispatch(fetchSaved());
            })
            .catch((er) => {
                throw er;
            });
    }
}
