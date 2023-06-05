import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import VerticalSlider from 'rn-vertical-slider';
import { useDispatch } from 'react-redux';
import { voteForSubmission } from './feedRequests';

const VotingSlider = ({userVote, submissionId}) => {

    const dispatch = useDispatch();

    const [value, setValue] = useState(userVote);
    const [voted, setVoted] = useState(userVote != -10);

    const opacity = () => voted ? 0.5 : 1;

    const vote = (value) => {
        // console.log("value", value);
        if (value){
            setVoted(true);
            dispatch(voteForSubmission(submissionId, value));
        }
    };


    return (
        <View style={styles.container}>
            <Text style={{ ...styles.sliderText, color: `rgb(0, 238, 255)`}}>SUCCESS</Text>

            <LinearGradient
                colors={[`rgb(0, 238, 255)`, `rgb(255, 17, 17)`]}
                style={{ ...styles.gradient, opacity: `${opacity()}` }}
            >
                <VerticalSlider
                    style={styles.slider}
                    value={value}
                    onChange={(value) => { setValue(value) }}
                    height={Dimensions.get('window').height / 3}
                    width={30}
                    step={1}
                    min={-5}
                    max={5}
                    disabled={voted}
                    borderRadius={5000}
                    minimumTrackTintColor="transparent"
                    maximumTrackTintColor="transparent"
                    showBallIndicator
                    ballIndicatorPosition={0}
                    ballIndicatorColor={`rgb(200, 200, 200)`}
                    ballIndicatorTextColor="transparent"
                    onComplete={vote}
                    showBackgroundShadow
                    shadowProps={{
                        shadowColor: `rgb(201, 170, 232)`,
                        shadowOffset: {
                            width: 0,
                            height: 0,
                        },
                        shadowOpacity: opacity(),
                        shadowRadius: 3,
                    }}
                    ballIndicatorWidth={30}
                    ballIndicatorHeight={30}
                />

            </LinearGradient>

            <Text style={{ ...styles.sliderText, color: `rgb(255, 17, 17)` }}>FAIL</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        // backgroundColor: 'black'
    },
    gradient: {
        borderRadius: 500,
        overflow: 'hidden',
        transition: 'color 0.5s ease-in-out',
    },
    slider: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
    sliderText: {
        fontFamily: 'Exo-Medium',
        fontSize: 18,
        textShadowRadius: 6,
        marginTop: 10,
        marginBottom: 10,
        width: 70,
        textAlign: 'center',

    }
});

export default VotingSlider