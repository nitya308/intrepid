import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Challenges from './challenges';
import ChallengeInfo from './challengeInfo';

const ChallengesStack = createStackNavigator();

function ChallengesNavigator() {
    return (
        <ChallengesStack.Navigator screenOptions={{ headerShown: false }}>
            <ChallengesStack.Screen name='Challenges' component={Challenges} />
            <ChallengesStack.Screen name='Challenge Info' component={ChallengeInfo} />
        </ChallengesStack.Navigator>
        
    )
}

export default ChallengesNavigator;