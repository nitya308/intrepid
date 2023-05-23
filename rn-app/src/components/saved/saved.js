import React from 'react';
import {
    StyleSheet, View, Text, Image,
} from 'react-native';

const Saved = ({navigation}) => {
    return (
        <View>
            <Text
                onPress={() => {navigation.navigate('Challenge Info')}}
            >Saved Challenges</Text>
        </View>
    )
}

export default Saved;