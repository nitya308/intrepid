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
            <Text style={styles.username}>{userObj.username}</Text>
            <View style={styles.challengesAndPoints}>
                <Text style={styles.points}>{userObj.totalPoints} PTS</Text>
                <Text style={styles.numChallenges}>{userObj.numChallengesSucceeded} challenges</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    userContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginBottom: 20,
    },

    rank: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        fontSize: 35,
        fontWeight: 500,
        color: 'rgb(201, 170, 232)',
        paddingTop: '4%',
        paddingLeft: '3%',
        textShadowColor: '#C9AAE8',
        textShadowRadius: 10,
        fontFamily: 'Glitch-Goblin',
    },

    username: {
        color: '#ffffff',
        fontFamily: 'Groupe',
        fontSize: 30,
        letterSpacing: -2.5,
        width: 170,
        textAlign: 'center',
        paddingTop: '4%',
        textShadowColor: 'rgba(100, 100, 100, 0.75)',
        textShadowRadius: 5
    },

    challengesAndPoints: {
        alignItems: 'flex-end',
        rowGap: 5,
        paddingLeft: 10,
    },

    points: {
        color: '#ffffff',
        fontFamily: 'Glitch-Goblin',
        fontSize: 32,
    },

    neonGreen: {
        shadowOpacity: 1,
        borderColor: '#BFFFA8',
        borderWidth: 1.5,
        borderRadius: 2,
        shadowRadius: 15,
        shadowColor: '#3BFF1C',
        backgroundColor: 'rgba(25, 102, 28, 0.10)'
    },

    neonWhite: {
        shadowOpacity: 1,
        borderColor: '#ffffff',
        borderWidth: 1.5,
        borderRadius: 2,
        shadowRadius: 15,
        shadowColor: '#ffffff',
        backgroundColor: 'rgba(225, 225, 225, 0.09)'
    },

    numChallenges: {
        color: '#fff',
        textShadowColor: '#CCFF00',
        textShadowRadius: 4,
        fontFamily: 'Exo-Medium',
        fontSize: 20,
    }

})

export default UserRank;