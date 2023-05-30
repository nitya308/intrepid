import React, {useState} from 'react';
import {
    StyleSheet, View, Text, Image, ScrollView, TextInput, TouchableOpacity
} from 'react-native';
import WhiteExclamation from '../../../assets/icons/exclamation_white.png';
import RedExclamation from '../../../assets/icons/exclamation_red.png';

const CreateChallenge = ({navigation}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [points, setPoints] = useState('0');
    const [enoughPoints, setEnoughPoints] = useState('false');

    
    const submitChallenge = () => {
        // submit challenge with title, description, points, and 
    }

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', margin:10}}>
            <Text
                onPress={() => {navigation.navigate('Challenge Info')}}
            >Create Challenge</Text>
            <View style={styles.topRow}>
                {/* <TouchableOpacity onPress={() => { navigation.navigate('Challenges')}}>
                    <Image
                        style={styles.backButton}
                        source={BackButton}
                    />
                </TouchableOpacity> */}

                <TouchableOpacity style={styles.pointsContainer} >
                    <Text style={styles.points}>50 pts</Text>
                </TouchableOpacity>
            </View>
            <View styles={styles.createChallengeContainer}> 
                <Text style = {styles.h1}> CREATE A CHALLENGE </Text>
                <View style={styles.illegalWarning}>
                <Image
                            style={styles.red_exclamation}
                            source={RedExclamation}
                        />
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
                      multiline={true}
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
           
                {points>20 ? (
                        <View style={styles.pointsWarning}>
                            <Image
                            style={styles.white_exclamation}
                            source={WhiteExclamation}
                        />
                        <Text  style={styles.text}>You don't have enough points to create this challenge.</Text>
                    </View>
                    ):(null)}
                <TouchableOpacity style={styles.buttonStyleCreate} onPress = {submitChallenge}>
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
    points: {
        color: '#99F9FF',
        borderWidth: 1,
        borderColor: '#7BF7FF',
        borderRadius: 2,
        alignSelf: 'flex-end',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    topRow: {
        display: 'flex',
        flexDirection: 'row',
        
    },
    backButton: {
        width: 20,
        height: 40,
        marginHorizontal:140,
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
        justifyContent:'center',
        alignItems:'center',
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
      
paddingBottom: 0,
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
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },
    white_exclamation: {
        height:30,
        width:30,
        marginRight:20,
    },
    red_exclamation: {
        height:30,
        width:30,
        marginRight:20,
    },
    buttonStyleCreate: {
        width: 129,
        height:43,
        borderStyle:'solid',
        borderWidth:1,
        borderColor:'white',
        marginTop:15,
        alignSelf:'center',
        display:'flex',
        justifyContent:'center',
        alignContent:'center',
    },
    buttonTextCreate: {
        fontSize: 18,
        textAlign: 'center',
        color:'white',

    },
    
});
export default CreateChallenge;