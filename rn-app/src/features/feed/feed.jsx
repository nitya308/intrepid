import React, {useEffect, useRef} from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Dimensions, Button, SafeAreaView } from 'react-native';
import Post from './post';
import Overlay from './overlay';
import {Video, ResizeMode} from 'expo-av';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSubmissions } from './feedRequests';

const Feed=({navigation, route}) => {
    const mediaRefs = useRef([])
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSubmissions());
        console.log("feed mounted");
    }, []);

    const arr = useSelector(state => state.feed.submissions);
    // filter out submissions that have userId as current user
    const userId = useSelector((state) => state.user.userId);
    const filteredArr = arr.filter((submission) => submission.userId !== userId);

    // console.log("IN FEED", arr);

    const onViewableItemsChanged = useRef(({ changed }) => {
        // console.log("nav", navigation);
        // console.log('onChange', changed);
        // console.log(changed.forEach);
        changed.forEach(element => {
            const cell = mediaRefs.current[element.key];
            console.log(cell);
            if (cell) {
                if (element.isViewable) {
                    
                    cell.play()
                } else {
                    cell.pause()
                }
            }

        });
    })

    const navigateToChallengeInfo = (id) => {
        navigation.navigate('Feed Challenge Info', {challengeId: id})
    }


    const renderVideoItem = ({item, index}) => {
        return (
            //subtract height of navbar so video isn't displayed behind it
            <View style={[{flex: 1, height: Dimensions.get('window').height - 79}]}>
                <Post item={item} toChallenge={navigateToChallengeInfo} ref={PostRef=> (mediaRefs.current[item.videoUrl]=PostRef)}/>
            </View>
        )
    }
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>FEED</Text>
            {/* <SafeAreaView>
                <Button
                    title="Go to Challenge Info"
                    onPress={() => console.log("arr", arr)}
                />
            </SafeAreaView> */}
            <FlatList
                data = {filteredArr}
                windowSize={4}
                maxToRenderPerBatch={2}
                removeClippedSubviews={true}
                viewabilityConfig={{
                    itemVisiblePercentThreshold: 0
                }}
                renderItem = {renderVideoItem}
                pagingEnabled
                keyExtractor={item => item.videoUrl}
                decelerationRate={'normal'}
                onViewableItemsChanged={onViewableItemsChanged.current}
            />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    title: {
        position: 'absolute',
        width: '100%',
        textAlign: 'center',
        top:65,
        color: 'white',
        fontSize: 24,
        zIndex: 1000,
        fontFamily: 'Glitch-Goblin'
    },
})

export default Feed;