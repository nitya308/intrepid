import React, { Component, useState } from 'react';
import {
    StyleSheet, View, Text, Image, ScrollView
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';


const OverallChallenges = (props) => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'New', value: 'new'},
      {label: 'Banana', value: 'banana'}
    ]);


    return (
        <ScrollView style={styles.container}>
            <Text style = {styles.h1}> CHALLENGES </Text>
            <View style={styles.trendingContainer}>
                <Text style={styles.h2}> TRENDING </Text>
                <ScrollView horizontal={true} 
                decelerationRate={0}
                snapToInterval={312} //your element width
                snapToAlignment={"center"}
                style={styles.trendingScroll} >
                    <View style={styles.trendingBox} > 
                        <Text> Challenge </Text>
                    </View>
                    <View style={styles.trendingBox} > 
                        <Text> Challenge2 </Text>
                    </View>
                    <View style={styles.trendingBox} > 
                        <Text> Challenge3 </Text>
                    </View>
                </ScrollView>
            </View>

            <View style={styles.allContainer}>
                <Text style={styles.h2}> ALL </Text>

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
                        margin:10,
                      }}
                    dropDownContainerStyle={{
                        width: "50%",
                        margin:10,
                    }}

                    />

                <View nativeId='allChallengeList' style={styles.allChallengeList} >
                    <View style={styles.allChallengeBox} > 
                        <Text> Challenge1 </Text>
                    </View>
                    <View style={styles.allChallengeBox} > 
                        <Text> Challenge2 </Text>
                    </View>
                    <View style={styles.allChallengeBox} > 
                        <Text> Challenge3 </Text>
                    </View>
                </View>
                
            </View>   
            
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // justifyContent: 'space-around',
        // alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
    },
    h1: {
        fontSize: 35,
        marginTop: 25,
        marginBottom: 25,
    },
   trendingScroll: {
        display: 'flex',
        flexDirection: 'row',
   },
   h2: {
        marginBottom:10,
   },
   trendingBox: {
        width: 270,
        height: 270, 
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,
        margin:20,
   },
   allContainer: {
    display:'flex',
   },
   filterList: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
    width:'50%',
   },

   allChallengeList: {
    display:'flex',
    flexDirection: 'column',
    alignItems:'center',
    justifyContent:'center',
   },
   allChallengeBox: {
    width:329,
    height: 76,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 1,
    marginBottom: 10,
   }, 

});

export default OverallChallenges;
