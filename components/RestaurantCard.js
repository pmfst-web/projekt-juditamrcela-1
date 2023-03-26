import react from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native'

const RestaurantCard = ({
  id,
  image,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity style={styles.touchable}>
      <Image
      source={{
        uri:image
      }}
      style={styles.image}/>
      <View style={styles.wrap}>
        <Text style={styles.text}>{title} </Text>
        <View style={styles.wrapper}>
          <Text style={styles.descriptionText}>{rating} {genre}</Text>
        </View>
        <View style={styles.wrapper}>
          <Text style={styles.descriptionText}>Nearby {address}</Text>
        </View>
        
      </View>
    
      
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  wrap: {
   paddingHorizontal: 12,
   paddingBottom: 16  

  
  },
  image:{
    height:130,
    width:210,
    borderRadius:2,
  },
  text:{
    paddingTop:8,
    fontSize:18,
    fontWeight: 'bold',
  },
  wrapper:{
    flexDirection:'row',
    	alignItems: 'center'
  },
   descriptionText:{
      fontSize: 12,
      color: '#a0aec0',
      
  },
  touchable:{
    backgroundColor: '#fff',
    marginRight: 12,
    shadowColor: 'rgba(0, 0, 0, 0.1)', 
    shadowOffset: {width: 0, height: 1}, 
    shadowRadius: 3, 
    elevation: 1.5, 
  }

  
});
export default RestaurantCard;