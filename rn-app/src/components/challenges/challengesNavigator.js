import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Challenges from './challenges';
import CreateChallenge from './createChallenge';
import ChallengeInfo from './challengeInfo';
import VideoAlbum from './videoAlbum';
import SubmitChallenge from './submitChallenge';

const ChallengesStack = createStackNavigator();

function ChallengesNavigator() {
    return (
        <ChallengesStack.Navigator screenOptions={{ headerShown: false }}>
            <ChallengesStack.Screen name='Challenges Main' component={Challenges} />
            <ChallengesStack.Screen name='Create Challenge' component={CreateChallenge} />
            <ChallengesStack.Screen name='Challenge Info' component={ChallengeInfo} />
            <ChallengesStack.Screen name='Video Album' component={VideoAlbum} />
            <ChallengesStack.Screen name='Submit Challenge' component={SubmitChallenge} />
        </ChallengesStack.Navigator>
        
    )
}

export default ChallengesNavigator;