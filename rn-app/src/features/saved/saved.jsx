import React from 'react';
import {
    StyleSheet, View, Text, Image,
} from 'react-native';
import SavedHeader from './../../../assets/images/saved-header.png';

const Saved = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <View style={styles.pointsContainer}>
                <Text style={styles.points}>50 pts</Text>
            </View>
            <Image 
                source={SavedHeader}
                style={styles.savedHeader}
            />
            <Text>
                Saved Challenges Page
            </Text>
            <Text onPress={() => {navigation.navigate('Challenge Info')}}>
                Click on a saved challenge to see info about it
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingHorizontal: 35,
        paddingTop: 55,
    },

    points: {
        color: '#99F9FF',
        borderWidth: 1,
        borderColor: '#7BF7FF',
        borderRadius: 2,
        alignSelf: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },

    savedHeader: {
        width: 150,
        height: 52,
        marginTop: 10,
    }
})

export default Saved;