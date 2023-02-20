import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Homescreen from './screens/Homescreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginscreen from './screens/Loginscreen';
import Loginsecondscreen from './screens/Loginsecondscreen';
import Signupscreen from './screens/Signupscreen';
import Facebooklogin from './screens/Facebooklogin';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Name" component={Homescreen} options={{headerShown:false}}/>

        <Stack.Screen name="Login" component={Loginscreen} options={{headerShown:false}}/>

        <Stack.Screen name="Loginsecond" component={Loginsecondscreen} options={{headerShown:false}}/>

        <Stack.Screen name="Signup" component={Signupscreen} options={{headerShown:false}}/>

        <Stack.Screen name="Facebooklogin" component={Facebooklogin} options={{headerShown:false}}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}


