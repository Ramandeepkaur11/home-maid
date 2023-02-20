import { Text, TouchableOpacity, Image, View, TextInput } from "react-native";
import { styles } from "./Stylesheet";
import { Facebookicon } from "../Constant/Constant";
export const CustomButton = (props) => {

  
        return (<TouchableOpacity style={{...styles.inputone,backgroundColor:props.buttoncolor}} onPress={props.handler}>


                <Image style={{height:30,width:40,borderRadius:2,marginTop:18,alignSelf:"flex-start",marginLeft:18}} resizeMode="contain" source={props.Image }></Image>
                <Text style={{alignSelf:"center"}} >{props.title} </Text>
                
        
            

        </TouchableOpacity>)
    
}



export const CustomsimpleButton=(props)=>{
    return(
        (
            <TouchableOpacity style={{...styles.inputone,backgroundColor:props.buttoncolor}} onPress={props.Handler}>
                <Text style={{alignSelf:"center",color:"white",fontSize:16,fontWeight:"bold",shadowOpacity:0.2}}>{props.name}</Text>
            </TouchableOpacity>
        )
    )
}
export const Textinputbox = (props) => (<TextInput style={styles.loginbox} placeholder={props.name}></TextInput>);

export const Inputbox = (props) => (<TouchableOpacity onPress={props.handler}><Text style={styles.inputtxt}>{props.title}</Text></TouchableOpacity>)
