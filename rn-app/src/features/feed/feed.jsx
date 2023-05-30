import React, {useRef} from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Dimensions } from 'react-native';
import Post from './post';
import Overlay from './overlay';
import {Video, ResizeMode} from 'expo-av';

const Feed=({navigation, route}) => {
    const mediaRefs = useRef([])
    const arr =  [
        {challengeId: "1", videoUrl: 'https://swerve-bucket.s3.amazonaws.com/04D29E3F-E8B5-41C4-A100-3BF798620659.mov'},
        {challengeId: "2", videoUrl: 'https://swerve-bucket.s3.amazonaws.com/07841723-081B-4896-B1CE-547D99961AF7.mov'},
        {challengeId: "3", videoUrl: 'https://swerve-bucket.s3.amazonaws.com/2F4688A4-F1CE-4518-826C-DFCCE16CFCCA.mov'},
        {challengeId: "4", videoUrl: 'https://swerve-bucket.s3.amazonaws.com/7FDB7F7C-5192-46CE-A018-15819F71F2E9.mov'},
        {challengeId: "5", videoUrl: 'https://swerve-bucket.s3.amazonaws.com/E2785B21-B749-4EE0-9BC9-4C491467DE16.mov'},
        {challengeId: "6", videoUrl: 'https://swerve-bucket.s3.amazonaws.com/ED6C3E8A-B28D-4F57-93B1-EC6B9F29913B.mov'}
    ] 

    const onViewableItemsChanged = useRef(({ changed }) => {
        console.log("nav", navigation);
        console.log('onChange', changed);
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
        navigation.navigate('Challenge Info',{challengeId: id})
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
            <FlatList
                data = {arr}
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
        top:79,
        color: 'white',
        fontSize: 24,
        zIndex: 1000,
    },
})

export default Feed;