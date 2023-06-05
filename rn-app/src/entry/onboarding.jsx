import React from 'react';
import {
    ImageBackground, StyleSheet, View, Text, Image, TouchableOpacity,
} from 'react-native';
import EntryLogo from './../../assets/images/entry-logo.png'
import GetStartedButton from './../../assets/images/get-started.png'
import step1 from './../../assets/images/step1.png'
import step2 from './../../assets/images/step2.png'
import step3 from './../../assets/images/step3.png'
import step4 from './../../assets/images/step4.png'
import background from './../../assets/images/background.gif'

const Onboarding = ({navigation}) => {
    return (
        <View >
            <ImageBackground
                style={styles.background}
                source={background} >    

            <View style={styles.entryInfoContainer}>
                <Image
                    style={styles.entryLogo}
                    source={EntryLogo}
                />
            </View>

            <View style={styles.summary}>
                <Image
                    style={styles.step1}
                    source={step1}
                />
                <Image
                    style={styles.step2}
                    source={step2}
                />
                <Image
                    style={styles.step3}
                    source={step3}
                />
                <Image
                    style={styles.step4}
                    source={step4}
                />
            </View>

            <View style={styles.actions}>
                <TouchableOpacity onPress={() => {navigation.navigate('Entry')}}>
                    <Image
                        source={GetStartedButton}
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
        marginTop: 210,
        alignItems: 'center',
        rowGap: 20,
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

    summary: {
        marginTop: 50,
        flexDirection: 'column'
    },

    step1: {
        width: 370,
    },

    step2: {
        width: 320,
        marginLeft: 110,
    },

    step3: {
        width: 320,
        marginTop: 20,
    },

    step4: {
        width: 320,
        marginLeft: 110,
        marginTop: 10,
    },

    actions: {
        alignItems: 'center',
        marginTop: 30,
        rowGap: 20,
    },

    actionButton: {
        width: 250,
        height: 60,
    },
})

export default Onboarding;