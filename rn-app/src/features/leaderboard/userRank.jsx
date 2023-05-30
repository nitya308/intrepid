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
      fontSize: 30,
      fontWeight: 500,
      color: 'rgb(201, 170, 232)',
      paddingTop: 11,
    },

    username: {
        color: '#ffffff',
        fontSize: 28,
        fontWeight: 700,
        width: 170,
        textAlign: 'center',
        paddingTop: 11,
        textShadowColor: 'rgba(100, 100, 100, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 5
    },

    challengesAndPoints: {
        alignItems: 'flex-end',
        rowGap: 5,
        paddingLeft: 10,
    },

    points: {
        color: '#ffffff',
        fontSize: 28,
        fontWeight: 700,
        fontStyle: 'italic',
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
        color: '#FFE27B',
        fontSize: 22

    }

})

export default UserRank;