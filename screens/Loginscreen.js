import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, SafeAreaView, TextInput, Button, TouchableOpacity } from 'react-native';

import { styles } from '../Component/Stylesheet';

import { Loginscreenimg ,facebookicon} from '../Constant/Constant';

import {  CustomButton } from '../Component/Buttons';
import { Colors } from 'react-native/Libraries/NewAppScreen';


export default function Loginscreen({ navigation }) {

    return (

        <SafeAreaView style={styles.container}>


            <Text style={styles.text}> HOMEMAID </Text>


            <CustomButton buttoncolor="tomato" title="Book Cleaner" ></CustomButton>

            <CustomButton buttoncolor="green" title="Login" handler={() => navigation.navigate("Loginsecond")} >
                
            </CustomButton>



            <ImageBackground style={styles.image} resizeMode="contain" source={Loginscreenimg}>

            </ImageBackground>



        </SafeAreaView>




    )
}
