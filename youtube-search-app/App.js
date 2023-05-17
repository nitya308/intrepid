import React from 'react';
import { LogBox } from 'react-native';
import MainTabBar from './navigation/mainTabBar';

// disable really annoying in app warnings
LogBox.ignoreAllLogs();

const App = (props) => {
    return <MainTabBar />;
};

export default App;
