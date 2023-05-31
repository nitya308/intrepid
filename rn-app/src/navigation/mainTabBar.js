import React, { useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import Leaderboard from '../features/leaderboard/leaderboard';
import ChallengesNavigator from '../features/challenges/challengesNavigator';
import History from '../features/history/history';
import SavedNavigator from '../features/saved/savedNavigator';
import HistoryNavigator from '../features/history/historyNavigator';
import FeedNavigator from '../features/feed/feedNavigator';

const Tab = createBottomTabNavigator();

const NavigationContainerTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#121212',
    },
};

const MainTabBar = () => {

    return (
        <NavigationContainer theme={NavigationContainerTheme}>
            <Tab.Navigator
                initialRouteName="Challenges"
                screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: '#121212',
                        borderTopColor: '#C9AAE8',
                        shadowColor: "#C9AAE8",
                        shadowOpacity: 1,
                        shadowRadius: 3,
                        shadowOffset: {
                            height: 0,
                            width: 0,
                        },
                        paddingTop: 3,
                    },
                    tabBarLabel: ({ focused }) => {
                        return (
                            <Text style={focused ? styles.tabBarLabelFocused : styles.tabBarLabel}>{route.name}</Text>
                        )
                    },
                    tabBarIcon: ({ focused }) => {
                        let iconName;

                        if (route.name === 'Leaderboard') {
                            iconName = 'trophy';
                        } else if (route.name === 'Feed') {
                            iconName = 'video-camera';
                        } else if (route.name === 'Challenges') {
                            iconName = 'flag';
                        } else if (route.name === 'Saved') {
                            iconName = 'bookmark';
                        } else if (route.name === 'History') {
                            iconName = 'history';
                        }

                        return <Ionicons
                            name={iconName}
                            size={22}
                            color={focused ? '#C9AAE8' : 'grey'}
                            style={focused ? styles.tabBarIcon : null}
                        />;
                    },
                })}
            >
                <Tab.Screen name="Leaderboard" component={Leaderboard} />
                <Tab.Screen name="Feed" options={{unmountOnBlur: true}} component={FeedNavigator} />
                <Tab.Screen name="Challenges" component={ChallengesNavigator} />
                <Tab.Screen name="Saved" component={SavedNavigator} />
                <Tab.Screen name="History" component={HistoryNavigator} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    tabBarIcon: {
        shadowColor: "#C9AAE8",
        shadowOpacity: 1,
        shadowRadius: 4,
        shadowOffset: {
            height: 0,
            width: 0,
        },
    },

    tabBarLabel: {
        color: 'grey',
        fontFamily: 'Exo-Regular',
        fontSize: 12,
    },

    tabBarLabelFocused: {
        color: '#C9AAE8',
        fontFamily: 'Exo-Regular',
        fontSize: 12,
        textShadowColor: '#C9AAE8',
        textShadowRadius: 4,
    },
})

export default MainTabBar;
