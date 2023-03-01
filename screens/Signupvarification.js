import { ImageBackground, StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity, Image } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Stack, TextInput, IconButton, Box } from "@react-native-material/core";

import { styles } from '../Component/Stylesheet';

import { Textinputbox } from '../Component/Buttons';
import { CustomsimpleButton } from '../Component/Buttons';
import React, { useEffect, useState } from 'react';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';

export default function Signupvarification({navigation}){
    const [form,setForm]=useState({});


    const handleFormChange=(event,target)=>{
        setForm(state=>({...state,[target]:event.text}));
    }

    return(
        <SafeAreaView>
            <View>
                <View style={{marginTop:60,justifyContent:"center",alignContent:"center",alignItems:"center"}}>
                <Text style={{color:"black",fontSize:16,alignSelf:"center"}} >Enter your email below and we will send you a secure link to reset your Password</Text> 
                </View>

                <View style={{marginTop:60,justifyContent:"center"}}>
                    <TextInput style={{margin:24}} variant="standard" name="email" InputLabelProps={{ shrink: true }}   value={form['email']} onChange={(event) => handleFormChange(event.nativeEvent,'email')} label='Email'  />

                </View>

                <View style={{marginTop:36}}>
                    <Text style={{alignSelf:"center",color:"#ff7f50"}}>Invalid email address</Text>
                </View>

                <View style={{marginTop:40}}>
                    <CustomsimpleButton buttoncolor="#ff7f50" name="Resend password" Handler={()=>navigation.navigate("Fbsignupvarification")}/>
                </View>
              
            </View>
        </SafeAreaView>
    )
}