import React from 'react';
import { LogBox } from 'react-native';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import MainTabBar from './navigation/mainTabBar';

// disable really annoying in app warnings
LogBox.ignoreAllLogs();

const App = (props) => {
    return <MainTabBar />;
};

registerRootComponent(App);
