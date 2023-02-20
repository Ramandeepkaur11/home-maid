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
    color: '#9ACD32',
    fontSize: 30,
    // lineHeight: 84,
    fontWeight: 'bold',

    margin: 10,
    alignSelf:"center",

  },
  inputone: {
    height: 46,


  
    // padding: 6,
    
    borderRadius: 32,
  
    alignContent:"center",
    alignItems:"center",
    alignSelf:"center",
    width:200,
    shadowOpacity:0.8,
    shadowRadius:4,
  shadowColor:"grey",
  justifyContent:"center",

 

  },
  inputtwo: {
    height: 40,

    // margin: 10,
    borderWidth: 1,
    padding: 6,
    backgroundColor: "none",
    borderRadius: 32,
    borderColor: "black",
    marginTop:5,
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

    flexDirection: "column",
justifyContent:"center",
alignItems:"center",
alignContent:"center"



  },

  inputtext: {
    // alignItems: "center",

    fontSize: 18,
    
    // justifyContent: "center",
    // textAlign: "center",
    // marginLeft: 70,

color:"white",





  },
  loginbox: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    margin: 36,
  },
  iconimg: {
    height: 50,
    width: 70,
    alignSelf:"center"



  },

  paragraph: {

    fontSize: 14,
    // textAlign: "center",

    color:"#9ACD32",
    fontWeight:"bold",
    // alignSelf:"center"
  },

  paragraph2: {
    margin: 6,
    fontSize: 16,
    textAlign: "center",
    fontWeight:"bold"
  },
  inputbox: {
    borderColor: "none",
    borderWidth: 0,
    textAlign:"center",
    
  },
  inputtxt:{
    fontSize:20,
    textAlign:"center",

    color:"#9acd32",
    fontWeight:"bold"
  },
  paragraphthree: {

    fontSize: 14,
    // textAlign: "center",

    color:"#9ACD32",
    fontWeight:"bold",
    // alignSelf:"center"
  },

});
