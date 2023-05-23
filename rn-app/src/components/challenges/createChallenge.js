import React from 'react';
import {
    StyleSheet, View, Text, Image,
} from 'react-native';

const CreateChallenge = ({navigation}) => {
    return (
        <View>
            <Text
                onPress={() => {navigation.navigate('Challenge Info')}}
            >Create Challenge</Text>
        </View>
    )
}

export default CreateChallenge;