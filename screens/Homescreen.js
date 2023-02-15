
import { Text, View, ImageBackground, Image, SafeAreaView } from 'react-native';

import React, { useEffect, useState } from 'react';

import { styles } from '../Component/Stylesheet';


import { Homescreendimg, Iconimg } from '../Constant/Constant';

import { Icon } from '../Constant/Constant';



export default function Homescreen({ navigation }) {

    const [seconds, setSeconds] = useState(0);


    useEffect(() => {

        // setTimeout(() => {
        //     setSeconds(seconds + 1)
        //     if (seconds === 5) {
        //         navigation.navigate("Login")
        //     }

        // }, 1000);
    });


    return (
        <SafeAreaView style={{ ...styles.container, flexDirection: 'column', justifyContent: 'space-around' }}>



            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' ,alignItems:"center" ,backgroundColor:"yellow"}}>

                <Image style={{...styles.iconimg,flex:1}} resizeMode="contain" source={Iconimg} />

                
            </View>
            <View style={{flex:1,backgroundColor:"red",alignItems:"center",justifyContent:"flexstart"}}>
            <Text style={{ ...styles.text,fontSize:32,color:"#14812B",marginVertical:0 }}> HOMEMAID </Text>
            </View>

            

            <View style={{ flex: 4, paddingTop: 100, display: 'flex', flexDirection: 'column'}}>
                {/* <Image style={{ ...styles.image, width: '80%', height: 100, alignSelf: 'center',marginBottom:-150 }} resizeMethod="scale" resizeMode="contain" source={Homescreendimg} /> */}
                <ImageBackground style={{ ...styles.image,backgroundColor:"green" }} resizeMode="cover" source={Homescreendimg}>



                </ImageBackground>

            </View>

        </SafeAreaView>


    )

}


