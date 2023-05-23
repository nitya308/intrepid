import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import VideoItem from './videoItem';
import FeedChallenge from './feedChallenge';

const FeedStack = createStackNavigator();

function FeedNavigator() {
    return (
        <FeedStack.Navigator screenOptions={{ headerShown: false }}>
            <FeedStack.Screen name='Video Item' component={VideoItem} />
            <FeedStack.Screen name='Feed Challenge' component={FeedChallenge} />
        </FeedStack.Navigator>
        
    )
}

export default FeedNavigator;