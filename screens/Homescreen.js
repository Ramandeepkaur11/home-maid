import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground, } from 'react-native';
import React, { useEffect, useState } from 'react';

import Login from './Loginscreen';

import { Homescreendimg } from '../Constant/Constant';



export default function Homepage({ navigation }) {

    const [seconds, setSeconds] = useState(0);


    useEffect(() => {

        setInterval(() => {

            setSeconds(seconds + 1);

            if (seconds === 5) {

                navigation.navigate("Login");



            }
        }, 1000);
    })

    return (
        <View style={styles.container}>






            <Text style={styles.text}> HOMEMAID </Text>


            <ImageBackground style={styles.image} resizeMode="cover" source={Homescreendimg}>

            </ImageBackground>

        </View>
    )

}
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        margin: 10,
        backgroundColor: '#FAF9F6',
    },
    image: {
        flex: 1,

    },
    text: {
        color: 'green',
        fontSize: 32,
        // lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
       
    
    },
});

