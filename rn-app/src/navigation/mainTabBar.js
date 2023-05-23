import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import Leaderboard from '../components/leaderboard/leaderboard';
import FeedNavigator from '../components/feed/feedNavigator';
import ChallengesNavigator from '../components/challenges/challengesNavigator';
import History from '../components/history/history';
import SavedNavigator from '../components/saved/savedNavigator';

const Tab = createBottomTabNavigator();

const MainTabBar = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Search"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        let iconName;

                        if (route.name === 'Leaderboard') {
                            iconName = 'info-circle';
                        } else if (route.name === 'Feed') {
                            iconName = 'search';
                        }

                        return <Ionicons name={iconName} size={26} color={focused ? '#58AADA' : 'grey'} />;
                    },
                    headerShown: false,
                })}
            >
                <Tab.Screen name="Leaderboard" component={Leaderboard} />
                <Tab.Screen name="Feed" component={FeedNavigator} />
                <Tab.Screen name="Challenges" component={ChallengesNavigator} />
                <Tab.Screen name="Saved" component={SavedNavigator} />
                <Tab.Screen name="History" component={History} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default MainTabBar;
