import React from 'react';
import {
    StyleSheet, View, Text, Image,
} from 'react-native';
import UserRank from './userRank';
import LeaderboardHeader from './../../../assets/images/leaderboard.png'
import { ScrollView } from 'react-native-gesture-handler';
import PointsBox from '../pointsBox';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { fetchTopUsers } from '../leaderboard/leaderboardRequests'

const Leaderboard = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTopUsers());
    }, []);


    const leaderboardArray = useSelector((state) => state.leaderboard.topUsers);
    
    return (
        <ScrollView style={styles.screen}>
            <PointsBox />
            <Image 
                source={LeaderboardHeader}
                style={styles.leaderboardHeader}
            />

            <View style={styles.leaderboardContainer}>
                {leaderboardArray.length>0 && leaderboardArray.map((leaderboardObject, idx) => (
                    <UserRank key={idx} rank={idx + 1} userObj={leaderboardObject} />
                ))}

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingHorizontal: 20,
        paddingTop: 57,
        backgroundColor: '#121212',
    },

    leaderboardHeader: {
        width: 285,
        height: 45,
        marginTop: 10,
    },

    leaderboardContainer: {
        marginTop: 20,
        paddingHorizontal: 10,
        flexDirection: 'column',
        rowGap: 20,
        paddingBottom: 90
    },
})

export default Leaderboard;