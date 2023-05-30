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
        

export const getToken = async (authUser, authFailed, dispatch) => {
    console.log(authFailed);
    await SecureStore.getItemAsync('token')
        .then((token) => {
            if (!token) {
                dispatch(authFailed());
                return;
            }
            dispatch(authUser(token));
        })
        .catch((er) => {
            dispatch(authFailed());
            throw er;
        }
    );
}