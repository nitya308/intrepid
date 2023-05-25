import React from 'react';
import {
    StyleSheet, View, Text, Image,
} from 'react-native';
import { CameraRoll } from "@react-native-camera-roll/camera-roll";

const VideoAlbum = ({navigation}) => {
    return (
        <View>
            <Text style={styles.upload} onPress={() => {navigation.navigate('Submit Challenge')}}>
                This is the Video Album page. Click to move to the Submit challenge screen
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    upload: {
        color: '#ffffff',
        marginTop: 60,
    }
})

export default VideoAlbum;