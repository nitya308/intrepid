import React from 'react';
import {
    StyleSheet, View, Text, Image,
} from 'react-native';
import UserRank from './userRank';
import LeaderboardHeader from './../../../assets/images/leaderboard.png'
import { ScrollView } from 'react-native-gesture-handler';

const Leaderboard = (props) => {

    const leaderboardArray = [
        {
            rank: 1,
            userObj: {
                username: 'user1',
                totalPoints: 1000,
                numChallengesSucceeded: 10,
            }
        },
        {
            rank: 2,
            userObj: {
                username: 'user2',
                totalPoints: 900,
                numChallengesSucceeded: 10,
            }
        },
        {
            rank: 3,
            userObj: {
                username: 'user3',
                totalPoints: 800,
                numChallengesSucceeded: 9,
            }
        },
        {
            rank: 4,
            userObj: {
                username: 'user4',
                totalPoints: 740,
                numChallengesSucceeded: 8,
            }
        },
        {
            rank: 5,
            userObj: {
                username: 'user5',
                totalPoints: 700,
                numChallengesSucceeded: 7,
            }
        },
        {
            rank: 6,
            userObj: {
                username: 'user6',
                totalPoints: 690,
                numChallengesSucceeded: 7,
            }
        },
        {
            rank: 7,
            userObj: {
                username: 'user7',
                totalPoints: 650,
                numChallengesSucceeded: 8,
            }
        },
        {
            rank: 8,
            userObj: {
                username: 'user8',
                totalPoints: 600,
                numChallengesSucceeded: 6,
            }
        },
        {
            rank: 9,
            userObj: {
                username: 'user9',
                totalPoints: 580,
                numChallengesSucceeded: 6,
            }
        },
        {
            rank: 10,
            userObj: {
                username: 'user10',
                totalPoints: 570,
                numChallengesSucceeded: 5,
            }
        },
    ];

    return (
        <ScrollView style={styles.screen}>
            <Image 
                source={LeaderboardHeader}
                style={styles.leaderboardHeader}
            />

            <View style={styles.leaderboardContainer}>
                {leaderboardArray.map((leaderboardObject, idx) => (
                    console.log("lb", leaderboardObject),
                    <UserRank key={idx} rank={leaderboardObject.rank} userObj={leaderboardObject.userObj} />
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