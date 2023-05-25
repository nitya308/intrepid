import React, { useState, useCallback } from 'react';
import {
    StyleSheet, View, Text, Image, FlatList, SafeAreaView, Pressable, RefreshControl
} from 'react-native';
import SavedHeader from './../../../assets/images/saved-header.png';
import Bookmark from '../../../assets/icons/bookmark.png';
import BookmarkFilled from '../../../assets/icons/bookmark-filled.png';

const Saved = ({navigation}) => {

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    const savedData = [
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

    const SavedItem = ({ title, expiresAt, points }) => {
        const [challengedSaved, setChallengeSaved] = useState(true);

        return (
            <View style={styles.savedItem}>
                <Text style={styles.title}>{title}</Text>
                <View>
                    <Text style={styles.expiresAt}>Expires in 3 hours</Text>
                    <View>
                        <Text style={styles.points}>{points}</Text>
                        <Pressable onPress={() => {setChallengeSaved(!challengedSaved)}}>
                            <Image
                                style={styles.bookmark}
                                source={challengedSaved ? BookmarkFilled : Bookmark}
                            />
                        </Pressable>
                    </View>
                </View>
            </View>
        )
    };
    
    return (
        <View style={styles.screen}>
            <View style={styles.pointsContainer}>
                <Text style={styles.currentPoints}>50 pts</Text>
            </View>
            <Image 
                source={SavedHeader}
                style={styles.savedHeader}
            />

            <SafeAreaView style={styles.savedContainer}>
                <FlatList
                    style={styles.savedList}
                    data={savedData}
                    renderItem={({item}) => 
                        <SavedItem
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
            
            {/* <Text onPress={() => {navigation.navigate('Challenge Info')}}>
                Click on a saved challenge to see info about it
            </Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingHorizontal: 35,
        paddingTop: 55,
    },

    currentPoints: {
        color: '#99F9FF',
        borderWidth: 1,
        borderColor: '#7BF7FF',
        borderRadius: 2,
        alignSelf: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },

    savedHeader: {
        width: 150,
        height: 52,
        marginTop: 10,
    },

    savedContainer: {
    },

    savedList: {

    },

    savedItem: {

    },

    title: {
        color: '#ffffff',
    },

    expiresAt: {
        color: '#ffffff'
    },

    points: {
        color: '#ffffff',
    },

    bookmark: {
        width: 30,
        height: 30,
    }
})

export default Saved;