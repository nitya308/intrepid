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
            challengeId: '1',
            title: 'DYE YOUR HAIR PINK',
            points: 75,
            success: 1,
            isVotingEnded: false,
        },

        {
            challengeId: '2',
            title: 'GET A DRAGON TATTOO',
            points: 200,
            success: 1,
            isVotingEnded: true,
        },

        {
            challengeId: '3',
            title: 'FLEE THE COUNTRY',
            points: 180,
            success: -1,
            isVotingEnded: true,
        },

    ];

    const SubmissionStatus = ({ success, isVotingEnded }) => {
        if (!isVotingEnded) {
            return <Text style={styles.votingStatus}>VOTING</Text>
        }
        if (isVotingEnded && success > 0) {
            return <Text style={styles.successStatus}>SUCCESS</Text>
        }
        if (isVotingEnded && success < 0) {
            return <Text style={styles.failStatus}>FAIL</Text>
        }
    }

    const HistoryItem = ({ challengeId, title, points, success, isVotingEnded }) => {
        const [challengedSaved, setChallengeSaved] = useState(true);

        return (
            <TouchableOpacity onPress={() => {navigation.navigate('Challenge Info', {paramKey: challengeId,})}}>
                <View style={styles.historyItem}>
                    <Text style={styles.title}>{title}</Text>
                    <View style={styles.expirationAndPoints}>
                        <SubmissionStatus success={success} isVotingEnded={isVotingEnded}/>
                        <Text style={[styles.points, isVotingEnded && success < 0 ? styles.pointsStrikethrough : null]}>{points} PTS</Text>
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
                        <HistoryItem
                            challengeId={item.challengeId}
                            title={item.title}
                            points={item.points}
                            success={item.success}
                            isVotingEnded={item.isVotingEnded}
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

    historyItem: {
        backgroundColor: '#262626',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingVertical: 20,
        marginBottom: 20,
    },

    title: {
        color: '#ffffff',
        fontFamily: 'Groupe',
        fontSize: 24,
        letterSpacing: -2.5,
        width: 160,
        textAlign: 'center',
    },

    expirationAndPoints: {
        alignItems: 'flex-end',
        rowGap: 5,
    },

    votingStatus: {
        color: '#FFF7DA',
        textShadowColor: '#FFE27B',
        textShadowRadius: 4,
        fontFamily: 'Exo-Medium',
        fontSize: 17,
    },

    successStatus: {
        color: '#02EDFE',
        textShadowColor: '#02EDFE',
        textShadowRadius: 4,
        fontFamily: 'Exo-Medium',
        fontSize: 17,
    },

    failStatus: {
        color: '#FF6867',
        textShadowColor: '#FF6867',
        textShadowRadius: 4,
        fontFamily: 'Exo-Medium',
        fontSize: 17,
    },

    points: {
        color: '#ffffff',
        fontFamily: 'Glitch-Goblin',
        fontSize: 30,
    },

    pointsStrikethrough: {
        textDecorationLine: 'line-through',
        textDecorationColor: '#FF6867',
    }
})
export default History;