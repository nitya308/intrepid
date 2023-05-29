import React, { useEffect, useState } from 'react';
import {
    StyleSheet, View, Text, Image, TouchableOpacity, Button
} from 'react-native';

const Entry = ({navigation}) => {
    return (
        <View>
            <Text
                style={styles.title}
                onPress={() => {navigation.navigate('Signup')}}
            >
                Signup
            </Text>
            <Text
                style={styles.title}
                onPress={() => {navigation.navigate('Login')}}
            >
                Login
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#ffffff',
        fontSize: 30,
    }
})

export default Entry;