import React,{useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView, Button, View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import tryButton from '../../../assets/images/try.png';
import challengesSlice from '../challenges/challengesSlice';




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
    )
}

const styles = StyleSheet.create({

    container: {
        position: 'absolute',
        zIndex: 999,
        width: '100%',
        flexDirection: 'row',
    },

    description: {
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        
    },

    tryContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: Dimensions.get(`window`).width - 270,
        height:  Dimensions.get(`window`).height - 120,
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