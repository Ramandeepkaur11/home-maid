import { ImageBackground, StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';

import { styles } from '../Component/Stylesheet';

import { CustomButton, CustomsimpleButton } from '../Component/Buttons';
import { Facebookicon } from '../Constant/Constant';
import { Textinputbox } from '../Component/Buttons';
import { Inputbox } from '../Component/Buttons';
export default function Signupscreen({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ justifyContent:"center",marginTop:36}}>
                <Textinputbox name=" Enter name"></Textinputbox>

                <Textinputbox name="Gmail"></Textinputbox>

                <Textinputbox name="Phone number"></Textinputbox>

                <Textinputbox name="Password"></Textinputbox>
            </View>

            <View style={{ justifyContent: "center",marginTop:6}}>
                <CustomsimpleButton name="Signup" buttoncolor="#ff7f50" />
            </View>

            {/* <CustomButton buttoncolor ="tomato" title="Signup" ></CustomButton> */}
            <View style={{justifyContent:"center",marginTop:10}}>

                <Text style={{...styles.paragraph2}}>Sign up with</Text>

            </View >

            <View style={{  flexDirection: "column", justifyContent: "center",marginTop:10}}>
                <TouchableOpacity  style={{ height: 46, backgroundColor: "#394D7B", 
                width: 200, borderRadius: 32, alignSelf: "center", flexDirection: "row", justifyContent: "flex-start"  }} onPress={()=>navigation.navigate("Facebooklogin")}>
                    <Image source={Facebookicon} style={{ height: 32, width: 30, marginStart: 46, marginTop: 7 }}></Image>
                    <Text style={{ fontWeight: "bold", marginTop: 18, color: "white", fontSize: 14, fontWeight: "bold", marginStart: 6, marginTop: 14 }}>Facebook</Text>

                </TouchableOpacity>
                {/* <CustomButton buttonColor="white" title="Facebook" Image={Facebookicon}></CustomButton> */}
            </View>
            <View style={{justifyContent:"center",marginTop:32}}>
            <Inputbox title="Login"></Inputbox>
            </View>
            

        </SafeAreaView>
    )
}