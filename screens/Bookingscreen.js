
import React from 'react';
import { Button, View, Text, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Cleaniconone, Cleanicontwo, Cleaniconthree } from '../Constant/Constant';
import { Stack, TextInput, IconButton, Box } from "@react-native-material/core";

import { ImageTitle } from './Drawer/ImagesTitle';
const Drawer = createDrawerNavigator();

export default function Booking({ navigation }) {
    return (
        < View style={{ flex: 1, }}>

            <View style={{ justifyContent: "center", marginTop: 40 }}>

                <Text style={{ alignSelf: "center", fontSize: 24, fontWeight: "600" }}>Make a new booking</Text>
                <TextInput variant="standard" style={{ alignSelf: "center", minWidth: 100 }} />
            </View>





            <View style={{ justifyContent: "flex-start", flexDirection: "row", marginTop: 40, marginLeft: 50, gap: 10 }}>

                <ImageTitle Image={Cleaniconone} title="Hourly Cleaning" Handler={() => navigation.navigate("Hourly cleaning")} />

                <ImageTitle Image={Cleanicontwo} title="Daily Cleaning" />

            </View>

            <View style={{ justifyContent: "flex-start", flexDirection: "row", marginTop: 40, marginLeft: 44 }}>

                <ImageTitle Image={Cleaniconthree} title="Monthly Cleaning" />

            </View>





        </View>
    )
}