import React from 'react';
import { LogBox } from 'react-native';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import MainTabBar from './navigation/mainTabBar';
import { Provider } from 'react-redux';
import store from './app/store';

// disable really annoying in app warnings
LogBox.ignoreAllLogs();

const App = (props) => {
    return (
        <Provider store={store}>
            <MainTabBar />
        </Provider>
    )
};

registerRootComponent(App);
