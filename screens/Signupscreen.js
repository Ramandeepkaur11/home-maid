import { ImageBackground, StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';

import { styles } from '../Component/Stylesheet';

import { CustomButton } from '../Component/Buttons';
import { Facebookicon } from '../Constant/Constant';
import { Textinputbox } from '../Component/Buttons';
import { Inputbox } from '../Component/Buttons';
export default function Signupscreen() {
    return (
        <SafeAreaView style={styles.container}>
            <Textinputbox name=" Enter name"></Textinputbox>

            <Textinputbox name="Gmail"></Textinputbox>

            <Textinputbox name="Phone number"></Textinputbox>

            <Textinputbox name="Password"></Textinputbox>

            <CustomButton buttoncolor ="tomato" title="Signup" ></CustomButton>

            <Text style={styles.paragraph}>Sign up with</Text>

            <CustomButton buttonColor="white" title="Facebook" Image={Facebookicon}></CustomButton>

            <Inputbox title="Login"></Inputbox>

        </SafeAreaView>
    )
}