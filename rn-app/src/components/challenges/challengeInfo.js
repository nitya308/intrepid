import React, { useState } from 'react';
import {
    StyleSheet, View, Text, Image, TouchableOpacity, Pressable
} from 'react-native';
import Bookmark from '../../../assets/icons/bookmark.png';
import BookmarkFilled from '../../../assets/icons/bookmark-filled.png';
import BackButton from './../../../assets/icons/back-button.png';

const ChallengeInfo = ({navigation}) => {

    const [challengeSaved, setChallengeSaved] = useState(false);
    const [challengeSubmitted, setChallengeSubmitted] = useState(false);

    return (
        <View style={styles.screen}>
            <TouchableOpacity onPress={() => {navigation.goBack()}}>
                <Image 
                    style={styles.backButton}
                    source={BackButton}
                />
            </TouchableOpacity>

            <Text style={styles.challengeTitle}>
                DYE YOUR HAIR PINK
            </Text>
            
            <Pressable onPress={() => {setChallengeSaved(challengeSaved ? false : true)}}>
                <Image 
                    style={styles.bookmark}
                    source={challengeSaved ? BookmarkFilled : Bookmark}
                />
            </Pressable>

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