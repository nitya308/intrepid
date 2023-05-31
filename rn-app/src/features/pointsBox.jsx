import React, { useEffect } from 'react';
import {
    StyleSheet, View, Text,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../features/user/userRequests';

const PointsBox = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUser());
    }, []);

    const points = useSelector((state) => state.user.points) || 0;

    return (
        <View style={styles.pointsContainer}>
            <View style={styles.pointsBox}>
                <Text style={styles.currentPoints}>{points}</Text>
                <Text style={styles.pts}>pts</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    pointsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
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