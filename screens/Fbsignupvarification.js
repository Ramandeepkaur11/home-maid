import { ImageBackground, StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity, Image } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Stack, TextInput, IconButton, Box } from "@react-native-material/core";

import { styles } from '../Component/Stylesheet';

import { Textinputbox } from '../Component/Buttons';
import { CustomsimpleButton } from '../Component/Buttons';
import { Correcticon } from '../Constant/Constant';
import React, { useEffect, useState } from 'react';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';
 export default function Fbsignupvarification({navigation}){
    return(
      <SafeAreaView style={{backgroundColor:"#FFFFFF",flex:1}}>
        <View style={{justifyContent:"center",marginTop:140}}>

            <Image source={Correcticon} style={{alignSelf:"center",height:120,width:120,marginTop:60}}></Image>
            
        </View>
        <View style={{justifyContent:"center",}}>
            <Text style={{alignSelf:"center",fontSize:14,fontWeight:"bold"}}>We just sent an email to</Text>
            <Text style={{fontSize:16,fontWeight:"bold",alignSelf:"center",marginTop:14}}>Ramanhundal567@Gmail.com</Text>
            <Text style={{fontSize:16,alignSelf:"center",marginTop:40,margin:4}}>Click the link we sent you and reset password</Text>
        </View>
        <View style={{marginTop:40,justifyContent:"center"}}>

        <CustomsimpleButton name="Login" buttoncolor="#ff7f50" Handler={()=>navigation.navigate("AuthHomeScreen" )}/>
        
        </View>

      </SafeAreaView>  
    )
 }