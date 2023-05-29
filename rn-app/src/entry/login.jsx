import React, { useEffect, useState } from 'react';
import {
    StyleSheet, View, Text, Image, TouchableOpacity, Button
} from 'react-native';

const Login = ({navigation}) => {
    return (
        <View>
            <Text style={styles.title}>This is the login page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#ffffff',
    }
})

export default Login;