import React from 'react';
import {
    StyleSheet, View, Text, Image,
} from 'react-native';
import UserRank from './userRank';
import LeaderboardHeader from './../../../assets/images/leaderboard.png'
import { ScrollView } from 'react-native-gesture-handler';
import PointsBox from '../pointsBox';
import { useSelector, useDispatch, useEffect } from "react-redux";
import {fetchTopUsers} from './leaderboardRequests';

const Leaderboard = (props) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTopUsers());
    }, []);

    const leaderBoardArray = useSelector((state) => state.leaderboard.topUsers);

    // const leaderboardArray = [
    //     {
    //         rank: 1,
    //         userObj: {
    //             username: 'JACKIECHAN',
    //             totalPoints: 1000,
    //             numChallengesSucceeded: 10,
    //         }
    //     },
    //     {
    //         rank: 2,
    //         userObj: {
    //             username: 'NINJATURTLE',
    //             totalPoints: 900,
    //             numChallengesSucceeded: 10,
    //         }
    //     },
    //     {
    //         rank: 3,
    //         userObj: {
    //             username: 'SNEAKYBOI',
    //             totalPoints: 800,
    //             numChallengesSucceeded: 9,
    //         }
    //     },
    //     {
    //         rank: 4,
    //         userObj: {
    //             username: 'IMBROKE',
    //             totalPoints: 740,
    //             numChallengesSucceeded: 8,
    //         }
    //     },
    //     {
    //         rank: 5,
    //         userObj: {
    //             username: 'MONEYBAGS',
    //             totalPoints: 700,
    //             numChallengesSucceeded: 7,
    //         }
    //     },
    //     {
    //         rank: 6,
    //         userObj: {
    //             username: 'BROKEASS',
    //             totalPoints: 690,
    //             numChallengesSucceeded: 7,
    //         }
    //     },
    //     {
    //         rank: 7,
    //         userObj: {
    //             username: 'FREELOADER',
    //             totalPoints: 650,
    //             numChallengesSucceeded: 8,
    //         }
    //     },
    //     {
    //         rank: 8,
    //         userObj: {
    //             username: 'GAMERGIRL',
    //             totalPoints: 600,
    //             numChallengesSucceeded: 6,
    //         }
    //     },
    //     {
    //         rank: 9,
    //         userObj: {
    //             username: 'HACKERMAN',
    //             totalPoints: 580,
    //             numChallengesSucceeded: 6,
    //         }
    //     },
    //     {
    //         rank: 10,
    //         userObj: {
    //             username: 'IMTHEBEST',
    //             totalPoints: 570,
    //             numChallengesSucceeded: 5,
    //         }
    //     },
    // ];

    return (
        <ScrollView style={styles.screen}>
            <PointsBox />
            <Image 
                source={LeaderboardHeader}
                style={styles.leaderboardHeader}
            />

            <View style={styles.leaderboardContainer}>
                {leaderboardArray.map((leaderboardObject, idx) => (
                    console.log("lb", leaderboardObject),
                    <UserRank key={idx} rank={leaderboardObject.rank + 1} userObj={leaderboardObject.userObj} />
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