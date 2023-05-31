import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Feed from './feed';
import ChallengeInfo from '../challenges/challengeInfo';

const FeedStack = createStackNavigator();

function FeedNavigator() {

    return (
        <FeedStack.Navigator screenOptions={{ headerShown: false }}>
            <FeedStack.Screen name='Feed' component={Feed} />
            <FeedStack.Screen name='Feed Challenge Info' component={ChallengeInfo} />
        </FeedStack.Navigator>

    )
}

export default FeedNavigator;