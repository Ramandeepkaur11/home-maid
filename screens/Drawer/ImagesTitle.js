import React from 'react';
import { Button, View, Text, Image, TouchableOpacity } from 'react-native';

export const ImageTitle = (props) => {

    return (
        <View style={{ flex: 1,flexDirection:"row",}}>

            <TouchableOpacity onPress={props.Handler} style={{}}>

                <Image style={{ height: 70, width: 70 ,alignSelf:"center"}} source={props.Image} />

                <Text style={{ fontSize: 14, fontWeight: "600",alignSelf:"center"}}>{props.title}</Text>

            </TouchableOpacity>

        </View>
    )



}