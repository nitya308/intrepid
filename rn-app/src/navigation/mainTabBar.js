import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import Leaderboard from '../features/leaderboard/leaderboard';
import ChallengesNavigator from '../features/challenges/challengesNavigator';
import History from '../features/history/history';
import SavedNavigator from '../features/saved/savedNavigator';
import HistoryNavigator from '../features/history/historyNavigator';
import Feed from '../features/feed/feed';

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
                <Tab.Screen name="Feed" options={{unmountOnBlur: true}} component={Feed} />
                <Tab.Screen name="Challenges" component={ChallengesNavigator} />
                <Tab.Screen name="Saved" component={SavedNavigator} />
                <Tab.Screen name="History" component={HistoryNavigator} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default MainTabBar;
