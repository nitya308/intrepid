import React, {useState, useEffect} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    Platform
  } from 'react-native'

const VideoItem = ({index}) => {
    return (
        <View style={styles.video}>
            <Text>
                Video{index}
            </Text>
            <Button style={styles.tryButton} onPress={() => {navigation.navigate('Challenge Info')}}>
                Try
            </Button>
        </View>
    )
}


const styles = StyleSheet.create({
    video: {
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        height: "100%"
    },

    scrollContainer: {
        height: Dimensions.get('window').height,
        scrollEnabled: {scrollEnabled},
        overflow: "scroll",
        snapToInterval: Dimensions.get('window').height,
        snapToAlignment: "center",
        decelerationRate: Platform.OS === 'ios' ? 0 : 0.98,
    },
      
    scrollChildren: {
        height: Dimensions.get('window').height,
        snapToAlignment: "start",
        background: "#000",
        position: relative,
        border: "1px solid transparent"
    },
      
    video: {
        position: absolute,
        width: 100,
        height: 100,
        resizeMode: "cover",
    },

    videoContent: {
        padding: 10,
        position: relative,
        top: 85,
        color: "#fff"
    },

    tryButton: {
        position: fixed,
        left: 300,
        // display: flex,
        // justifyContent: space-between,
        // alignItems: center,
        padding: 20,
        color: "#000",
        background: "#fff",
        fontSize: 20,
      }
      
})
    
export default VideoItem;