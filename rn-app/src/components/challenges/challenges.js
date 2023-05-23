import React from 'react';
import {
    StyleSheet, View, Text, Image,
} from 'react-native';
import TrendingItem from './trendingItem';
import ChallengeItem from './challengeItem';

const Challenges = ({navigation}) => {
    return (
        <View>
            <Text>
                Main page for seeing trending and all challenges
            </Text>
            <Text onPress={() => {navigation.navigate('Create Challenge')}}>
                Create Challenge Button
            </Text>
            <Text onPress={() => {navigation.navigate('Challenge Info')}}>
                Click challenge to see challenge info
            </Text>
        </View>
    )
}

export default Challenges;