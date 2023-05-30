import React, { useEffect, useState } from 'react';
import {
    StyleSheet, View, Text, Image, TouchableOpacity, SafeAreaView, TextInput,
} from 'react-native';
import BackButton from './../../assets/icons/back-button.png'
import SignupHeader from './../../assets/images/signup-header.png'
import SignupButton from './../../assets/images/sign-up-button.png'
import { signupUser } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';


const Signup = ({navigation}) => {
    const [username, onChangeUsername] = useState('');
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
                style={styles.signupHeader}
                source={SignupHeader}
            />

            <View style={styles.inputContainer}>
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
            </View>

            <View style={styles.signupButtonContainer}>
                <TouchableOpacity onPress={() => {
                        dispatch(signupUser(username, email, password));
                    }
                }>
                    <Image
                        source={SignupButton}
                        style={styles.signupButton}
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

    signupHeader: {
        marginLeft: 60,
        width: 170,
        height: 50,
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

    signupButton: {
        width: 200,
        height: 59,
    }
})

export default Signup;