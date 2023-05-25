import React, { useState, useCallback } from 'react';
import {
    StyleSheet, View, Text, Image, FlatList, SafeAreaView, Pressable, RefreshControl, TouchableOpacity
} from 'react-native';
import PointsBox from '../pointsBox';
import HistoryHeader from './../../../assets/images/history-header.png'
import Bookmark from '../../../assets/icons/bookmark.png';
import BookmarkFilled from '../../../assets/icons/bookmark-filled.png';

const History = ({navigation}) => {

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    const historyData = [
        {
            id: '1',
            title: 'DYE YOUR HAIR PINK',
            expiresAt: Date.now + (7 * 24 * 60 * 60 * 1000),
            points: 75,
        },

        {
            id: '2',
            title: 'GET A DRAGON TATTOO',
            expiresAt: Date.now + (7 * 24 * 60 * 60 * 1000),
            points: 200,
        },

    ];

    const SavedItem = ({ id, title, expiresAt, points }) => {
        const [challengedSaved, setChallengeSaved] = useState(true);

        return (
            <TouchableOpacity onPress={() => {navigation.navigate('Challenge Info', {paramKey: id,})}}>
                <View style={styles.savedItem}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.expirationAndPoints}>
                        <Text style={styles.expiresAt}>Expires in 3 hours</Text>
                        <Text style={styles.points}>{points} PTS</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    };

    return (
        <View style={styles.screen}>
            <PointsBox />
            
            <Image 
                source={HistoryHeader}
                style={styles.historyHeader}
            />

            <SafeAreaView style={styles.savedContainer}>
                <FlatList
                    style={styles.savedList}
                    data={historyData}
                    renderItem={({item}) => 
                        <SavedItem
                            id={item.id}
                            title={item.title}
                            expiresAt={item.expiresAt}
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
        paddingHorizontal: 30,
        paddingTop: 55,
    },

    historyHeader: {
        width: 180,
        height: 46,
        marginTop: 10,
    },

    savedContainer: {
        marginTop: 20,
    },

    savedList: {
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
        fontSize: 22,
        fontWeight: 700,
        width: 170,
        textAlign: 'center',
    },

    expirationAndPoints: {
        alignItems: 'flex-end',
    },

    expiresAt: {
        color: '#ffffff',
        fontSize: 17,
    },

    points: {
        color: '#ffffff',
        fontSize: 25,
        fontWeight: 700,
    },
})
export default History;