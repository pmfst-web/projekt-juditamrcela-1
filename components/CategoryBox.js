import react from 'react'
import {View, Text,StyleSheet,TouchableOpacity,Image} from 'react-native'

const CategoryBox=({imgUrl,title})=>{
  return(
    <TouchableOpacity style={styles.wrap}>
    <Image style={styles.image} source={{
      uri:imgUrl
    }}/>
      <Text style={styles.text}>
      {title}
      </Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  wrap:{
    margine:5,
    padding:5,
    positon:'relative',
  },
  image:{
    height:60,
    width:60,
    borderRadius:5,
   

  },
  text:{
    color:"#cbd5e0",
    position:'absolute',
    bottom:5,
    right:5,

  



  }

})
export default CategoryBox
