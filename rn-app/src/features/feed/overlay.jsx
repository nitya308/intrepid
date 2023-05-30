import React,{useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SafeAreaView, Button, View, Text, StyleSheet, Image, Dimensions} from 'react-native';




const Overlay = ({post, toChallenge}) => {

    const [challenge, setChallenge] = useState({title: 'Hi'});

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
            <View style="bottomText">
                <View style="description">
                    <Text style={styles.challengeTitle}>{challenge.title}</Text>
                    <Text style={styles.expiration}>Expires in 2 days</Text>
                    <Button title="TRY" onPress={() => {
                        toChallenge(post.challengeId)
                        console.log('TRY button pressed')
                        }} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        position: 'absolute',
        zIndex: 999,
        width: '100%'
    },

    bottomText: {
        flex: 1,
    },

    description: {
        flex: 1
    },

    tryButton: {

        backgroundColor: 'red',
    },

    challengeTitle: {
        color: 'white',
        fontSize: 24,
        marginLeft: 'auto',
    },

    expiration: {
        color: 'yellow',
        fontSize: 10,
    }
})

export default Overlay;