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
             <Overlay post={item} toChallenge={toChallenge}/>
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

{/* <Text style={styles.expiration}>{challenge.expiration}</Text>
<TouchableOpacity>
    {/* <Image
        source={tryButton}
        style={styles.tryButton}
        onPress={() => {
            toChallenge(post.challengeId)
            console.log('TRY button pressed')
            }}
    /> */}
// </TouchableOpacity> */}

// bottomText: {
//     flex: 1,
// },

// description: {
//     flex: 1
// },

// tryButton: {
//     width: 90,
//     height: 40,
//     marginLeft: 330,
//     marginTop: 750,
// },

// challengeTitle: {
//     color: 'white',
//     fontSize: 24,
//     marginLeft: 'auto',
// },

// expiration: {
//     color: 'yellow',
//     fontSize: 10,
// }