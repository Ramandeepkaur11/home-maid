
import { Text, View, ImageBackground, Image, SafeAreaView } from 'react-native';

import React, { useEffect, useState } from 'react';

import { styles } from '../Component/Stylesheet';


import { Homescreendimg, Iconimg } from '../Constant/Constant';

import { Icon } from '../Constant/Constant';



export default function Homescreen({ navigation }) {

    const [seconds, setSeconds] = useState(0);


    useEffect(() => {

        setTimeout(() => {
            setSeconds(seconds + 1)
            if (seconds === 5) {
                navigation.navigate("Login")
            }

        }, 1000);
    });


    return (
        <SafeAreaView style={styles.container}>







            {/* <Image style={styles.iconimg} resizeMode="stretch" source={Iconimg} /> */}





            <ImageBackground style={styles.image} resizeMode="contain" source={Homescreendimg}>

            {/* <Image style={styles.iconimg} resizeMode="contain" source={Iconimg} /> */}

                <Text style={styles.text}> HOMEMAID </Text>

            </ImageBackground>


        </SafeAreaView>


    )

}


