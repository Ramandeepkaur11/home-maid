import { Text, TouchableOpacity, Image, View, TextInput } from "react-native";
import { styles } from "./Stylesheet";
import { Facebookicon } from "../Constant/Constant";
export const CustomButton = (props) => {

  
        return (<TouchableOpacity style={{...styles.input,backgroundColor:props.buttoncolor  || "none"}} onPress={props.handler}>
            <View style={styles.buttoncontainer}>
                <Image style={styles.iconimg} resizeMode="contain" source={props.Image}></Image>

                <Text style={styles.inputtext}>{props.title} </Text>

            </View>

        </TouchableOpacity>)
    
}
export const Textinputbox = (props) => (<TextInput style={styles.loginbox} placeholder={props.name}></TextInput>);

export const Inputbox = (props) => (<TouchableOpacity onPress={props.handler}><Text style={styles.inputtxt}>{props.title}</Text></TouchableOpacity>)
