import React from 'react';
import {
    StyleSheet, View, Text, Image,
} from 'react-native';

const UserRank = (props) => {
//   const { rank, userObj } = props;
  const userObj = [
    {username: 'user1', totalPoints: 100, numChallengesSucceeded: 10},
  ]
  const rank = 1;


  return (
    <View>
      <Text style={styles.rank}>{rank}</Text>
      <Text style={styles.username}>{userObj.username}</Text>
      <Text style={styles.totalPoints}>{userObj.totalPoints}</Text>
      <Text style={styles.numChallengesSucceeded}>{userObj.numChallengesSucceeded}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: 40,
  },

  username: {
  },
})

export default UserRank;