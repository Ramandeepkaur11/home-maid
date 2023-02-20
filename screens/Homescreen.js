
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
        <SafeAreaView style={{ ...styles.container, flexDirection: 'column', justifyContent:"flex-start",alignContent:"space-around",flexWrap:"nowrap",flex:1 }}>



            <View style={{ flex:2, justifyContent:"flex-end" ,alignItems:"center",flexDirection:"column",marginTop:18}}>

                <Image style={{...styles.iconimg}} resizeMode="contain" source={Iconimg} />
                <Text style={{ ...styles.text,marginTop:0}}> HOMEMAID </Text>
                
            </View>

            {/* <View style={{  alignItems:"center",justifyContent:"flex-start", flex:1, flexDirection:"column"}}>

            

            </View> */}

            

            <View style={{ flex:6, flexDirection:"column", backgroundColor:"white",alignContent:"flex-end",justifyContent:"space-around",marginTop:120}}>


                <ImageBackground style={{ ...styles.image,}} resizeMode="cover" source={Homescreendimg}>



                </ImageBackground>

            </View>

        </SafeAreaView>


    )

}


