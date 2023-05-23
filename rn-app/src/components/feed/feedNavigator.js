import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import VideoItem from './videoItem';
import ChallengeInfo from '../challenges/challengeInfo';

const FeedStack = createStackNavigator();

function FeedNavigator() {
    return (
        <FeedStack.Navigator screenOptions={{ headerShown: false }}>
            <FeedStack.Screen name='Video Item' component={VideoItem} />
            <FeedStack.Screen name='Challenge Info' component={ChallengeInfo} />
        </FeedStack.Navigator>
        
    )
}

export default FeedNavigator;