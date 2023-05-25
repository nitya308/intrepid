import React, {useState, useEffect} from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
import VideoItem from './videoItem';
import ChallengeInfo from '../challenges/challengeInfo';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    Platform
  } from 'react-native'

  const FeedNavigator = () => {
    const [videos, setVideos] = useState([]);

    const getVideos = (length) => {
      let newVideos=Array.from(Array(length).keys());
      setVideos((oldVideos) => [...oldVideos, ...newVideos]);
    };

    useEffect(() => {
      getVideos(3);
    }, []);

    return (
      <View style={styles.scrollContainer}>
        <ScrollView>
          {videos.length > 0 ? (
            <>
              {videos.map((video, id) => (
              <VideoItem key={id} index={id + 1} />
              ))}
            </>
          ) : (
            <>
              <h1>Loading...</h1>
            </>
          )}
        </ScrollView>
      </View>
    );
}



// const FeedStack = createStackNavigator();

// function FeedNavigator() {
//     return (
//         <FeedStack.Navigator screenOptions={{ headerShown: false }}>
//             <FeedStack.Screen name='Video Item' component={VideoItem} />
//             <FeedStack.Screen name='Challenge Info' component={ChallengeInfo} />
//         </FeedStack.Navigator>

//     )
// }

export default FeedNavigator;