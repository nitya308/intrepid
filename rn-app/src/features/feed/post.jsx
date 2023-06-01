import {ResizeMode, Video} from 'expo-av';
import React, {forwardRef, useRef, useEffect, useImperativeHandle} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Overlay from './overlay';

const Post = forwardRef(({item, toChallenge}, parentRef) => {
    const ref =  useRef(null);
    useImperativeHandle(parentRef, () => ({
        play,
        pause,
        unload
    }));

    useEffect(() => {
        return () => unload();
    }, [])

    const play = async() => {
        if(ref.current == null) {
            return;
        }

        const status = await ref.current.getStatusAsync();
        if(status?.isPlaying) {
            return;
        }

        try {
            await ref.current.playAsync();
        }

        catch(e) {
            console.log(e);
        }
    }

    const pause = async() => {
        if(ref.current == null) {
            return;
        }

        const status = await ref.current.getStatusAsync();
        if(!status?.isPlaying) {
            return;
        }

        try {
            await ref.current.pauseAsync();
        }
        
        catch(e) {
            console.log(e);
        }
    }

    const unload = async() => {
        if(ref.current == null) {
            return;
        }

        try {
            await ref.current.unloadAsync();
        }
        
        catch(e) {
            console.log(e);
        }
    }

    return (
        <>
            <Overlay item={item} toChallenge={toChallenge}/>
            <Video
                ref={ref}
                source={{uri: item.videoUrl}}
                // source={{uri: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/1080/Big_Buck_Bunny_1080_10s_1MB.mp4'}}
                resizeMode={ResizeMode.COVER}
                // shouldPlay
                isLooping
                style={styles.container}
                
            />
        </>
    )
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default Post;