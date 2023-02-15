import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "column",
    // margin: 10,
    backgroundColor: '#FAF9F6',
    justifyContent: "center",

  },
  image: {
    flex: 1,
    // alignContent:"center",
    // justifyContent:"center",
    // alignItems:"center",

  },
  text: {
    color: 'green',
    fontSize: 32,
    // lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,

  },
  input: {
    height: 40,

    margin: 10,
    borderWidth: 1,
    padding: 6,
    backgroundColor: "none",
    borderRadius: 32,
    borderColor: "black",
    
    alignItems:"center",
    alignSelf:"center",
    width:200,

  },

  inputBorderless: {
    height: 40,

    margin: 18,
    borderWidth: 0,
    padding: 6,
    backgroundColor: "none",
    borderRadius: 32,
    borderColor: "black",

  },
  buttoncontainer: {

    flexDirection: 'row',




  },

  inputtext: {
    alignItems: "center",

    fontSize: 18,
    justifyContent: "center",
    textAlign: "center",
    // marginLeft: 70,
marginRight:60




  },
  loginbox: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    margin: 36,
  },
  iconimg: {
    height: 20,
    width: 70,
    alignSelf:"center"



  },

  paragraph: {

    fontSize: 14,
    textAlign: "center",
    margin: 16
  },

  paragraph2: {
    margin: 6,
    fontSize: 14,
    textAlign: "center",
  },
  inputbox: {
    borderColor: "none",
    borderWidth: 0,
    textAlign:"center",
  },
  inputtxt:{
    fontSize:20,
    textAlign:"center",
    margin:50,
    color:"green",
  }

});
