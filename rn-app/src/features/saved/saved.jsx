import React, { useState, useCallback, useEffect } from 'react';
import {
    StyleSheet, View, Text, Image, FlatList, SafeAreaView, Pressable, RefreshControl, TouchableOpacity
} from 'react-native';
import SavedHeader from './../../../assets/images/saved-header.png';
import Bookmark from '../../../assets/icons/bookmark.png';
import BookmarkFilled from '../../../assets/icons/bookmark-filled.png';
import PointsBox from '../pointsBox';
import { fetchSaved } from './savedRequests';
import { useDispatch, useSelector } from 'react-redux';
import { saveChallenge } from '../challenges/challengesRequests';

const Saved = ({ navigation }) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchSaved());
    }, []);

    const savedChallenges = useSelector((state) => state.saved.challenges) || [];

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        dispatch(fetchSaved());
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    const SavedItem = ({ id, title, expiresIn, points }) => {
        const [challengedSaved, setChallengeSaved] = useState(true);

        return (
            <TouchableOpacity onPress={() => {
                navigation.navigate('Challenge Info', {challengeId: id})
                // navigation.dispatch(
                //     CommonActions.navigate({
                //         name: 'Challenges',
                //         params: {
                //             screen: 'Challenge Info',
                //             params: {
                //                 challengeId: id,
                //             },
                //         },
                //     })
                // );
            }}>
                <View style={styles.savedItem}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.expirationAndPointsAndBookmark}>
                        <Text style={styles.expiresAt}>Expires in {expiresIn}</Text>
                        <View style={styles.pointsAndBookmark}>
                            <Text style={styles.points}>{points} PTS</Text>
                            <Pressable onPress={() => { dispatch(saveChallenge(id, true)); setChallengeSaved(false) }}>
                                <Image
                                    style={styles.bookmark}
                                    source={challengedSaved ? BookmarkFilled : Bookmark}
                                />
                            </Pressable>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    };

    return (
        <View style={styles.screen}>
            <PointsBox />
            <Image
                source={SavedHeader}
                style={styles.savedHeader}
            />

            <SafeAreaView style={styles.savedContainer}>
                <FlatList
                    style={styles.savedList}
                    data={savedChallenges}
                    renderItem={({ item }) =>
                        <SavedItem
                            id={item.id}
                            title={item.title}
                            expiresIn={item.expiresIn}
                            points={item.points}
                        />
                    }
                    keyExtractor={item => item.id}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                            tintColor='#ffffff'
                        />
                    }
                />
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingHorizontal: 20,
        paddingTop: 55,
    },

    savedHeader: {
        width: 130,
        height: 45,
        marginTop: 10,
    },

    savedContainer: {
        marginTop: 20,
    },

    savedItem: {
        backgroundColor: '#262626',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginBottom: 20,
    },

    title: {
        color: '#ffffff',
        fontFamily: 'Groupe',
        fontSize: 24,
        letterSpacing: -2.5,
        width: 160,
        textAlign: 'center',
        // borderWidth: 1,
        // borderColor: '#ffffff',
    },

    expirationAndPointsAndBookmark: {
        alignItems: 'flex-end',
        rowGap: 5,
        // borderWidth: 1,
        // borderColor: '#ffffff',
    },

    expiresAt: {
        color: '#fff',
        textShadowColor: '#CCFF00',
        textShadowRadius: 4,
        fontFamily: 'Exo-Medium',
        fontSize: 17,
    },

    pointsAndBookmark: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 10,
    },

    points: {
        color: '#ffffff',
        fontFamily: 'Glitch-Goblin',
        fontSize: 30,
    },

    bookmark: {
        width: 30,
        height: 30,
    }
})

export default Saved;