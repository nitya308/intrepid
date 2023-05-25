import React, { useState, useCallback } from 'react';
import {
    StyleSheet, View, Text, Image, FlatList, SafeAreaView, Pressable, RefreshControl, TouchableOpacity
} from 'react-native';
import PointsBox from '../pointsBox';

const History = ({navigation}) => {
    return (
        <View style={styles.screen}>
            <PointsBox />
            <Text>History Page</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingHorizontal: 30,
        paddingTop: 55,
    }
})
export default History;