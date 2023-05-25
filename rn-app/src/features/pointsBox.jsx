import React from 'react';
import {
    StyleSheet, View, Text,
} from 'react-native';

const PointsBox = (props) => {
    return (
        <View style={styles.pointsContainer}>
            <Text style={styles.currentPoints}>
                50 pts
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    currentPoints: {
        color: '#99F9FF',
        borderWidth: 1,
        borderColor: '#7BF7FF',
        borderRadius: 2,
        alignSelf: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
})

export default PointsBox;