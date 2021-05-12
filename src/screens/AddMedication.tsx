import React, { useState, useEffect, Component } from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput,
    TouchableOpacity,
    CheckBox,
 } from 'react-native';

 export default function AddMedication({navigation}: {navigation: any}, medicationname: string){
    const [medicationName, setmedicationName] = useState(medicationname);
    const [isSelectedPRN, setSelectionPRN] = useState(false);
    const [inventoryPills, setInventoryPills] = useState('');
    const [patientName, setpatientName] = useState('');
    const [medicationMode, setMedicationMode] = useState('');
    const [medicationDuration, setMedicationDuration] = useState('');
    const [medicationFrequency, setMedicationFrequency] = useState('');
    const [medicationReminder, setMedicationReminder] = useState('');

    const durationNavigation = () => {
      navigation.navigate('DurationPicker')
    }

    const frequencyNavigation = () => {
      navigation.navigate('MedicationFrequency')
    }
    return(
        <View style={styles.container}>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Medication name"
                    placeholderTextColor="#003f5c"
                    onChangeText={(medicationName) => setmedicationName(medicationName)}
                />
            </View>
            <View style={styles.checkboxvi}>
                <Text style={styles.label}>As needed (PRN)</Text>
                <CheckBox
                    value={isSelectedPRN}
                    onValueChange={setSelectionPRN}
                    style={styles.checkbox}
                />
            </View>
            <View style={styles.inventoryPill}>
              {!isSelectedPRN &&
                <View style={{ width: '90%'}}>
                <View style={{marginBottom: 30}}>
                  <TouchableOpacity style={styles.touchableposition} onPress={durationNavigation}>
                    <Text>Duration</Text>
                    <Text>No end date</Text>
                  </TouchableOpacity>
                </View>
                <View>
                  <TouchableOpacity style={styles.touchableposition} onPress={frequencyNavigation}>
                    <Text>Frequency of intake</Text>
                    <Text>Daily</Text>
                  </TouchableOpacity>
                  </View>
                </View>
              }
            </View>
            <View style={styles.inputView}>
                    <TextInput
                      style={styles.inputText}
                      placeholder="Number of Pills"
                      placeholderTextColor="#003f5c"
                      keyboardType="numeric"
                      onChangeText={(inventoryPills) => setInventoryPills(inventoryPills)}
                    />
            </View>
            <View>
              <Text style= {{textAlign: 'center'}}>pill(s)</Text>
            </View>
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>Save</Text>
            </TouchableOpacity> 
        </View>
    )
 }



// export class PRNSelected extends Component{
//     state = {inventoryPills: 0}
    
//     render() {
//       const checkMedicationName = () => {
//         console.log('Save' + this.state.inventoryPills);
//       }
//       return(
//         <View style={styles.container}>
//           <View style={styles.inputView}>
//             <TextInput
//                     style={styles.inputText}
//                     placeholder="Number of Pssdills"
//                     placeholderTextColor="#003f5c"
//                     keyboardType="numeric"
//                     onChangeText={() => this.state.inventoryPills}
//                     onFocus={() => true}
//             />
//           </View>
//           <View>
//           <Text style= {{textAlign: 'center'}}>pill(s)</Text>
//           </View>
//         <TouchableOpacity onPress={checkMedicationName} style={styles.loginBtn}>
//                 <Text style={styles.loginText}>Save</Text>
//         </TouchableOpacity> 
//         </View>
//       )
//     }
// }


// export class DurationMedication extends Component{
//   state = {inventoryPills: 0}
  
//   render() {
//     const checkMedicationName = () => {
//       console.log('Save' + this.state.inventoryPills);
//     }
//     return(
//       <View style={styles.container}>
//         <View style={styles.inputView}>
//           <TextInput
//                   style={styles.inputText}
//                   placeholder="Number of Pills"
//                   placeholderTextColor="#003f5c"
//                   keyboardType="numeric"
//                   onChangeText={() => this.state.inventoryPills}
//                   onFocus={() => true}
//           />
//         </View>
//         <View>
//         <Text style= {{textAlign: 'center'}}>pill(s)</Text>
//         </View>
//       <TouchableOpacity onPress={checkMedicationName} style={styles.loginBtn}>
//               <Text style={styles.loginText}>Save</Text>
//       </TouchableOpacity> 
//       </View>
//     )
//   }
// }



 const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#d1d1e0",
        alignItems: 'center',
        width: "100%"
      },
      touchableposition: {

      },
      checkboxvi:{
        marginTop:"10%",
        width: "90%",
        flexDirection:'row', 
        flexWrap:'wrap',
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
      inventoryPill:{
        marginTop:"10%",
        width: "90%",
        flexDirection:'column', 
        flexWrap:'wrap',
      },
      inputText:{
        height:50,
        color:"black"
      },
      checkbox: {
        justifyContent: 'flex-end',
      },  
      label: {
        margin: 8,
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