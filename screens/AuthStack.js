import 'react-native-gesture-handler';

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './Homescreen';
import Loginscreen from './Loginscreen';
import Loginsecondscreen from './Loginsecondscreen';
import Signupscreen from './Signupscreen';
import Facebooklogin from './Facebooklogin';
import Facebooksignup from './Facebooksignup';
import Signupvarification from './Signupvarification';
import Fbsignupvarification from './Fbsignupvarification';
import Mydrawer from './Drawer/Drawernavigator'
import Hourlycleaning from './Hourlycleaningscreen';
import { View, Image } from 'react-native';
import { Bellicon } from '../Constant/Constant';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: "false" }}>
      <Stack.Screen name="Name" component={Homescreen} options={{ headerShown: false }} />

      <Stack.Screen name="Login" component={Loginscreen} options={{ headerShown: false }} />

      <Stack.Screen name="Loginsecond" component={Loginsecondscreen} options={{ headerShown: false }} />

      <Stack.Screen name="Signup" component={Signupscreen} options={{ headerShown: false }} />

      <Stack.Screen name="Facebooklogin" component={Facebooklogin} options={{ headerShown: false }} />

      <Stack.Screen name="Facebooksignup" component={Facebooksignup} options={{ headerShown: false }} />

      <Stack.Screen name="signupvarification" component={Signupvarification} options={{ headerShown: false }} />

      <Stack.Screen name="Fbsignupvarification" component={Fbsignupvarification} options={{ headerShown: false }} />

      <Stack.Screen name="AuthHomeScreen" component={Mydrawer} options={{ headerShown: false }} />

      <Stack.Screen name="Hourly cleaning" component={Hourlycleaning} options={{
        headerShown: true,headerRight:()=>(
          <View>
            <Image style={{height:24,width:24,marginEnd:10}} source={Bellicon}/>
          </View>
        )
      }} />


    </Stack.Navigator>
  );
};

export default AuthStack;