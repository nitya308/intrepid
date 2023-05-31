import React from 'react';
import {
    StyleSheet, View, Text, Image,
} from 'react-native';
import UserRank from './userRank';
import LeaderboardHeader from './../../../assets/images/leaderboard.png'
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { fetchTopUsers } from './leaderboardRequests';

const Leaderboard = (props) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchTopUsers());
    }, []);
    const topUsers = useSelector((state) => state.leaderboard.topUsers) || [];

    return (
        <ScrollView style={styles.screen}>
            <Image 
                source={LeaderboardHeader}
                style={styles.leaderboardHeader}
            />

            <View style={styles.leaderboardContainer}>
                {topUsers.map((user, idx) => (
                    <UserRank key={idx} rank={idx + 1} userObj={user} />
                ))}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingHorizontal: 35,
        paddingTop: 55,
        backgroundColor: '#262626',
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
        // justifyContent: 'space-evenly',
        paddingVertical: 20,
        paddingHorizontal: 10,
        marginBottom: 20,
    },

    // leaderboardArray: {
    //     marginTop: 30,
    //     flexDirection: 'column',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     backgroundColor: '#262626',
    //     borderRadius: 15,
    //     // justifyContent: 'space-evenly',
    //     paddingVertical: 20,
    //     paddingHorizontal: 10,
    //     marginBottom: 20,
    // }
})

export default Leaderboard;

// import React from 'react';
// import {
//     StyleSheet, View, Text, Image,
// } from 'react-native';
// import UserRank from './userRank';
// import { FlatList } from 'react-native-gesture-handler';
// import { fetchTopUsers } from './leaderboardSlice';
// import { useSelector, useDispatch } from "react-redux";
// import { useEffect } from 'react';

// const Leaderboard = (props) => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(fetchTopUsers());
//   }, []);

//   c

// //   const ranking = props.topUsers.map((rank) => (
// //     <UserRank rank={rank} />
// //   ))

//   const ranking = useSelector((state) => state.leaderboard.topUsers);
  
//   return (

//     <FlatList style={styles.screen}>
//       <Text style={styles.title}>Leaderboard</Text>
//       <View nativeId='ranking' style={styles.ranking} >
//         {ranking.map(rank, userObj => (
//           <UserRank key={rank + 1} rank={rank + 1} userObj={userObj} />
//         ))}
//       </View>
//     </FlatList>
//     )
// }

// // function mapStateToProps(reduxState) {
// //   return {
// //     leaderboard: reduxState.leaderboard.topUsers,
// //   };
// // }



// export default Leaderboard;