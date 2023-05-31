import React, { useEffect, useState } from 'react';
import {
    StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView, TextInput,
} from 'react-native';
import BackButton from './../../assets/icons/back-button.png'
import LoginHeader from './../../assets/images/login-header.png'
import LoginButton from './../../assets/images/log-in-button.png'
import { signinUser } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';


const Login = ({navigation}) => {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');
    const dispatch = useDispatch();

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
                        keyboardAppearance={'dark'}
                        selectionColor={'#fff'}
                    />
                </View>

                <View style={styles.inputSection}>
                    <Text style={styles.inputLabel}>Password</Text>
                    <TextInput
                        style={styles.inputField}
                        onChangeText={onChangePassword}
                        value={password}
                        keyboardAppearance={'dark'}
                        selectionColor={'#fff'}
                    />
                </View>
            </View>

            <View style={styles.signupButtonContainer}>
                <TouchableOpacity onPress={
                    () => {
                        dispatch(signinUser(email, password));
                    }}
                >
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
        fontFamily: 'Exo-Regular',
        shadowColor: "#ffffff",
        shadowOpacity: 1,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
    },

    inputField: {
        borderWidth: 1,
        borderColor: '#FAE3BD',
        borderRadius: 2,
        height: 40,
        color: '#ffffff',
        paddingHorizontal: 10,
        fontSize: 17,
        shadowColor: "#FFF741",
        shadowOpacity: 1,
        shadowRadius: 4,
        shadowOffset: {
            height: 0,
            width: 0,
        },
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