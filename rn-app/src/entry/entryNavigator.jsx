import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Entry from './entry';
import Signup from './signup';
import Login from './login';
import Onboarding from './onboarding';

const EntryStack = createStackNavigator();

const EntryNavigator = () => {
    return (
        <NavigationContainer>
            <EntryStack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: '#121212' }
            }}
            >
                <EntryStack.Screen name='Onboarding' component={Onboarding} />
                <EntryStack.Screen name='Entry' component={Entry} />
                <EntryStack.Screen name='Signup' component={Signup} />
                <EntryStack.Screen name='Login' component={Login} />
            </EntryStack.Navigator>
        </NavigationContainer>
    )
}

export default EntryNavigator;