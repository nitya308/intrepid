import React, {useState} from 'react';
import {
    StyleSheet, View, Text, Image, ScrollView, TextInput, TouchableOpacity
} from 'react-native';

const CreateChallenge = ({navigation}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [points, setPoints] = useState('0');
    

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', margin:10}}>
            <Text
                onPress={() => {navigation.navigate('Challenge Info')}}
            >Create Challenge</Text>
            <View styles={styles.createChallengeContainer}> 
                <Text style = {styles.h1}> CREATE A CHALLENGE </Text>
                <View style={styles.illegalWarning}>
                    <Text style={styles.text}> Challenges involving illegal activities or encouraging users to harm themselves or others will be removed. </Text>
                </View>

                <View style={styles.inputContainer}> 
                    <Text style={styles.inputLabel}>Title (max 32 characters)</Text>
                    <TextInput
                      style={[styles.input]}
                      value={title}
                      onChangeText={setTitle}
                      placeholder="Input a title"
                  />
                </View>

                <View style={styles.inputContainer}> 
                    <Text style={styles.inputLabel}>Description (max 200 characters)</Text>
                    <TextInput
                      style={[styles.inputDescription]}
                      value={description}
                      onChangeText={setDescription}
                      placeholder="Input a description"
                  />
                </View>

                <View style={styles.inputContainer}> 
                    <Text style={styles.inputLabel}>Point Value (1-200)</Text>
                    <TextInput
                      style={[styles.inputPoints]}
                      value={points}
                      onChangeText={setPoints}
                      
                  />
                </View>

                <View style={styles.pointsWarning}>
                    <Text  style={styles.text}> You don't have enough points to create this challenge.</Text>
                </View>

                <TouchableOpacity style={styles.buttonStyleCreate}>
                        <Text style={styles.buttonTextCreate}>Create</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    createChallengeContainer: {
        display: 'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:400,
        backgroundColor:'pink',
    },
    h1: {
        fontSize: 25,
        marginTop: 25,
        marginBottom: 25,
        color: 'white',
        fontWeight:'bold',
        fontStyle:'italic',
    },
    illegalWarning: {
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'black',
        width:336,
        height:75,
        backgroundColor: '#262626',
        display:'flex',
        flexDirection:'row',
    },
    text: {
        fontSize:13,
        color:'white',
        flex:.7,
    },
    inputContainer: {
        marginTop:20,
        
    },
    inputLabel: {
        fontSize: 14,
        color:'white',
    },
    input: {
        
      borderColor: '#CCCCCC',
      borderWidth: 1,
      paddingHorizontal: 10,
      backgroundColor: 'black',
      marginTop: 5,
      color: 'white',
      borderRadius: 10,
      width: 335,
      height:28,
    },
    inputDescription: {
        height: 143,
      borderColor: '#CCCCCC',
      borderWidth: 1,
      paddingHorizontal: 10,
      backgroundColor: 'black',
      marginTop: 5,
      color: 'white',
      borderRadius: 10,
      width: 335,
    },
    inputLabelPoints: {
        fontSize: 25,
    },
    inputPoints: {
        height: 49,
      borderColor: '#CCCCCC',
      borderWidth: 1,
      paddingHorizontal: 10,
      backgroundColor: 'black',
      marginTop: 5,
      color: 'white',
      borderRadius: 10,
      width: 60,
    },
    pointsWarning: {
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'black',
        width:336,
        height:57,
        borderRadius:6,
        marginTop:20,
        backgroundColor: '#262626',
    },
    buttonStyleCreate: {
        width: 129,
        height:43,
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'black',
        marginTop:15,
        alignSelf:'center',
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
    },
    buttonTextCreate: {
        fontSize: 18,
        textAlign: 'center',

    },
    
});
export default CreateChallenge;