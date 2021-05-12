import React, { useState, useEffect } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput,
    TouchableOpacity,
 } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthParamList } from '../components/AuthParamList';


export default function MedicationReminder({navigation}: {navigation: StackNavigationProp<AuthParamList, 'MedicationReminder'>}){
    const [patientName, setpatientName] = useState('');
    const [data, setData] = useState([]);
    const [patientPhonenumber, setpatientPhonenumber] = useState('');
    const [medicationName, setMedicationName] = useState('');
    const [patientLocation, setpatientLocation] = useState('');
    //OpenFDA API Call
    // console.log(data)
    // useEffect(() => {
    //   fetch('https://api.fda.gov/drug/event.json')
    //     .then((response) => response.json())
    //     .then((json) => setData(json.results[0].patient.drug))
    //     .catch((error) => console.error(error))
 
    // }, []);
    const checkMedicationName = () => {
      if (!medicationName.trim()){
        console.log('Not picked');
      } else {
        navigation.navigate('AddMedication')
      }
    }
    return (
    <View style={styles.container}>
      <View style={styles.inputView}>
            <TextInput
                style={styles.inputText}
                placeholder="Full Name"
                placeholderTextColor="#003f5c"
                onChangeText={(patientName) => setpatientName(patientName)}
            />
        </View>
        <View style={styles.inputView}>
            <TextInput
                style={styles.inputText}
                placeholder="Phone Number"
                keyboardType="numeric"
                placeholderTextColor="#003f5c"
                onChangeText={(patientPhonenumber) => setpatientPhonenumber(patientPhonenumber)}
            />
        </View>
        <View style={styles.inputView}>
            <TextInput
                style={styles.inputText}
                placeholder="Medication name"
                placeholderTextColor="#003f5c"
                onChangeText={(medicationName) => setMedicationName(medicationName)}
            />
        </View>
        <TouchableOpacity style={styles.loginBtn} onPress={checkMedicationName}>
                <Text style={styles.loginText}>Next</Text>
        </TouchableOpacity> 
    </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#d1d1e0",
        alignItems: 'center',
        width: "100%"
      },
      inputView:{
        width:"90%",
        marginTop:"10%",
        backgroundColor:"#ffffff",
        height:50,
        marginBottom:7,
        justifyContent:"center",
        padding:20
      },
      inputText:{
        height:50,
        color:"black"
      },
      forgot:{
        color:"white",
        fontSize:11
      },
      loginBtn:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
      },
      loginText:{
        color:"white"
      } 
});
