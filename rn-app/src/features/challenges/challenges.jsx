import React, { Component, useState } from 'react';
import {
    StyleSheet, View, Text, Image, ScrollView, TouchableOpacity
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import TrendingItem from './trendingItem';
import ChallengeItem from './challengeItem';

const Challenges = ({ navigation }) => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'New', value: 'new' },
        { label: 'Banana', value: 'banana' }
    ]);


    const [trendingChallenges, setTrendingChallenges] = useState([
        {
            title: 'Dye your hair blue',
            description: 'Dye all of your hair bright, neon pink. No streaks or balayages, only full on pink!',
            date: new Date('August 19, 1975 23:15:30'),
            points: 120,
        },
        {
            title: 'Compliment a stranger',
            description: 'Dye all of your hair bright, neon pink. No streaks or balayages, only full on pink!',
            date: new Date('August 19, 1975 23:15:30'),
            points: 120,
        },
    ]);

    const [allChallenges, setAllChallenges] = useState([
        {
            title: 'Dye your hair blue',
            description: 'Dye all of your hair bright, neon pink. No streaks or balayages, only full on pink!',
            date: new Date('August 19, 1975 23:15:30'),
            points: 120,
        },
        {
            title: 'Compliment a stranger',
            description: 'Dye all of your hair bright, neon pink. No streaks or balayages, only full on pink!',
            date: new Date('August 19, 1975 23:15:30'),
            points: 120,
        },
    ]);

    return (
        <ScrollView style={styles.container}>
            <Text
                onPress={() => { navigation.navigate('Challenge Info') }}
                style={{ marginTop: '10%', color: 'white' }}
            >
                Click challenge to see challenge info
            </Text>
            <Text onPress={() => { navigation.navigate('Create Challenge') }} style={{ color: 'white' }}>
                Create Challenge Button </Text>

            <Text style={styles.h1}> CHALLENGES </Text>
            <View style={styles.trendingContainer}>
                <View style={{ flexDirection: 'row', marginBottom: 10, }}>
                    <View style={{ backgroundColor: 'white', height: 2, flex: .1, alignSelf: 'center' }} />
                    <Text style={styles.h2}> TRENDING </Text>
                    <View style={{ backgroundColor: 'white', height: 2, flex: 1, alignSelf: 'center' }} />
                </View>
                <ScrollView horizontal={true}
                    decelerationRate={0}
                    snapToInterval={312} //your element width
                    snapToAlignment={"center"}
                    style={styles.trendingScroll} >

                    <TouchableOpacity onPress={() => { navigation.navigate('Challenge Info', {paramKey: 'placeholderID'}) }}>
                        <View style={[styles.trendingBox, styles.neonRed]} >
                            <Text style={styles.cTitle} >DYE YOUR HAIR PINK</Text>
                            <Text style={styles.cExpiry} >Expires in 3 days </Text>
                            <Text style={styles.cDescription} >Dye all of your hair bright, neon pink. No streaks or balayages, only full on pink! </Text>
                            <Text style={styles.cPoints} >125 PTS </Text>
                        </View>
                    </TouchableOpacity>

                    {trendingChallenges.map((challenge, index) => {
                        return (
                            <TouchableOpacity onPress={() => { navigation.navigate('Challenge Info', {paramKey: 'placeholderID'}) }}>
                                <View style={[styles.trendingBox, index % 2 ? styles.neonRed : styles.neonPurple]} key={challenge.id} >
                                    <Text style={styles.cTitle}> {challenge.title.toUpperCase()} </Text>
                                    {/* <Text style={styles.cExpiry} >Expires in {challenge.date.toString()}</Text> */}
                                    <Text style={styles.cDescription} >{challenge.description} </Text>
                                    <Text style={styles.cPoints} >{challenge.points} PTS </Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })}
                </ScrollView>
            </View>

            <View style={styles.allContainer}>

                <View style={{ flexDirection: 'row', marginBottom: 10, }}>
                    <View style={{ backgroundColor: 'white', height: 2, flex: .1, alignSelf: 'center' }} />
                    <Text style={styles.h2}> ALL </Text>
                    <View style={{ backgroundColor: 'white', height: 2, flex: 1, alignSelf: 'center' }} />
                </View>

                <DropDownPicker
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

                />

                <View nativeId='allChallengeList' style={styles.allChallengeList} >
                    {/* <View style={styles.allChallengeBox } > 
                        <Text style = {styles.allTitle}>COMPLIMENT A STRANGER </Text>
                        <View style={styles.allRight } >
                            <Text style={styles.cExpiry}> Expires in 3 hours</Text>
                            <Text style={styles.aPoints}>10 PTS</Text>
                        </View>
                    </View> */}

                    {allChallenges.map((challenge, index) => {
                        return (
                            <TouchableOpacity onPress={() => { navigation.navigate('Challenge Info', {paramKey: 'placeholderID'}) }}>
                                <View style={styles.allChallengeBox} key={challenge.id} >
                                    <Text style={styles.allTitle}>{challenge.title.toUpperCase()} </Text>
                                    <View style={styles.allRight} >
                                        <Text style={styles.cExpiry}> Expires in 3 hours</Text>
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
        backgroundColor: 'black',
    },
    h1: {
        fontSize: 35,
        marginTop: 25,
        marginBottom: 25,
        color: 'white',
        fontWeight: 'bold',
        fontStyle: 'italic',
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
        fontStyle: 'italic',
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
    cTitle: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginTop: 15,
    },
    cExpiry: {
        color: 'white',
        marginLeft: 20,
        marginTop: 15,
        fontSize: 14.67,
        color: '#FAE3BD',
    },
    cDescription: {
        fontSize: 14,
        color: 'white',
        margin: 20,

    },
    cPoints: {
        fontSize: 30,
        color: 'white',
        marginLeft: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
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
