import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View,Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Bellicon } from '../../Constant/Constant';

import {  NotificationsScreen } from './Main';
import Booking from '../Bookingscreen';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Drawer = createDrawerNavigator();

export default function Mydrawer() {
  return (
    
      <Drawer.Navigator   screenOptions={{headerShown:false}}>
        <Drawer.Screen    name='Booking' component={Booking} options={{headerShown:true,    headerRight:()=>(
            <View>
                <Image style={{height:20,width:20,marginEnd:20}} source={Bellicon}/>
            </View>
        )}} >
        
        </Drawer.Screen>
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        
      </Drawer.Navigator>
    
  );
}