import React, { useState, useEffect } from 'react';
import {
    StyleSheet, View, Text, Image, TouchableOpacity, Pressable, SafeAreaView, ActivityIndicator
} from 'react-native';
import AutoScroll from "@homielab/react-native-auto-scroll";
import { Video, ResizeMode } from 'expo-av';
import { useSelector, useDispatch } from 'react-redux'
import { fetchChallenge, saveChallenge, deleteChallenge } from '../challenges/challengesRequests';
import Bookmark from '../../../assets/icons/bookmark.png';
import BookmarkFilled from '../../../assets/icons/bookmark-filled.png';
import TrashCan from '../../../assets/icons/trash-can.png';
import BackButton from '../../../assets/icons/back-button.png';
import SubmitChallengeButton from '../../../assets/icons/submit-challenge-button.png';
import VideoUploaded from '../../../assets/icons/video-uploaded.png';
import PointsBox from '../pointsBox';
import { setCurrentChallenge } from './challengesSlice';

const ChallengeInfo = ({ navigation, route }) => {
    const dispatch = useDispatch();
 
    useEffect(() => {
        if (route.params.challengeId !== currentChallenge?.id) {
            dispatch(setCurrentChallenge(null))
        }
        dispatch(fetchChallenge(route.params.challengeId))
    }, [])

    const currentChallenge = useSelector((state) => state.challenges.currentChallenge) || {};
    const userId = useSelector((state) => state.user.userId);

    const challengeSubmissions = currentChallenge.submissions || [];
    const videosList = challengeSubmissions.map((submission) => submission.videoUrl);

    // find out if user has submitted to challenge
    const currUserSubmission = challengeSubmissions.find((submission) => submission.userId === userId);
    // const hasSubmitted = challengeSubmissions.some((submission) => submission.userId === userId);

    // console.log('currentChallenge', currentChallenge);

    // const videosList = [
    //     'https://swerve-bucket.s3.amazonaws.com/04D29E3F-E8B5-41C4-A100-3BF798620659.mov',
    //     'https://swerve-bucket.s3.amazonaws.com/07841723-081B-4896-B1CE-547D99961AF7.mov',
    //     'https://swerve-bucket.s3.amazonaws.com/2F4688A4-F1CE-4518-826C-DFCCE16CFCCA.mov',
    //     'https://swerve-bucket.s3.amazonaws.com/7FDB7F7C-5192-46CE-A018-15819F71F2E9.mov',
    //     'https://swerve-bucket.s3.amazonaws.com/E2785B21-B749-4EE0-9BC9-4C491467DE16.mov',
    //     'https://swerve-bucket.s3.amazonaws.com/ED6C3E8A-B28D-4F57-93B1-EC6B9F29913B.mov',
    // ]

    const ChallengeInfoCTA = ({  }) => {
        let content;

        if (!currUserSubmission) {
            content = (
                <View style={styles.submitChallengeButtonContainer}>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Submit Challenge', { challengeId: route.params.challengeId }) }}
                    >
                        <Image
                            style={styles.submitChallengeButton}
                            source={SubmitChallengeButton}
                        />
                    </TouchableOpacity>
                </View>
            )
        } else {
            content = (
                <View style={styles.videoUploadedCard}>
                    <Image
                        source={VideoUploaded}
                        style={styles.videoUploaded}
                    />
                    <View style={styles.row}>
                     <Video
                        style={styles.video}
                        source={{ uri: currUserSubmission.videoUrl }}
                        resizeMode={ResizeMode.COVER}
                        isLooping={true}
                        isMuted={true}
                        shouldPlay
                        key={currUserSubmission.videoUrl}
                    />
                    <View>
                        <Text style={styles.votingInfo}>{currUserSubmission.votingEndsAt> Date.now()? 
                             currentChallenge.success>0? "Voting complete, SUCCESS": "Voting complete, FAIL"
                        : "Voting ongoing"}</Text>
                    </View>
                    </View>
                </View>
            )
        }
        return content;
    }

    if (currentChallenge) {
    return (
        <View style={styles.screen}>
            <View style={styles.backAndPoints}>
                <TouchableOpacity onPress={() => {navigation.goBack()}}>
                    <Image
                        source={BackButton}
                        style={styles.backButton}
                    />
                </TouchableOpacity>
                <View style={styles.pointsBoxContainer}>
                    <PointsBox />
                </View>
            </View>

            <AutoScroll style={styles.videoCarousel}>
                <View style={styles.videos}>
                    {videosList.map((url) => {
                        return (
                            <Video
                                style={styles.video}
                                source={{ uri: url }}
                                resizeMode={ResizeMode.COVER}
                                isLooping={true}
                                isMuted={true}
                                shouldPlay
                                key={url}
                            />
                        )
                    })}
                </View>
            </AutoScroll>

            <View style={styles.challengesInfoContainer}>
                <Text style={styles.challengeTitle}>
                    {currentChallenge.title}
                </Text>

                <View style={styles.actions}>
                    <Pressable onPress={() => { 
                        dispatch(saveChallenge(currentChallenge.id, false))
                    }}>
                        <Image
                            style={styles.bookmark}
                            source={currentChallenge.isSaved ? BookmarkFilled : Bookmark}
                        />
                    </Pressable>
                </View>

                <View style={styles.expirationAndPointValue}>
                    <Text style={styles.expiration}>
                        {currentChallenge.expiresIn == 'Expired' ? ('Expired') : `Expires in ${currentChallenge.expiresIn}`}
                    </Text>
                    <Text style={styles.pointValue}>{currentChallenge.points} PTS</Text>
                </View>

                <Text style={styles.description}>
                    {currentChallenge.description}
                </Text>

                <ChallengeInfoCTA submitted={currentChallenge.submitted} />
            </View>
        </View>
    )} else {
        return (
            <SafeAreaView style={styles.loadingScreen}>
                <Text style={styles.loadingText}>Loading this challenge...</Text>
                <ActivityIndicator size='large' />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: 55,
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
    },

    backAndPoints: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
        marginBottom: 10,
    },

    backButton: {
        width: 20,
        height: 40,
    },

    pointsBoxContainer: {
        width: 71,
    },

    videos: {
        flexDirection: 'row',
        columnGap: 10,
    },

    video: {
        width: 80,
        height: 140,
    },

    challengesInfoContainer: {
        paddingHorizontal: 40,
    },

    challengeTitle: {
        color: '#ffffff',
        fontFamily: 'Glitch-Goblin',
        fontSize: 40,
        fontWeight: 700,
        marginTop: 20,
    },

    actions: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 5,
    },

    bookmark: {
        width: 40,
        height: 40,
    },

    trashCan: {
        width: 47,
        height: 50,
    },

    expirationAndPointValue: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
    },

    expiration: {
        color: '#ffffff',
        textShadowColor: '#CCFF00',
        textShadowRadius: 4,
        fontFamily: 'Exo-Medium',
        fontSize: 22,
    },

    pointValue: {
        color: '#ffffff',
        fontFamily: 'Glitch-Goblin',
        fontSize: 35,
    },

    description: {
        color: '#ffffff',
        fontFamily: 'Exo-Regular',
        fontSize: 18,
        marginTop: 15,
    },

    submitChallengeButtonContainer: {
        alignItems: 'center',
        marginTop: 70,
    },

    submitChallengeButton: {
        width: 200,
        height: 44,
    },

    videoUploadedCard: {
        borderWidth: 1,
        borderColor: '#C8FCFF',
        borderRadius: 10,
        alignItems: 'center',
        paddingVertical: 15,
        marginHorizontal: 20,
        rowGap: 20,
        marginTop: 20,
    },

    videoUploaded: {
        width: 170,
        height: 17.7,
    },

    votingInfo: {
        color: '#ffffff',
        fontFamily: 'Exo-Regular',
    },

    votingTime: {
        color: '#ffffff',
        fontSize: 50,
        fontWeight: 700,
        textAlign: 'center',
    },

    votingEnds: {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
    },

    loadingScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        rowGap: 20,
    },

    loadingText: {
        color: '#ffffff',
        fontFamily: 'Exo-Regular',
        fontSize: 20,
    }
})

export default ChallengeInfo;