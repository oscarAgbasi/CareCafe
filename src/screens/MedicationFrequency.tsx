import React, { useState, useEffect, Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput,
    TouchableOpacity,
    CheckBox,
 } from 'react-native';
 import { RadioButton } from 'react-native-paper';

 export default function MedicationFrequency(){
    const [isfrequencyIntake, setisfrequencyIntake] = useState("dXdays");
    return(
        <View style={styles.container}>
             <View style={styles.radioBttn}>
                <RadioButton.Group onValueChange={isfrequencyIntake => setisfrequencyIntake(isfrequencyIntake)} value={isfrequencyIntake}>
                    <RadioButton.Item label="Daily, X times a day" value="dXdays" />
                    <RadioButton.Item label="Daily, every X hours" value="dXhours" />
                    <RadioButton.Item label="Every X days" value="eXdays" />
                    <RadioButton.Item label="Specific days of week" value="sDaysOfWeek" />
                </RadioButton.Group>
            </View>
            {isfrequencyIntake === 'untilDate' &&
                <View>

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
        marginTop:"10%",
        width: "90%",
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
})