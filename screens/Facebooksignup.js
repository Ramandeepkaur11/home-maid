import { ImageBackground, StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity, Image } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Stack, TextInput, IconButton, Box } from "@react-native-material/core";

import { styles } from '../Component/Stylesheet';

import { Textinputbox } from '../Component/Buttons';
import { CustomsimpleButton } from '../Component/Buttons';
import React, { useEffect, useState } from 'react';
import { isEnabled } from 'react-native/Libraries/Performance/Systrace';

export default function Facebooksignup({navigation}) {

    const [count, setCount] = useState(0);

    const [agree, setAgree] = useState("false");

    const [isDisabled, setIsDisabled] = useState(false);

    let time=0;
    let intervalId;


    const handleResend = () => {

        setIsDisabled(true);
        time = 60;
        handleInterval();
    }

    const handleInterval=()=>{

        intervalId=setInterval(()=>{
            if(time <= 0){
                setIsDisabled(false);
                clearInterval(intervalId);
            
            }else{
                time--;
                setCount(time);
            }
        },1000);
    }
    useEffect(() => {

    }, []);



    return (
        <SafeAreaView>
            <View style={{ justifyContent: "center", alignContent: "center", alignItems: "center" }}>
                <Text style={{ marginTop: 60, fontSize: 16 }}>we have sent you a verification code to</Text>
                <TextInput></TextInput>
                <Text style={{ fontSize: 20, fontWeight: "bold", shadowOpacity: 0.2, marginTop: 40 }}>ENTER CODE HERE</Text>




            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around", alignItems: "center", marginTop: 30 }}>
                <TextInput style={{ marginStart: 40 }}></TextInput>
                <TextInput style={{}}></TextInput>
                <TextInput style={{}}></TextInput>
                <TextInput style={{ marginEnd: 40 }}></TextInput>
            </View>

            <View style={{ justifyContent: "center", alignContent: "center", alignItems: "center", marginTop: 40 }}>
                <Text style={{ color: "#ff7f50" }}>Invalid code?</Text>
            </View>

            <View style={{ justifyContent: "center", alignItems: "center", alignContent: "center", marginTop: 40 }}>
                <CustomsimpleButton name="Verify" buttoncolor="#ff7f50" Handler={()=>navigation.navigate("signupvarification")}/>
            </View>

            <View style={{ justifyContent: "center", alignContent: "center", alignItems: "center", marginTop: 20 }}>

                <Text style={{ fontSize: 14, }}>Resend after 00:{count}</Text>


            </View>
            <View style={{ justifyContent: "center", alignContent: "center", alignItems: "center", marginTop: 30 }}>

                <TouchableOpacity onPress={handleResend} disabled={isDisabled} style={{ height: 40, width: 100, borderWidth: 0, 
                alignSelf: "center", justifyContent: "center"}}>

                    <Text style={{ alignSelf: "center",color:isDisabled? "#ff7f50" : "undefined"}}>Resend code </Text></TouchableOpacity>
            </View>



        </SafeAreaView>
    )
}
