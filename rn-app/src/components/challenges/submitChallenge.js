import React from 'react';
import {
    StyleSheet, View, Text, Image,
} from 'react-native';

const SubmitChallenge = ({navigation}) => {
    return (
        <View>
            <Text onPress={() => {navigation.navigate('Challenge Info')}}>
                Page for submitting the challenge
            </Text>
        </View>
    )
}

export default SubmitChallenge;