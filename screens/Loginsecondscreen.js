import { ImageBackground, StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';

import { styles } from '../Component/Stylesheet';

import { CustomButton } from '../Component/Buttons';
import { Facebookicon } from '../Constant/Constant';
import { Inputbox } from '../Component/Buttons';

export default function Loginsecondscreen({ navigation }) {
    return (
        <SafeAreaView>
            <TextInput style={styles.loginbox}></TextInput>

            <TextInput style={styles.loginbox}></TextInput>

            <CustomButton buttoncolor="tomato" title="Login" handler={() => navigation.navigate("")} />
            <Text style={styles.paragraph2} >Forget Password?</Text>
            <Text style={styles.paragraph}>Login with</Text>



            <CustomButton title="Facebook" handler={() => navigation.navigate("")} Image={Facebookicon}></CustomButton>


<Inputbox title="signup" handler={()=>navigation.navigate("Signup")}></Inputbox>


            {/* <TouchableOpacity style={styles.input}><Text style={styles.inputtext}>Login</Text></TouchableOpacity> */}

        </SafeAreaView>
    )
}