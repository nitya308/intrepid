import React, { useEffect, useState } from 'react';
import {
    StyleSheet, View, Text, Image, TouchableOpacity, Button, SafeAreaView, TextInput,
} from 'react-native';

const Signup = ({navigation}) => {
    const [username, onChangeUsername] = useState('');
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    return (
        <SafeAreaView style={styles.inputContainer}>
            <View style={styles.inputSection}>
                <Text style={styles.inputLabel}>Username</Text>
                <TextInput
                    style={styles.inputField}
                    onChangeText={onChangeUsername}
                    value={username}
                />
            </View>

            <View style={styles.inputSection}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                    style={styles.inputField}
                    onChangeText={onChangeEmail}
                    value={email}
                />
            </View>

            <View style={styles.inputSection}>
                <Text style={styles.inputLabel}>Password</Text>
                <TextInput
                    style={styles.inputField}
                    onChangeText={onChangePassword}
                    value={password}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        rowGap: 25,
    },

    inputSection: {
        marginHorizontal: 60,
        rowGap: 10,
    },

    inputLabel: {
        color: '#ffffff',
        fontSize: 17,
    },

    inputField: {
        borderWidth: 1,
        borderColor: '#ffffff',
        borderRadius: 2,
        height: 40,
        color: '#ffffff',
        paddingHorizontal: 10,
        fontSize: 17,
    }
})

export default Signup;