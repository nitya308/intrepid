import React from 'react';
import {
    StyleSheet, View, Text, Image,
} from 'react-native';
import UserRank from './userRank';
import { FlatList } from 'react-native-gesture-handler';
import { fetchTopUsers } from './leaderboardSlice';
import { useSelector, useDispatch } from "react-redux";

const Leaderboard = (props) => {
  useEffect(() => {
    dispatch(fetchTopUsers());
  }, []);

  const useDispatch = useDispatch();

//   const ranking = props.topUsers.map((rank) => (
//     <UserRank rank={rank} />
//   ))

  const ranking = useSelector((state) => state.leaderboard.topUsers);
  
  return (

    <FlatList style={styles.screen}>
      <Text style={styles.title}>Leaderboard</Text>
      <View nativeId='ranking' style={styles.ranking} >
        {ranking.map(rank, userObj => (
          <UserRank key={rank + 1} rank={rank + 1} userObj={userObj} />
        ))}
      </View>
    </FlatList>
    )
}

// function mapStateToProps(reduxState) {
//   return {
//     leaderboard: reduxState.leaderboard.topUsers,
//   };
// }

const styles = StyleSheet.create({
    screen: {
        paddingHorizontal: 35,
        paddingTop: 55,
    },

    title: {
        color: '#ffffff',
        fontSize: 40,
        fontWeight: 700,
        marginTop: 30,
    },

    ranking: {
        marginTop: 30,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 100,
    }
})

export default Leaderboard;