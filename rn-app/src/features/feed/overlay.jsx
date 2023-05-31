import React,{useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView, Button, View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import tryButton from '../../../assets/images/try.png';
import challengesSlice from '../challenges/challengesSlice';
import VotingSlider from './votingSlider';
import {LinearGradient} from 'expo-linear-gradient'




const Overlay = ({post, toChallenge}) => {

    const [challenge, setChallenge] = useState({title: 'DYE YOUR HAIR PINK', expiration: 'Expires in 2 days'});

    const getChallenge = async (challengeId) => {
        const response = await fetch(`http://localhost:3000/challenges/${challengeId}`);
        const data = await response.json();
        setChallenge(data);
    }

    useEffect(() => {
        // getChallenge(post.challengeId);
}, []);
    return (
        <View style={styles.container}>
            <View style={styles.sliderContainer}>
                <VotingSlider />
            </View>
            <LinearGradient
                colors={['transparent',  'rgba(0,0,0, 0.8)']}
                style={styles.nonSliderBackground}>
                <View style={styles.nonSlider}>
                    
                    <View style={styles.description}>
                        <Text style={styles.challengeTitle}>{challenge.title}</Text>
                        <Text style={styles.expiration}>{challenge.expiration}</Text>
                    </View>
                    <View style={styles.tryContainer}>
                        <TouchableOpacity onPress={() => {
                            toChallenge(post.challengeId)
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
        paddingBottom: 22,
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
        fontSize: 30,
        letterSpacing: -2.5,
        marginLeft: 7,
    },

    expiration: {
        color: '#fff',
        textShadowColor: '#CCFF00',
        textShadowRadius: 4,
        fontFamily: 'Exo-Medium',
        fontSize: 17,
        marginLeft: 10,
    }
})

export default Overlay;