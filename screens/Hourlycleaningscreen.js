import React, { useState, useEffect } from 'react';
import { Button, View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Stack, TextInput, IconButton, Box, } from "@react-native-material/core";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { CustomsimpleButton, Customrowbutton } from '../Component/Buttons';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import CalendarStrip from 'react-native-calendar-strip';
import * as Location from 'expo-location';
import { Marker } from "react-native-maps";

export default function Hourlycleaning() {

    const [location, setLocation] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        locationChange();
    }, []);
    const onDateSelectedHandler = (event) => {
        console.log(event, 'evv');
        locationChange();
    }

    const locationChange = (async () => {

        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation({
            longitude: location.coords.longitude,
            latitude: location.coords.latitude,
        });
    });
    return (
        <SafeAreaView style={{justifyContent:"space-between"}}>
            <TextInput variant="outlined" style={{ marginTop: 20 }} placeholder="Your address" />
            <View style={{backgroundColor:"pink"}}>
                <MapView style={{ height: 50, width: `100%` }} initialRegion={location} >
                    <Marker coordinate={location} />
                   
                </MapView>
            </View>
            <View style={{ marginTop: 10, }}>
                <TextInput variant="outlined" style={{ marginTop: 40 }} placeholder="Time" />
            </View>

            <View style={{marginTop:20 }}>
                <CalendarStrip

                    calendarAnimation={{ type: 'sequence', duration: 30 }}
                    daySelectionAnimation={{
                        type: 'border',
                        duration: 200,
                        borderWidth: 1,
                        borderHighlightColor: 'white',

                    }}
                    style={{ height: 100, paddingTop: 20, paddingBottom: 10 }}
                    calendarHeaderStyle={{ color: 'black' }}
                    calendarColor={'white'}
                    dateNumberStyle={{ color: 'black' }}
                    dateNameStyle={{ color: 'black' }}
                    highlightDateNumberStyle={{ color: 'white' }}
                    highlightDateNameStyle={{ color: 'white' }}
                    disabledDateNameStyle={{ color: 'grey' }}
                    disabledDateNumberStyle={{ color: 'grey' }}
                    onDateSelected={onDateSelectedHandler}
                //   datesWhitelist={datesWhitelist}
                //   datesBlacklist={datesBlacklist}
                //   iconContainer={{ flex: 0.1 }}
                />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 20 }}>
                <Customrowbutton name="Morning" />
                <Customrowbutton name="Afternoon" />
                <Customrowbutton name="Evening" />

            </View>
            <View style={{marginTop:10}}>
            <TextInput variant="outlined" style={{ marginTop: 40 }} placeholder="Name" />  
            <Text style={{fontSize:16,fontWeight:"300"}}>Note for cleaner....</Text>
            </View>

        </SafeAreaView>
    )
}
