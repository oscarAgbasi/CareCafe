import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './../screens/LoginScreen';
import SignupScreen from './../screens/SignupScreen';
import MedicationReminder from './../screens/MedicationReminder';
import AddMedication from './../screens/AddMedication';
import DurationPicker from './../screens/DurationPicker';
import MedicationFrequency from './../screens/MedicationFrequency';
import {AuthParamList} from '../components/AuthParamList';

interface RootStackNavigationProps {

}

const Stack = createStackNavigator<AuthParamList>();

export const RootStackNavigation: React.FC<RootStackNavigationProps> = ({}) => {
        return (
            <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Sign" component={SignupScreen} />
              <Stack.Screen name="AddMedication" component={AddMedication} options={{title: "Add Medication"}}/>
              <Stack.Screen name="MedicationReminder" component={MedicationReminder} />
              <Stack.Screen name="DurationPicker" component={DurationPicker} />
              <Stack.Screen name="MedicationFrequency" component={MedicationFrequency} />
            </Stack.Navigator>
          </NavigationContainer>
        );
}