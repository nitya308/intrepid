import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Saved from './saved';
import ChallengeInfo from '../challenges/challengeInfo';

const SavedStack = createStackNavigator();

function SavedNavigator() {
    return (
        <SavedStack.Navigator screenOptions={{ headerShown: false }}>
            <SavedStack.Screen name='Saved Main' component={Saved} />
            <SavedStack.Screen name='Challenge Info' component={ChallengeInfo} />
        </SavedStack.Navigator>

    )
}

export default SavedNavigator;