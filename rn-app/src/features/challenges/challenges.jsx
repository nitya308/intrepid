import React, { Component, useState, useEffect } from 'react';
import {
    StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Dimensions, SafeAreaView, Alert
} from 'react-native';
import { fetchChallenges, fetchTrendingChallenges } from './challengesRequests';
import { useSelector, useDispatch } from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
import TrendingItem from './trendingItem';
import ChallengeItem from './challengeItem';
import BackButton from '../../../assets/icons/back-button.png';
import ExitButton from './../../../assets/icons/exit-button.png';
import PointsBox from '../pointsBox';
import AddButton from './../../../assets/icons/add-button.png';

const Challenges = ({ navigation }) => {

    const dispatch = useDispatch();
    useEffect(() => {
            dispatch(fetchChallenges(value==='Points'));
            // Alert.alert("reg use effect");
            dispatch(fetchTrendingChallenges());
        
        
    }, []);

    // useEffect(() => {
    //     // This runs after every render
    //     dispatch(fetchChallenges(value==='Points'));
    //    });
    useEffect(()=>{
        //call your increment function here
        // console.log("hello");
        dispatch(fetchChallenges(value==='Points'));
    },[value])

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState('Points');
    const [items, setItems] = useState([
        { label: 'New', value: 'New' },
        { label: 'Points', value: 'Points' },
    ]);
    //const [colorBlue, setBlue] = useState(false);
    const allChallenges = useSelector((state) => state.challenges.allChallenges) || [];
    const trendingChallenges = useSelector((state) => state.challenges.trendingChallenges) || [];

    const onDropdownSelect = (dropdownValue) => {
        const newValue=dropdownValue();
        dispatch(fetchChallenges(newValue==='Points'));
        setValue(newValue);

    }
    // console.log(value);
    return (
        <ScrollView style={styles.container}>
            <View style={styles.backAndPoints}>
                <TouchableOpacity onPress={() => {navigation.navigate('Create Challenge')}}>
                    <Image
                        source={AddButton}
                        style={styles.addButton}
                    />
                </TouchableOpacity>
                <PointsBox/>
            </View>
           
                
            <Text style = {styles.h1}> CHALLENGES </Text>
            <View style={styles.trendingContainer}>
            <View style={{flexDirection: 'row', marginBottom:10,}}>
                    <View style={[{backgroundColor: 'white', height: 2, flex: .1, alignSelf: 'center'}, styles.neonLine]} />
                    <Text style={styles.h2}> TRENDING </Text>
                    <View style={[{ backgroundColor: 'white', height: 2, flex: 1, alignSelf: 'center' }, styles.neonLine]} />
                </View>
                <ScrollView horizontal={true}
                    decelerationRate={0}
                    snapToInterval={312} //your element width
                    snapToAlignment={"center"}
                    style={styles.trendingScroll} >

                    {trendingChallenges.map((challenge, index) => {
                        if (challenge.expiresIn !== 'Expired')
                        {
                            //setBlue(!colorBlue);
                        return (
                            <TouchableOpacity onPress={() => { navigation.navigate('Challenge Info', {challengeId: challenge.id}) }} key={challenge.id}>
                                <View style={[styles.trendingBox, index % 2 ? styles.neonRed : styles.neonBlue]} key={challenge.id} >
                                    <Text style={styles.cTitle}> {challenge.title.toUpperCase()} </Text>
                                    <Text style={styles.cExpiry} >Expires in {challenge.expiresIn} </Text>
                                    <Text
                                        numberOfLines={3}
                                        ellipsizeMode='tail'
                                        style={styles.cDescription}
                                    >
                                        {challenge.description}
                                    </Text>
                                    <Text style={styles.cPoints} >{challenge.points} PTS </Text>
                                </View>
                            </TouchableOpacity>
                        )
                        }
                    })}
                </ScrollView>
            </View>

            <View style={styles.allContainer}>
            
                <View style={{flexDirection: 'row', marginBottom:10,}}>
                    <View style={[{backgroundColor: 'white', height: 2, flex: .1, alignSelf: 'center'}, styles.neonLine]} />
                    <Text style={styles.h2}> ALL </Text>
                    <View style={[{backgroundColor: 'white', height: 2, flex: 1, alignSelf: 'center'}, styles.neonLine]} />
                </View>

                <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={onDropdownSelect}
                    setItems={setItems}
                    // theme="dark"
                    theme="DARK"
                    style={{
                        width: "50%",
                        margin: 10,
                    }}
                    dropDownContainerStyle={{
                        width: "50%",
                        margin: 10,
                    }}

                />

                <View nativeId='allChallengeList' style={styles.allChallengeList} >


                    {allChallenges.map((challenge, index) => {
                        if (challenge.expiresIn !== 'Expired')
                        {
                        return (
                            <TouchableOpacity onPress={() => { navigation.navigate('Challenge Info', {challengeId: challenge.id }) }} key={challenge.id}>
                                <View style={styles.allChallengeBox} key={challenge.id} >
                                    <Text style={styles.allTitle}>{challenge.title.toUpperCase()} </Text>
                                    <View style={styles.allRight} >
                                        <Text style={styles.aExpiry}>Expires in {challenge.expiresIn}</Text>
                                        <Text style={styles.aPoints}>{challenge.points} PTS</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                        }
                    })}

                </View>

            </View>

        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 57,
    },
    backAndPoints: {
        flexDirection: 'row',
        // alignItems: 'center',
        // width: 370,
    },

    exitButton: {
        width: 30,
        height: 30,
    },

    addButton: {
        width: 40,
        height: 28,
        marginLeft:20,
        marginRight:  Dimensions.get(`window`).width - 147,
    },

    h1: {
        fontSize: 35,
        marginTop: 25,
        marginBottom: 25,
        color: 'white',
        fontWeight: 700,
        fontStyle: 'italic',
        fontFamily: 'Glitch-Goblin',
    },
    
    trendingScroll: {
        display: 'flex',
        flexDirection: 'row',
    },

    h2: {
        fontSize: 20,
        color: 'white',
        alignSelf: 'center',
        paddingHorizontal: 5,
        fontWeight: 'bold',
        fontWeight: 700,
        fontStyle: 'italic',
        fontFamily: 'Glitch-Goblin',

    },

    trendingBox: {
        width: 270,
        height: 270,

        margin: 20,
        flexDirection: 'column',

        justifyContent:'center',
        borderRadius: 2,
        borderWidth: 2,
    },

    neonRed: {
        shadowOpacity: 1,
        borderColor: '#FFA8A8',
        shadowRadius: 8,
        shadowColor: '#FF1C1C',
        backgroundColor: '#41151b',
    },

    neonPurple: {
        shadowOpacity: 1,
        borderColor: '#c8a9e8',
        shadowRadius: 8,
        shadowColor: '#AD5AFF',
        backgroundColor: '#39233c',
    },

    neonBlue: {
        shadowOpacity: 1,
        borderColor: '#7BF7FF',
        shadowRadius: 8,
        shadowColor: '#27F2FF',
        backgroundColor: '#223e40',
    },

    neonLine: {
        backgroundColor: '#c8a9e8',
        shadowRadius: 15,
        shadowColor: '#AD5AFF',
        shadowOpacity: 1,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
    },

    cTitle: {
        color: 'white',
        fontSize: 35,
        textAlign: 'center',
        fontFamily: 'Groupe',
        letterSpacing: -4.5,
        marginHorizontal: 15,
    },

    cExpiry: {
        color: '#ffffff',
        textShadowColor: '#CCFF00',
        textShadowRadius: 4,
        fontFamily: 'Exo-Medium',
        
        // color: 'white',
        marginHorizontal: 20,
        marginTop: 15,
        fontSize: 17,
        // color: '#FAE3BD',
    },

    cDescription: {
        fontSize: 14,
        color: 'white',
        marginHorizontal: 20,
        marginTop: 10,
        fontFamily: 'Exo-Medium',
    },

    cPoints: {
        fontSize: 35,
        color: 'white',
        marginHorizontal: 20,
        marginTop: 10,
        fontFamily: 'Glitch-Goblin',
    },

    allContainer: {
        display: 'flex',
    },

    filterList: {
        display: 'flex',
        flexDirection: 'row',
        margin: 10,
        width: '50%',
    },

    allChallengeList: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        paddingBottom: 70
    },

    allChallengeBox: {
        width: 329,
        height: 85,
        borderRadius: 11,
        marginBottom: 15,
        backgroundColor: '#262626',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },

    allTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        width: 160,
        // marginRight: 20,
        // marginLeft:10,
        lineHeight:25,
        fontFamily: 'Groupe',
        letterSpacing: -1.5,
    },

    allRight: {
        // marginRight: 20,
        // marginBottom: 10,
        // paddingVertical:4,
        justifyContent: 'center',
        alignItems: 'flex-end',
        rowGap: 5,
    },

    aExpiry: {
        color: '#ffffff',
        textShadowColor: '#CCFF00',
        textShadowRadius: 4,
        fontFamily: 'Exo-Medium',
        
        // color: 'white',
        // marginHorizontal: 20,
        // marginTop: 15,
        fontSize: 14.67,
        // color: '#FAE3BD',
    },

    aPoints: {
        fontSize: 25,
        color: 'white',
        fontStyle: 'italic',
        fontWeight: 'bold',
    },

});

export default Challenges;
