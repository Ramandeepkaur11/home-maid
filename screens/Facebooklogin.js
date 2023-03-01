import { ImageBackground, StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity, Image } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Stack, TextInput, IconButton, Box } from "@react-native-material/core";

import { styles } from '../Component/Stylesheet';

import { Textinputbox } from '../Component/Buttons';

import { CustomsimpleButton } from '../Component/Buttons';
import { useState } from 'react';

export default function Facebooklogin({ navigation }) {

    const [form,setForm]=useState({});


    const handleFormChange=(event,target)=>{
        setForm(state=>({...state,[target]:event.text}));
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={{ marginTop: 40, flex: 1, justifyContent: "center"}}>

                <Box w={100} h={100} style={{ backgroundColor: "white", borderRadius: 50, alignSelf: "center", borderColor: "black", borderWidth: 1, position: "absolute", zIndex: -1 }}>
                    <Image style={{ height: 30, width: 25, alignSelf: "flex-end", marginTop: 60,backgroundColor:'white' }} source={require("../assets/Images/Fbprofile.png")}></Image></Box>

            </View>

            <View style={{ marginTop: 20, flex: 1, paddingHorizontal:30,justifyContent:"space-around"}}>

                <TextInput variant="standard" name="name" InputLabelProps={{ shrink: true }}   value={form['name']} onChange={(event) => handleFormChange(event.nativeEvent,'name')} label="Name"  />

                <TextInput variant="standard" name="email" InputLabelProps={{ shrink: true }}   value={form['email']} onChange={(event) => handleFormChange(event.nativeEvent,'email')} label='Email'  />

                <TextInput variant="standard" name='phone' InputLabelProps={{ shrink: true }}   value={form['phone']} onChange={(event) => handleFormChange(event.nativeEvent,'phone')} label='Phone'  />


            </View>

            <View style={{ marginTop: 20, flex: 1 }}>

                <CustomsimpleButton name="Complete sign up" buttoncolor="#ff7f50" Handler={() => navigation.navigate("Facebooksignup")}></CustomsimpleButton>

            </View>

        </SafeAreaView>

    )
}
