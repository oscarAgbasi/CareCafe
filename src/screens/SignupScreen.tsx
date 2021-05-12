import React, { useState } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput,
    TouchableOpacity
 } from 'react-native';

import {Layout} from '../components/Layout'
import { StackNavigationProp } from '@react-navigation/stack';
import {AuthParamList} from '../components/AuthParamList';



export default function SignupScreen({navigation}: {navigation: StackNavigationProp<AuthParamList, 'Sign'>}){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    return (
        <Layout>
            <Text style={styles.logo}>Get Started</Text>
            <View style={styles.inputView}>
                <TextInput
                        style={styles.inputText}
                        placeholder="Name"
                        placeholderTextColor="#003f5c"
                        onChangeText={(name) => setName(name)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                        style={styles.inputText}
                        placeholder="E-mail"
                        placeholderTextColor="#003f5c"
                        onChangeText={(email) => setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                        style={styles.inputText}
                        placeholder="Password"
                        placeholderTextColor="#003f5c"
                        onChangeText={(password) => setPassword(password)}
                />
            </View>
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText} onPress={() => navigation.navigate('MedicationReminder')}>SIGNUP</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text 
                  style={styles.loginText}>Login
                </Text>
            </TouchableOpacity>
        </Layout>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#d1d1e0',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
      },
      logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"#fb5b5a",
        marginBottom:40
      },
      inputView:{
        width:"80%",
        backgroundColor:"#ffffff",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
      },
      inputText:{
        height:50,
        color:"black"
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
})