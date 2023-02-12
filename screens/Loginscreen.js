import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { styles } from './Homescreen';
import { Loginscreenimg } from '../Constant/Constant';
export default function Login({navigation}){
    return(
        <View style={styles.container}>
           <ImageBackground style={styles.image} resizeMode="cover" source={Loginscreenimg}></ImageBackground> 
        </View>
    )
}
