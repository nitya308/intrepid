import React from 'react';
import {
    StyleSheet, View, Text, Image,
} from 'react-native';

const ChallengeInfo = ({navigation}) => {
    return (
        <View>
            <Text
                onPress={() => {navigation.navigate('Feed Challenge')}}
            >Challenge Info</Text>
        </View>
    )
}

export default ChallengeInfo;