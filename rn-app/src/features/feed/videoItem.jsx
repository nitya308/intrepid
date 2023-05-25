import React from 'react';
import {
    StyleSheet, View, Text, Image,
} from 'react-native';

const VideoItem = ({navigation}) => {
    return (
        <View>
            <Text>
                Video on the feed
            </Text>
            <Text onPress={() => {navigation.navigate('Challenge Info')}}>
                Try Button
            </Text>
        </View>
    )
}

export default VideoItem;