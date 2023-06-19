import { StyleSheet } from "react-native";

export default StyleSheet.create({
container:{
    padding:10,
    flexDirection:'row'

},
image:{
    width:100,
    height:100,
    borderRadius:50
},
inner_container:{
    padding:10,
},
title:{
    fontWeight:'bold',
    fontSize:18
},
info_container:{
    flexDirection:'row',
    marginTop:5,
    alignItems:'center'

},
year:{
    marginLeft:10
},
soldout_container:{
    marginLeft:5,
    borderWidth:1,
    borderColor:'red',
    padding:3,
    borderRadius:2

},
soldout_title:{
color:'red'
},
content_container:{
    flexDirection:'row',
    marginTop:5
}


},
)