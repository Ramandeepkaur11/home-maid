import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import Homescreen from './screens/Homescreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginscreen from './screens/Loginscreen';
import Loginsecondscreen from './screens/Loginsecondscreen';
import Signupscreen from './screens/Signupscreen';
import Facebooklogin from './screens/Facebooklogin';
import Facebooksignup from './screens/Facebooksignup';
import Signupvarification from './screens/Signupvarification';
import Fbsignupvarification from './screens/Fbsignupvarification';
import Booking from './screens/Bookingscreen';
import AuthStack from './screens/AuthStack';
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';



export default function App() {
  return (
    <NavigationContainer>
      <AuthStack></AuthStack>
    </NavigationContainer>

  );
}


