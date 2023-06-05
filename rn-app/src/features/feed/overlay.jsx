import React,{useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView, Button, View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import tryButton from '../../../assets/images/try.png';
import challengesSlice from '../challenges/challengesSlice';
import VotingSlider from './votingSlider';
import {LinearGradient} from 'expo-linear-gradient'

const Overlay = ({item, toChallenge}) => {

    // console.log('overlay item', item);

    return (
        <View style={styles.container}>
            <View style={styles.sliderContainer}>
                <VotingSlider submissionId={item.id} userVote={item.userVote}/>
            </View>
            <LinearGradient
                colors={['transparent',  'rgba(0,0,0, 0.6)']}
                style={styles.nonSliderBackground}>
                <View style={styles.nonSlider}>
                    
                    <View style={styles.description}>
                        <Text style={styles.challengeTitle}>{!item.challengeId?.title ? null : item.challengeId?.title.toUpperCase()}</Text>
                        <Text style={styles.points}>{item.challengeId?.points} points</Text>
                    </View>
                    <View style={styles.tryContainer}>
                        <TouchableOpacity onPress={() => {
                            toChallenge(item.challengeId?.id)
                            console.log('TRY button pressed')
                            }}>
                            <Image
                                source={tryButton}
                                style={styles.tryButton}
                            />
                        </TouchableOpacity>
                    </View>
                </View> 
            </LinearGradient>  
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        position: 'absolute',
        zIndex: 999,
        width: '100%',
        flexDirection: 'column',
    },

    sliderContainer: {
        height: Dimensions.get(`window`).height - 180,
        width: Dimensions.get(`window`).width - 5,
        alignItems: 'flex-end',
    },

    nonSlider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        justifyContent: 'space-between',
        paddingBottom: 26,
    },

    nonSliderBackground: {
        width: Dimensions.get(`window`).width,
    },

    description: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },

    tryContainer: {
        alignItems: 'flex-end',
        paddingLeft: 22,
        paddingRight: 5,
    },

    tryButton: {
        width: 90,
        height: 40,
    },

    challengeTitle: {
        color: '#ffffff',
        fontFamily: 'Groupe',
        fontSize: 29,
        letterSpacing: -2.5,
        marginLeft: 7,
    },

    points: {
        color: '#fff',
        textShadowColor: '#CCFF00',
        textShadowRadius: 4,
        fontFamily: 'Exo-Medium',
        fontSize: 17,
        marginLeft: 10,
    }
})

export default Overlay;