import React from 'react';
import {
    StyleSheet, View, Text,
} from 'react-native';

const PointsBox = () => {
    return (
        <View style={styles.pointsContainer}>
            <View style={styles.pointsBox}>
                <Text style={styles.currentPoints}>130</Text>
                <Text style={styles.pts}>pts</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    pointsContainer: {
        alignItems: 'flex-end',
    },

    pointsBox: {
        borderWidth: 1,
        borderColor: '#7BF7FF',
        borderRadius: 2,
        shadowColor: "#27F2FF",
        shadowOpacity: 1,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
        flexDirection: 'row',
        columnGap: 4,
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignItems: 'center',
    },

    currentPoints: {
        color: '#99F9FF',
        fontFamily: 'Exo-BoldItalic',
        fontSize: 16,
    },

    pts: {
        color: '#99F9FF',
        fontFamily: 'Exo-Medium',
        fontSize: 16,
    },
})

export default PointsBox;