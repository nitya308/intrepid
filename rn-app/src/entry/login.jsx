import React, { useEffect, useState } from 'react';
import {
    StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView, TextInput,
} from 'react-native';
import BackButton from './../../assets/icons/back-button.png'
import LoginHeader from './../../assets/images/login-header.png'
import LoginButton from './../../assets/images/log-in-button.png'


const Login = ({navigation}) => {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    return (
        <SafeAreaView>
            <TouchableOpacity onPress={() => {navigation.goBack()}}>
                <Image
                    style={styles.backButton}
                    source={BackButton}
                />
            </TouchableOpacity>

            <Image
                style={styles.loginHeader}
                source={LoginHeader}
            />

            <View style={styles.inputContainer}>
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
            </View>

            <View style={styles.signupButtonContainer}>
                <TouchableOpacity>
                    <Image
                        source={LoginButton}
                        style={styles.loginButton}
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    backButton: {
        width: 20,
        height: 40,
        marginLeft: 30,
    },

    loginHeader: {
        marginLeft: 60,
        width: 130,
        height: 45,
        marginTop: 50,
    },

    inputContainer: {
        rowGap: 25,
        marginTop: 50,
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
    },

    signupButtonContainer: {
        alignItems: 'center',
        marginTop: 100,
    },

    loginButton: {
        width: 200,
        height: 59,
    }
})

export default Login;