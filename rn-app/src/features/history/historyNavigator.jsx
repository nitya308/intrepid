import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import History from './history';
import ChallengeInfo from '../challenges/challengeInfo';

const HistoryStack = createStackNavigator();

function HistoryNavigator() {
    return (
        <HistoryStack.Navigator screenOptions={{ 
            headerShown: false,
            cardStyle: { backgroundColor: '#121212' }
        }}>
            <HistoryStack.Screen name='History Main' component={History} />
            <HistoryStack.Screen name='Challenge Info' component={ChallengeInfo} />
        </HistoryStack.Navigator>

    )
}

export default HistoryNavigator;