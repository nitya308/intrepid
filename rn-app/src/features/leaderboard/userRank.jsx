import React from 'react';
import {
    StyleSheet, View, Text, Image,
} from 'react-native';


const UserRank = (props) => {

    const userObj = props.userObj;
    const rank = props.rank;

    return (
        <View style={[styles.userContainer, rank % 2 ? styles.neonGreen : styles.neonWhite]}>
            <Text style={styles.rank}>{rank}</Text>
            <Text style={styles.username}>{!userObj.username ? null : userObj.username.toUpperCase()}</Text>
            <View style={styles.challengesAndPoints}>
                <Text style={styles.points}>{userObj.currentPoints} PTS</Text>
                <Text style={styles.numChallenges}>{userObj.numChallengesSucceeded} succeeded</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    userContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 12,
    },

    rank: {
        fontFamily: 'Glitch-Goblin',
        fontSize: 35,
        color: 'rgb(201, 170, 232)',
        alignSelf: 'center',
        textShadowColor: '#C9AAE8',
        textShadowRadius: 7,
        width: '12%',
        paddingLeft: '2%',
    },

    username: {
        color: '#ffffff',
        fontSize: 25,
        letterSpacing: -2.5,
        alignSelf: 'center',
        fontFamily: 'Groupe',
        textShadowColor: '#ffffff',
        textShadowRadius: 5,
        width: '30%',
    },

    challengesAndPoints: {
        alignItems: 'flex-end',
        rowGap: 5,
    },

    points: {
        color: '#ffffff',
        fontFamily: 'Glitch-Goblin',
        fontSize: 32,
    },

    neonGreen: {
        shadowOpacity: 1,
        shadowRadius: 7,
        shadowColor: '#3BFF1C',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        borderColor: '#BFFFA8',
        borderWidth: 1.5,
        borderRadius: 4,
        backgroundColor: '#142D15',
    },

    neonWhite: {
        shadowOpacity: 1,
        shadowRadius: 7,
        shadowColor: '#ffffff',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        borderColor: '#ffffff',
        borderWidth: 1.5,
        borderRadius: 4,
        backgroundColor: '#252528',
    },

    numChallenges: {
        color: '#fff',
        fontFamily: 'Exo-Medium',
        fontSize: 20,
        textShadowColor: '#CCFF00',
        textShadowRadius: 4,
    }

})

export default UserRank;