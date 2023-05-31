import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MainTabBar from '../navigation/mainTabBar';
import EntryNavigator from '../entry/entryNavigator';
import { getToken } from '../app/utils.js';
import { authUser, authFailed } from '../features/user/userSlice';
import SplashScreen from '../entry/splashscreen';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getToken(authUser, authFailed, dispatch);
    }, []);

    const token = useSelector(state => state.user.token);
    const loading = useSelector(state => state.user.loading);
    
    if ( loading && !token ) {
        return <SplashScreen />
    }
    if (token) {
        console.log("token: ", token);
        return <MainTabBar />
    }
    return <EntryNavigator />
}

export default Home;