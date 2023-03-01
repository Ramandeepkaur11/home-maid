import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, SafeAreaView, TextInput, Button, TouchableOpacity, Image } from 'react-native';

import { styles } from '../Component/Stylesheet';

import { Loginscreenimg, facebookicon } from '../Constant/Constant';

import { CustomButton } from '../Component/Buttons';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import { Iconimg } from '../Constant/Constant';
import { CustomsimpleButton} from '../Component/Buttons';

export default function Loginscreen({ navigation }) {

    return (

        <SafeAreaView style={styles.container}>

            <View style={{ flex: 1, marginTop: 50, flexDirection: "column" }}>

                <Image style={{ ...styles.iconimg }} resizeMode="contain" source={Iconimg} />

                <Text style={{ ...styles.text, marginTop: 0, shadowOpacity: 0.1 }}> HOMEMAID </Text>

            </View>


            <View style={{ flex: 1, marginTop: 40, flexDirection: "column",justifyContent:"flex-end"}}>

                {/* <CustomButton  buttoncolor="#ff7f50" title="Book Cleaner" style={{...styles.inputone}} ></CustomButton> */}

                <CustomsimpleButton buttoncolor="#ff7f50" name="Book cleaner"/>


            </View>

            <View style={{ flex: 1, marginTop: 20, flexDirection: "column" }}>
                <CustomsimpleButton  name="Login" buttoncolor="#9ACD32" Handler={()=>navigation.navigate("Loginsecond")}/>



            </View>
            <View style={{ flex: 3, flexDirection: "column" }}>

                <ImageBackground style={styles.image} resizeMode="contain" source={Loginscreenimg}>

                </ImageBackground>
            </View>


        </SafeAreaView>




    )
}
