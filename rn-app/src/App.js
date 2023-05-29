import React, { useState } from 'react';
import { LogBox } from 'react-native';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import MainTabBar from './navigation/mainTabBar';
import EntryNavigator from './entry/entryNavigator';
import { Provider } from 'react-redux';
import store from './app/store';

// disable really annoying in app warnings
LogBox.ignoreAllLogs();

const App = (props) => {

    const [isSignedIn, setIsSignedIn] = useState(false);
    console.log(isSignedIn);

    return (
        <Provider store={store}>
            {isSignedIn ? <MainTabBar /> : <EntryNavigator />}
            {/* <MainTabBar /> */}
        </Provider>
    )
};

registerRootComponent(App);
