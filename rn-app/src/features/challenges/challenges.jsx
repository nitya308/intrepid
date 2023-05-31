import React, { Component, useState, useEffect } from 'react';
import {
    StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView,
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
        dispatch(fetchChallenges());
        dispatch(fetchTrendingChallenges());
    }, []);

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'New', value: 'new' },
    ]);

    const allChallenges = useSelector((state) => state.challenges.allChallenges) || [];
    const trendingChallenges = useSelector((state) => state.challenges.trendingChallenges) || [];
    
    return (
        <ScrollView style={styles.container}>
            <View style={styles.backAndPoints}>
                <TouchableOpacity onPress={() => {navigation.navigate('Create Challenge')}}>
                    <Image
                        source={AddButton}
                        style={styles.addButton}
                    />
                </TouchableOpacity>
                <View style={styles.pointsBoxContainer}>
                    <PointsBox />
                </View>
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
                        return (
                            <TouchableOpacity onPress={() => { navigation.navigate('Challenge Info', {challengeId: challenge.id}) }} key={challenge.id}>
                                <View style={[styles.trendingBox, index % 2 ? styles.neonRed : styles.neonBlue]} key={challenge.id} >
                                    <Text style={styles.cTitle}> {challenge.title.toUpperCase()} </Text>
                                    <Text style={styles.cExpiry} >{challenge.expiresIn} </Text>
                                    <Text style={styles.cDescription} >{challenge.description} </Text>
                                    <Text style={styles.cPoints} >{challenge.points} PTS </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>

            <View style={styles.allContainer}>
            
                <View style={{flexDirection: 'row', marginBottom:10,}}>
                    <View style={[{backgroundColor: 'white', height: 2, flex: .1, alignSelf: 'center'}, styles.neonLine]} />
                    <Text style={styles.h2}> ALL </Text>
                    <View style={[{backgroundColor: 'white', height: 2, flex: 1, alignSelf: 'center'}, styles.neonLine]} />
                </View>

                {/* <DropDownPicker
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
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

                /> */}

                <View nativeId='allChallengeList' style={styles.allChallengeList} >


                    {allChallenges.map((challenge, index) => {
                        return (
                            <TouchableOpacity onPress={() => { navigation.navigate('Challenge Info', {challengeId: challenge.id }) }} key={challenge.id}>
                                <View style={styles.allChallengeBox} key={challenge.id} >
                                    <Text style={styles.allTitle}>{challenge.title.toUpperCase()} </Text>
                                    <View style={styles.allRight} >
                                        <Text style={styles.cExpiry}>Expires in {challenge.expiresIn}</Text>
                                        <Text style={styles.aPoints}>{challenge.points} PTS</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )
                    })}

                </View>

            </View>

        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'space-around',
        // alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    backAndPoints: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: 340,
        marginTop: 20,
    },

    exitButton: {
        width: 30,
        height: 30,
    },

    pointsBoxContainer: {
        width: 71,
    },

    addButton: {
        width: 40,
        height: 40,
        marginLeft:20
    },

    pointsBoxContainer: {
        width: 71,
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
        // marginBottom:10,
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
        display: 'flex',
        flexDirection: 'column',

        // alignItems:'center',
        borderRadius: 2,
        borderWidth: 2,


    },
    neonRed: {
        shadowOpacity: 1,
        borderColor: '#FFA8A8',
        shadowRadius: 15,
        shadowColor: '#FF1C1C',
        backgroundColor: '#41151b',
    },
    neonPurple: {
        shadowOpacity: 1,
        borderColor: '#c8a9e8',
        shadowRadius: 15,
        shadowColor: '#AD5AFF',
        backgroundColor: '#39233c',
    },
    neonBlue: {
        shadowOpacity: 1,
        borderColor: '#7BF7FF',
        shadowRadius: 15,
        shadowColor: '#27F2FF',
        backgroundColor: '#223e40',
    },
    neonLine: {
        backgroundColor:'#7BF7FF',
        shadowRadius: 15,
        shadowColor: '#27F2FF',
        shadowOpacity: 1,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        },
    },
    cTitle: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginTop: 15,
        // fontFamily: 'Groupe',
        // fontWeight:700,
    },
    cExpiry: {

        color: '#ffffff',
        textShadowColor: '#CCFF00',
        textShadowRadius: 4,
        fontFamily: 'Exo-Medium',
        
        // color: 'white',
        marginLeft: 20,
        marginTop: 15,
        fontSize: 14.67,
        // color: '#FAE3BD',
    },
    cDescription: {
        fontSize: 14,
        color: 'white',
        margin: 20,
        fontFamily: 'Exo-Medium',
    },
    cPoints: {
        fontSize: 30,
        color: 'white',
        marginLeft: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
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
    },
    allChallengeBox: {
        width: 329,
        height: 76,
        borderStyle: 'solid',
        borderWidth: 1,
        marginBottom: 10,
        backgroundColor: '#262626',
        borderRadius: 11,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal:5,

    },
    allRight: {
        marginRight: 20,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    allTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        textAlign: 'center',
        marginRight: 20,
    },
    aPoints: {
        fontSize: 25,
        color: 'white',
        fontStyle: 'italic',
        fontWeight: 'bold',
    },

});

export default Challenges;
