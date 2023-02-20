import { ImageBackground, StyleSheet, Text, View, SafeAreaView, Button, TouchableOpacity, Image } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Stack, TextInput, IconButton } from "@react-native-material/core";

import { styles } from '../Component/Stylesheet';

import { Textinputbox } from '../Component/Buttons';

export default function Facebooklogin() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
            <Stack spacing={2} style={{ margin: 16 }}>
    <TextInput
      label="Label"
      leading={props => <Icon name="account" {...props} />}
    />
    <TextInput
      label="Label"
      variant="outlined"
      trailing={props => (
        <IconButton icon={props => <Icon name="eye" {...props} />} {...props} />
      )}
    />
    <TextInput label="Label" variant="standard" />
  </Stack>

            <Button title="Click Me" style={{ alignSelf: "center", marginTop: 40 }}/>


            </View>

        </SafeAreaView>

    )
}
