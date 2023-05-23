import React from 'react';
import {
    StyleSheet, View, Text, Image,
} from 'react-native';
import SavedItem from './savedItem';

const Saved = ({navigation}) => {
    return (
        <View>
            <Text>
                Saved Challenges Page
            </Text>
            <Text onPress={() => {navigation.navigate('Challenge Info')}}>
                Click on a saved challenge to see info about it
            </Text>
        </View>
    )
}

export default Saved;