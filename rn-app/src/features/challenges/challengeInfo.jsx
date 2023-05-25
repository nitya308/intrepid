import React, { useState } from 'react';
import {
    StyleSheet, View, Text, Image, TouchableOpacity, Pressable
} from 'react-native';
import Bookmark from '../../../assets/icons/bookmark.png';
import BookmarkFilled from '../../../assets/icons/bookmark-filled.png';
import BackButton from '../../../assets/icons/back-button.png';
import SubmitChallengeButton from '../../../assets/icons/submit-challenge-button.png';
import VideoUploaded from '../../../assets/icons/video-uploaded.png';

const ChallengeInfo = ({ navigation }) => {

    const [challengeSaved, setChallengeSaved] = useState(false);
    const [challengeSubmitted, setChallengeSubmitted] = useState(false);

    return (
        <View style={styles.screen}>
            <TouchableOpacity onPress={() => { navigation.goBack() }}>
                <Image
                    style={styles.backButton}
                    source={BackButton}
                />
            </TouchableOpacity>

            <Text style={styles.challengeTitle}>
                DYE YOUR HAIR PINK
            </Text>

            <Pressable onPress={() => { setChallengeSaved(challengeSaved ? false : true) }}>
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

            <View style={styles.submitChallengeButtonContainer}>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('Video Album') }}
                >
                    <Image
                        style={styles.submitChallengeButton}
                        source={SubmitChallengeButton}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.videoUploadedCard}>
                <Image
                    source={VideoUploaded}
                    style={styles.videoUploaded}
                />
                <View style={styles.votingInfo}>
                    <Text style={styles.votingTime}>23: 59: 59</Text>
                    <Text style={styles.votingEnds}>until voting ends</Text>
                </View>
            </View>
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

    submitChallengeButtonContainer: {
        alignItems: 'center',
    },

    submitChallengeButton: {
        marginTop: 20,
        width: 200,
        height: 44,
    },

    videoUploadedCard: {
        borderWidth: 1,
        borderColor: '#C8FCFF',
        borderRadius: 10,
        alignItems: 'center',
        paddingVertical: 30,
        marginHorizontal: 20,
    },

    videoUploaded: {
        width: 170,
        height: 17.7,
    },

    votingInfo: {

    },

    votingTime: {
        color: '#ffffff',
        textAlign: 'center',
    },

    votingEnds: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
    },
})

export default ChallengeInfo;