import React, {useState} from 'react';
import {
    StyleSheet, View, Text, Image, ScrollView, TextInput, TouchableOpacity, SafeAreaView, 
} from 'react-native';
import WhiteExclamation from '../../../assets/icons/exclamation_white.png';
import RedExclamation from '../../../assets/icons/exclamation_red.png';
import BackButton from '../../../assets/icons/back-button.png';
import ExitButton from './../../../assets/icons/exit-button.png'
import PointsBox from '../pointsBox';
import Modal from "react-native-modal";
import StayButton from './../../../assets/icons/stay-button.png';
import { createChallenge } from '../challenges/challengesRequests';
import { useSelector, useDispatch } from 'react-redux';

const CreateChallenge = ({navigation}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [points, setPoints] = useState('0');

    const [exitModalVisible, setExitModalVisible] = useState(false);
    const userPoints = useSelector((state) => state.user.points);

    const dispatch = useDispatch();
    
    const submitChallenge = () => {
        // submit challenge with title, description, points
        if (points <= userPoints)
        {
            // do something
            challenge = {
                title,
                description,
                points,
            }
            console.log(challenge);
            dispatch(createChallenge(challenge, navigation));
            
            
        }
    }

    return (
        <ScrollView style={[{ flexGrow: 1, margin:10}]} contentContainerStyle = {styles.container}>
            <Modal
                isVisible={exitModalVisible}
                style={styles.exitModal}
                backdropOpacity={0.70}
                animationIn={'fadeIn'}
                animationInTiming={100}
                animationOut={'fadeOut'}
                animationOutTiming={100}
            >
                <Text
                    style={styles.editModalTextHeader}>Are you sure you want to leave this page?</Text>
                    <Text
                    style={styles.editModalTextCaption}>You will lose your progress on creating a challenge.</Text>
                <View style={styles.exitModalActions}>
                    <Text
                        style={styles.exitModalExitText}
                        onPress={() => {navigation.navigate('Challenges Main')}}
                    >Exit</Text>
                    <TouchableOpacity onPress={() => { setExitModalVisible(false) }}>
                        <Image
                            style={styles.stayButton}
                            source={StayButton}
                        />
                    </TouchableOpacity>
                </View>
            </Modal>

            <View style={styles.backAndPoints}>
                <TouchableOpacity onPress={() => {setExitModalVisible(true)}}>
                    <Image
                        source={ExitButton}
                        style={styles.exitButton}
                    />
                </TouchableOpacity>
                <View style={styles.pointsBoxContainer}>
                    <PointsBox />
                </View>
            </View>

            <View styles={styles.createChallengeContainer}> 
                <Text style = {styles.h1}> CREATE A CHALLENGE </Text>
                <View style={styles.illegalWarning}>
                <Image
                            style={styles.white_exclamation}
                            source={WhiteExclamation}
                        />
                    <Text style={styles.text}> Challenges involving illegal activities or encouraging users to harm themselves or others <Text style={styles.redText}>will be removed.</Text> </Text>
                </View>

                <View style={styles.inputContainer}> 
                    <Text style={styles.inputLabel}>Title (max 32 characters)</Text>
                    <TextInput
                      style={[styles.input]}
                      value={title}
                      onChangeText={setTitle}
                      placeholder="Input a title"
                      maxLength={32}
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
                      maxLength={200}
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
           
                {points>=userPoints ? (
                        <View style={styles.pointsWarning}>
                            <Image
                            style={styles.red_exclamation}
                            source={RedExclamation}
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
alignItems:'center',
justifyContent:'center',
    },
    backAndPoints: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
       
        width: 370,
        marginTop: 20,
        paddingTop:40,
    },

    exitButton: {
        width: 30,
        height: 30,
        marginLeft:20
    },

    pointsBoxContainer: {
        width: 71,
        marginRight:20,
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
        fontFamily: 'Glitch-Goblin',
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
        fontFamily:'Exo-Medium',
    },
    redText: {
        color:'red',
    },
    inputContainer: {
        marginTop:20,
        
    },
    inputLabel: {
        fontSize: 14,
        color:'white',
        fontFamily: 'Exo-Medium'
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
      fontFamily: 'Exo-Medium'
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
      fontFamily:'Exo-SemiBold'
      
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
        borderWidth: 1,
        borderColor: '#7BF7FF',
        borderRadius: 2,
        shadowColor: "#27F2FF",
        shadowOpacity: 1,
        shadowRadius: 3,
        shadowOffset: {
            height: 0,
            width: 0,
        }
    },
    buttonTextCreate: {
        fontSize: 18,
        textAlign: 'center',
        color: '#99F9FF',
        fontFamily: 'Exo-Medium',
    },
    exitModal: {
        backgroundColor: '#303030',
        width:280,
        borderRadius: 15,
        marginVertical: 200,
        marginHorizontal: 50,
        paddingHorizontal: 20,
        rowGap: 15,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
    },

    editModalTextHeader: {
        color: '#ffffff',
        fontSize: 20,
        fontWeight: 500,
        textAlign: 'center',
        lineHeight: 30,
        fontFamily:'Exo-SemiBold',
    },
    editModalTextCaption: {
        color: '#ffffff',
        fontSize: 15,
        fontWeight: 500,
        textAlign: 'center',
        lineHeight: 30,
        fontFamily:'Exo-Regular',
    },


    exitModalActions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    exitModalExitText: {
        color: '#99F9FF',
        fontSize: 23,
        fontWeight: 500,
    },

    stayButton: {
        width: 115,
        height: 45,
        marginLeft:20,
    },
    
});
export default CreateChallenge;