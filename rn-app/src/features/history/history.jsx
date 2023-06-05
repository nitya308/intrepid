import React, { useState, useCallback, useEffect } from 'react';
import {
    StyleSheet, View, Text, Image, FlatList, SafeAreaView, Pressable, RefreshControl, TouchableOpacity
} from 'react-native';
import PointsBox from '../pointsBox';
import HistoryHeader from './../../../assets/images/history-header.png'
import SignOutButton from './../../../assets/images/sign-out-button.png'
import { useDispatch, useSelector } from 'react-redux';
import { fetchHistory } from './historyRequests';
import { signoutUser } from '../user/userRequests';

const History = ({navigation}) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchHistory());
    }, []);

    const history = useSelector((state) => state.history.submissions) || [];

    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        dispatch(fetchHistory());
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

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

        return (
            <TouchableOpacity onPress={() => {navigation.navigate('Challenge Info', {challengeId: challengeId})}}>
                <View style={styles.historyItem}>
                    <Text style={styles.title}>{!title ? null : title.toUpperCase()}</Text>
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
            <View style={styles.signOutAndPoints}>
                <TouchableOpacity
                    onPress={() =>  {dispatch(signoutUser()) }}
                >
                    <Image
                        source={SignOutButton}
                        style={styles.signOutButton}
                    />
                </TouchableOpacity>
                <View style={styles.pointsBoxContainer}>
                    <PointsBox />
                </View>
            </View>
            
            <Image 
                source={HistoryHeader}
                style={styles.historyHeader}
            />

            <SafeAreaView style={styles.historyContainer}>
                <FlatList
                    data={history}
                    renderItem={({item}) => 
                        <HistoryItem
                            challengeId={item.challengeId?.id}
                            title={item.challengeId?.title}
                            points={item.challengeId?.points}
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

    signOutAndPoints: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },

    signOutButton: {
        width: 105,
        height: 33.5,
    },

    pointsBoxContainer: {
        width: 71,
    },

    historyHeader: {
        width: 180,
        height: 46,
        marginTop: 10,
    },

    historyContainer: {
        marginTop: 20,
        paddingBottom: 90
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
        textDecorationColor: '#FF0201',
    }
})
export default History;