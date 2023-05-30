import * as SecureStore from 'expo-secure-store'

export const setToken = async (token, authUser, dispatch) => {
    await SecureStore.setItemAsync('token',token)
        .then(() => {
            dispatch(authUser(token));
        })
        .catch((er) => {
            throw er;
        }
    );
};
        

export const getToken = async (authUser, dispatch) => {
    await SecureStore.getItemAsync('token')
        .then((token) => {
            dispatch(authUser(token));
        })
        .catch((er) => {
            throw er;
        }
    );
}

export const getReqHeaders = () => {
    const token = getToken();
    return ({
        headers: {
            authorization: token,
        },
    });
};