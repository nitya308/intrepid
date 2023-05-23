import React from 'react';
import {
    StyleSheet, View, Text, Image,
} from 'react-native';

const VideoAlbum = ({navigation}) => {
    return (
        <View>
            <Text onPress={() => {navigation.navigate('Submit Challenge')}}>
                Video Album
            </Text>
        </View>
    )
}

export default VideoAlbum;