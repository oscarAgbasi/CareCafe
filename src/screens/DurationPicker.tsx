import React, { useState, useEffect, Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput,
    TouchableOpacity,
    CheckBox,
    Button
 } from 'react-native';
 import { RadioButton } from 'react-native-paper';
 import DateTimePickerModal from "react-native-modal-datetime-picker";
import { black } from 'react-native-paper/lib/typescript/styles/colors';


 export default function DurationPicker({navigation}: {navigation: any}){
    const [startDate, setStartDate] = useState(new Date());
    const [isEnd, setisEnd] = useState("endDate");
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isEndDatePickerVisible, setEndDatePickerVisibility] = useState(false);
    const [endDate, setEndDate] = useState(new Date());
    const [xDate, setXDate] = useState('');
   
    if(isEnd ==='endDate') {
        endDate.setDate(startDate.getDate() + 10);
    }
    return(
        <View style={styles.container}>
            <View style={{width: '90%', marginTop:20, borderBottomWidth: 1 }}>
                <TouchableOpacity onPress={() => {
                    setDatePickerVisibility(!isDatePickerVisible)}}>
                    <Text>Start date</Text>
                    <Text style = {{marginBottom:20}}>{`${startDate.toLocaleDateString()}`}</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    date={startDate}
                    onConfirm={(startDate) => {setDatePickerVisibility(false); setStartDate(startDate)}}
                    onCancel={() =>setDatePickerVisibility(false)}
                    minimumDate={new Date()}
                />
            </View>
            <View style={styles.radioBttn}>
                <RadioButton.Group onValueChange={isEnd => setisEnd(isEnd)} value={isEnd}>
                    <RadioButton.Item label="No end date" value="endDate" />
                    <RadioButton.Item label="Unitil date" value="untilDate" />
                    <RadioButton.Item label="For X days" value="xDays" />
                </RadioButton.Group>
            </View>
            {isEnd === 'untilDate' && 
            <View style={{width: '90%', marginTop:20}}>
                <TouchableOpacity onPress={() => {
                    setEndDatePickerVisibility(!isEndDatePickerVisible)}}>
                    <Text>End date</Text>
                    <Text>{`${endDate.toLocaleDateString()}`}</Text>
                </TouchableOpacity>
                <DateTimePickerModal
                    isVisible={isEndDatePickerVisible}
                    mode="date"
                    date={endDate}
                    onConfirm={(endDate) => {setEndDatePickerVisibility(false); setEndDate(endDate)}}
                    onCancel={() =>setEndDatePickerVisibility(false)}
                    minimumDate={new Date()}
                />
            </View>
            }
            {isEnd === 'xDays' && 
            <View style={{width: '90%', marginTop:20}}>
                <TouchableOpacity onPress={() => {
                    setEndDatePickerVisibility(!isEndDatePickerVisible)}}>
                    <Text>Duration</Text>
                    <View style={styles.inputView}>
                    <TextInput
                      style={styles.inputText}
                      placeholder="Number days"
                      placeholderTextColor="#003f5c"
                      keyboardType="numeric"
                      onChangeText={(xDate) => setXDate(xDate)}
                    />
            </View>
                </TouchableOpacity>
            </View>
            }
        </View>
    )
 }


 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#d1d1e0",
        alignItems: 'center',
        width: "100%"
    },
    radioBttn:{
        marginBottom: 20,
        width: "90%",
        borderBottomWidth: 1,
        borderBottomColor: 'black',
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
    }


 })