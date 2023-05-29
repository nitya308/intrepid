import React from 'react';
import {
    StyleSheet, View, Text, Image,
} from 'react-native';


const UserRank = (props) => {

    const userObj = props.userObj;
    const rank = props.rank;

    // alternateStyle = (rank) => {
    //     if (rank % 2 === 0) {
    //         return styles.neonGreen;
    //     }
    //     else {
    //         return styles.neonWhite;
    //     }
    // }
    return (
        <View style={[styles.userContainer, styles.neonGreen]}>
            <Text style={styles.rank}>{rank}</Text>
            <Text style={styles.username}>{userObj.username}</Text>
            <View style={styles.challengesAndPoints}>
                <Text style={styles.points}>{userObj.totalPoints} PTS</Text>
                <Text style={styles.numChallenges}>{userObj.numChallengesSucceeded}</Text>
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
        fontSize: 40,
        color: '#ffffff',
        paddingTop: 9,
    },

    username: {
        color: '#ffffff',
        fontSize: 30,
        fontWeight: 700,
        width: 170,
        textAlign: 'center',
        paddingTop: 9,
    },

    challengesAndPoints: {
        alignItems: 'flex-end',
        rowGap: 5,
    },

    numChallenges: {
        color: '#ffffff',
        fontSize: 17,
    },

    points: {
        color: '#ffffff',
        fontSize: 25,
        fontWeight: 700,
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
        shadowColor: '#3BFF1C',
        backgroundColor: 'rgba(25, 102, 28, 0.10)'
    },

    numChallenges: {
        color: '#FFE27B',
        fontSize: 25
    }

})

export default UserRank;