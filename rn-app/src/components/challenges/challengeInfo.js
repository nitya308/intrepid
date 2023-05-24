import React, { useState } from 'react';
import {
    StyleSheet, View, Text, Image, TouchableOpacity,
} from 'react-native';

const ChallengeInfo = ({navigation}) => {

    return (
        <View style={styles.screen}>
            <TouchableOpacity onPress={() => {navigation.goBack()}}>
                <Image 
                    style={styles.backButton}
                    source={require('./../../../assets/icons/back-button.png')}
                />
            </TouchableOpacity>

            <Text style={styles.challengeTitle}>
                DYE YOUR HAIR PINK
            </Text>
                    
            <Image 
                style={styles.bookmark}
                source={require('./../../../assets/icons/bookmark.png')}
            />

            <View style={styles.expirationAndPointValue}>
                <Text style={styles.expiration}>Expires in 3 days</Text>
                <Text style={styles.pointValue}>125 PTS</Text>
            </View>

            <Text style={styles.description}>
                Dye all of your hair bright, neon pink. No streaks or balayages, only full on pink!
            </Text>

            <TouchableOpacity
                style={styles.submitButton}
                onPress={() => {navigation.navigate('Video Album')}}
            >
                <Text style={styles.submitButtonText}>Submit Challenge</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingHorizontal: 35,
        paddingTop: 55,
        backgroundColor: '#121212',
    },

    backButton: {
        width: 20,
        height: 40,
    },

    challengeTitle: {
        color: '#ffffff',
        fontSize: 40,
        fontWeight: 700,
        marginTop: 30,
    },

    bookmark: {
        width: 40,
        height: 40,
        marginTop: 10,
    },

    expirationAndPointValue: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
    },

    expiration: {
        color: '#ffffff',
        fontSize: 20,
    },

    pointValue: {
        color: '#ffffff',
        fontSize: 30,
    },

    description: {
        color: '#ffffff',
        fontSize: 20,
        marginTop: 20,
    },

    submitButton: {
        borderWidth: 1,
        borderColor: '#ffffff',
        alignItems: 'center',
        padding: 10,
        marginTop: 20,
        width: 200,
    },

    submitButtonText: {
        color: '#ffffff',
        fontSize: 18,
    }
})

export default ChallengeInfo;