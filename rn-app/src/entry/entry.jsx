import React from 'react';
import {
    ImageBackground, StyleSheet, View, Text, Image, TouchableOpacity,
} from 'react-native';
import EntryLogo from './../../assets/images/entry-logo.png'
import SignupButton from './../../assets/images/sign-up-button.png'
import LoginButton from './../../assets/images/log-in-button.png'
import background from './../../assets/images/background.gif'

const Entry = ({navigation}) => {
    return (
        <View>
            <ImageBackground
                style={styles.background}
                source={background} >  
            <View style={styles.entryInfoContainer}>
                <Image
                    style={styles.entryLogo}
                    source={EntryLogo}
                />
                <View style={styles.entryTextContainer}>
                    <Text style={styles.entryText}>Take risks.</Text>
                    <Text style={styles.entryText}>Be fearless.</Text>
                </View>
            </View>

            <View style={styles.actions}>
                <TouchableOpacity onPress={() => {navigation.navigate('Signup')}}>
                    <Image
                        source={SignupButton}
                        style={styles.actionButton}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {navigation.navigate('Login')}}>
                    <Image
                        source={LoginButton}
                        style={styles.actionButton}
                    />
                </TouchableOpacity>
            </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    entryInfoContainer: {
        marginTop: 250,
        alignItems: 'center',
        rowGap: 20,
    },

    background: {
        width: '100%',
        height: '100%',
    },

    entryTextContainer: {
        rowGap: 3,
    },

    entryText: {
        color: '#ffffff',
        fontFamily: 'Exo-Regular',
        fontSize: 20,
        textAlign: 'center',
    },

    title: {
        color: '#ffffff',
        fontSize: 30,
    },

    actions: {
        alignItems: 'center',
        marginTop: 200,
        rowGap: 20,
    },

    actionButton: {
        width: 200,
        height: 59,
    },
})

export default Entry;