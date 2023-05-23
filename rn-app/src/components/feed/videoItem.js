import React from 'react';
import {
    StyleSheet, View, Text, Image,
} from 'react-native';

const VideoItem = ({navigation}) => {
    return (
        <View>
            <Text
                onPress={() => {navigation.navigate('Feed Challenge')}}
            >Video Item</Text>
        </View>
    )
}

export default VideoItem;