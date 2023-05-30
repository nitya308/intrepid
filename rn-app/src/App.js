import React, { useState } from 'react';
import { LogBox, View } from 'react-native';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import Home from './components/Home';
import { Provider, useSelector } from 'react-redux';
import store from './app/store';

// disable really annoying in app warnings
LogBox.ignoreAllLogs();

const App = (props) => {
    return (
        <Provider store={store}>
            <Home />
        </Provider>
    )
};

registerRootComponent(App);
