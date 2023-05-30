import React, { useEffect, useState } from 'react';
import {
    StyleSheet, View, Text, Image, TouchableOpacity, Button
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { fetchChallenge } from '../challenges/challengesSlice';
import Modal from "react-native-modal";
import StayButton from './../../../assets/icons/stay-button.png';
import ExitButton from './../../../assets/icons/exit-button.png';
import SwapButton from './../../../assets/icons/swap-button.png';
import SubmitButton from './../../../assets/icons/submit-button.png'
import * as ImagePicker from 'expo-image-picker';

import { ResizeMode, Video } from 'expo-av';

const SubmitChallenge = ({ navigation, route }) => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchChallenge(route.params.paramKey))
    }, [])

    const currentChallenge = useSelector((state) => state.currentChallenge);

    const [exitModalVisible, setExitModalVisible] = useState(false);
    const [video, setVideo] = useState(null);
    const [status, setStatus] = useState({});

    const pickVideo = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Videos,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setVideo(result.assets[0]);
        }
    };


    useEffect(() => {
        pickVideo();
    }, []);
    return (
        <View style={styles.screen}>

            <Modal
                isVisible={exitModalVisible}
                style={styles.exitModal}
                backdropOpacity={0.70}
                animationIn={'fadeIn'}
                animationInTiming={100}
                animationOut={'fadeOut'}
                animationOutTiming={100}
            >
                <Text
                    style={styles.editModalText}>Are you sure you want to stop uploading?</Text>
                <View style={styles.exitModalActions}>
                    <Text
                        style={styles.exitModalExitText}
                        onPress={() => (navigation.navigate('Challenge Info', {paramKey: route.params.paramKey}))}
                    >Exit</Text>
                    <TouchableOpacity onPress={() => { setExitModalVisible(false) }}>
                        <Image
                            style={styles.stayButton}
                            source={StayButton}
                        />
                    </TouchableOpacity>
                </View>
            </Modal>

            <TouchableOpacity onPress={() => { setExitModalVisible(true) }}>
                <Image
                    style={styles.exitButton}
                    source={ExitButton}
                />
            </TouchableOpacity>

            <Text style={styles.title}>DYE YOUR HAIR PINK</Text>
            <View style={styles.expirationAndPointValue}>
                <Text style={styles.expiration}>Expires in 3 days</Text>
                <Text style={styles.pointValue}>125 PTS</Text>
            </View>

            <Text style={styles.description}>
                Dye all of your hair bright, neon pink. No streaks or balayages, only full on pink!
            </Text>

            {
                video &&
                <Video
                    style={styles.video}
                    source={{ uri: video.uri }}
                    useNativeControls
                    resizeMode={ResizeMode.CONTAIN}
                    isLooping
                    onPlaybackStatusUpdate={status => setStatus(() => status)}

                />
            }


            <View style={styles.swapButtonContainer}>
                <TouchableOpacity>
                    <Image
                        style={styles.swapButton}
                        source={SwapButton}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.submitButtonContainer}>
                <TouchableOpacity onPress={() => { navigation.navigate('Challenge Info', {paramKey: route.params.paramKey}) }}>
                    <Image
                        style={styles.submitButton}
                        source={SubmitButton}
                    />
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingHorizontal: 35,
        paddingTop: 55,
    },

    exitModal: {
        backgroundColor: '#303030',
        borderRadius: 15,
        marginVertical: 320,
        marginHorizontal: 50,
        paddingHorizontal: 40,
        rowGap: 40,
    },

    editModalText: {
        color: '#ffffff',
        fontSize: 23,
        fontWeight: 500,
        textAlign: 'center',
        lineHeight: 35,
    },

    exitModalActions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    exitModalExitText: {
        color: '#99F9FF',
        fontSize: 23,
        fontWeight: 500,
    },

    stayButton: {
        width: 115,
        height: 45,
    },

    exitButton: {
        width: 30,
        height: 30,
    },

    title: {
        color: '#ffffff',
        fontFamily: 'Glitch-Goblin',
        fontSize: 40,
        fontWeight: 700,
        marginTop: 30,
    },

    expirationAndPointValue: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
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
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20,
    },

    swapButtonContainer: {
        alignItems: 'center',
        marginTop: 20,
    },

    swapButton: {
        width: 100,
        height: 38,
    },

    submitButtonContainer: {
        alignItems: 'flex-end',
        marginTop: 20,
    },

    submitButton: {
        width: 150,
        height: 50,
    },

    next: {
        color: '#ffffff',
    },

    video: {
        width: '100%',
        height: '30%',
        backgroundColor: 'black',
    }

})

export default SubmitChallenge;