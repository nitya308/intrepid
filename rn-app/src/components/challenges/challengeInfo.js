import React from 'react';
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

            <Text>
                Dye Your Hair Pink
            </Text>
            <Text
                onPress={() => {navigation.navigate('Video Album')}}
            >Challenge Info</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingHorizontal: 25,
        paddingTop: 55,
        backgroundColor: 'blue',
    },

    backButton: {
        width: 20,
        height: 40,
    }
})

export default ChallengeInfo;