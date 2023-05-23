import React from 'react';
import {
    StyleSheet, View, Text, Image,
} from 'react-native';

const Challenges = ({navigation}) => {
    return (
        <View>
            <Text
                onPress={() => {navigation.navigate('Challenge Info')}}
            >Challenges</Text>
        </View>
    )
}

export default Challenges;