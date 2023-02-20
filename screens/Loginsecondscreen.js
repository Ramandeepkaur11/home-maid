import { ImageBackground, StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Image } from 'react-native';

import { styles } from '../Component/Stylesheet';

import { CustomButton } from '../Component/Buttons';
import { Facebookicon } from '../Constant/Constant';
import { Inputbox } from '../Component/Buttons';
import { CustomsimpleButton } from '../Component/Buttons';

export default function Loginsecondscreen({ navigation }) {
    return (
        <SafeAreaView>
            <View style={{ marginTop: 40 }}>

                <TextInput style={styles.loginbox}></TextInput>

                <TextInput style={styles.loginbox}></TextInput>

            </View>

            <View style={{justifyContent:"flex-end",alignItems:"flex-end",marginTop:-24}}>
                <Text style={styles.paragraph}> Forget Password? </Text>
            </View>

            <View style={{ marginTop: 40 ,justifyContent:"center"}}>
                <CustomsimpleButton name="Login" buttoncolor="#ff7f50"/>

                {/* <CustomButton buttoncolor="#ff7f50" title="Login" handler={() => navigation.navigate("")} /> */}

            </View>

            

            <View style={{marginTop:30,justifyContent:"center"}}>
                <Text style={styles.paragraph2}>Login with</Text>
            </View>



<View style={{marginTop:46,flexDirection:"column",justifyContent:"center",flex:1,}}>
    <TouchableOpacity style={{height:46,backgroundColor:"#394D7B" ,width:200,borderRadius:32,alignSelf:"center",flexDirection:"row",justifyContent:"flex-start"}}>
    <Image source={Facebookicon} style={{height:32,width:30,marginStart:46,marginTop:7}}></Image>
        <Text style={{fontWeight:"bold",marginTop:18, color:"white",fontSize:14,fontWeight:"bold",marginStart:6,marginTop:14}}>Facebook</Text>
        
        </TouchableOpacity>


{/* <CustomButton buttoncolor="yellow" Image={Facebookicon} title="Facebook" handler={() => navigation.navigate("")} ></CustomButton> */}

</View>

            
            <View style={{marginTop:180}}>

                <Inputbox title="signup" handler={() => navigation.navigate("Signup")}></Inputbox>

            </View>



            {/* <TouchableOpacity style={styles.input}><Text style={styles.inputtext}>Login</Text></TouchableOpacity> */}

        </SafeAreaView>
    )
}