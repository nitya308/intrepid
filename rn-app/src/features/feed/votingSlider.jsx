import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import VerticalSlider from 'rn-vertical-slider';
import { useDispatch } from 'react-redux';

function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

const VotingSlider = () => {

    const dispatch = useDispatch();

    const [value, setValue] = useState(0);
    const [voted, setVoted] = useState(false);

    const opacity = () => voted ? 0.5 : 1;

    const vote = debounce(() => {
        setVoted(true);
        dispatch(voteForChallenge(value));
        console.log("voted for challenge");
    });

    return (
        <View style={styles.container}>
            <Text style={{ ...styles.sliderText, color: `rgb(0, 238, 255)`, textShadowColor: `rgb(0, 238, 255)`, opacity: `${opacity()}` }}>SUCCESS</Text>

            <LinearGradient
                colors={[`rgb(0, 238, 255)`, `rgb(255, 17, 17)`]}
                style={{ ...styles.gradient, opacity: `${opacity()}` }}
            >
                <VerticalSlider
                    style={styles.slider}
                    value={value}
                    onChange={(value) => { setValue(value); vote(); }}
                    height={Dimensions.get('window').height / 3}
                    width={30}
                    step={0.1}
                    min={-1}
                    max={1}
                    borderRadius={5000}
                    minimumTrackTintColor="transparent"
                    maximumTrackTintColor="transparent"
                    showBallIndicator
                    ballIndicatorPosition={0}
                    ballIndicatorColor={`rgb(200, 200, 200)`}
                    ballIndicatorTextColor="transparent"
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

            <Text style={{ ...styles.sliderText, color: `rgba(255, 17, 17, ${opacity()})`, textShadowColor: `rgba(255, 17, 17, ${opacity})` }}>FAIL</Text>

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