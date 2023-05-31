import React, { useEffect } from 'react';
import {
    StyleSheet, View, Text, Image,
} from 'react-native';
import UserRank from './userRank';
import LeaderboardHeader from './../../../assets/images/leaderboard.png'
import { ScrollView } from 'react-native-gesture-handler';
import PointsBox from '../pointsBox';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTopUsers } from './leaderboardRequests';

const Leaderboard = (props) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTopUsers());
    }, []);
    const topUsers = useSelector((state) => state.leaderboard.topUsers) || [];

    return (
        <ScrollView style={styles.screen}>
            <PointsBox />
            <Image 
                source={LeaderboardHeader}
                style={styles.leaderboardHeader}
            />

            <View style={styles.leaderboardContainer}>
                {topUsers.map((user, idx) => (
                    <UserRank key={idx} rank={idx} userObj={user} />
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingHorizontal: 20,
        paddingTop: 55,
        backgroundColor: '#121212',
    },

    leaderboardHeader: {
        width: 285,
        height: 45,
        marginTop: 10,
    },

    leaderboardContainer: {
        marginTop: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
})

export default Leaderboard;