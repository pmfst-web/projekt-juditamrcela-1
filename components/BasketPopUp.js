import react, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { addToOrder, removeDish } from '../store/reducers/restoranSlice';
import Ionicons from '@expo/vector-icons/Ionicons';

const BasketPopUp = () => {
  
  const basket=useSelector((state)=>state.restoran.kosarica)
  const ukupno=basket.reduce((total,item)=>total+=item.price,0)
  
  const navigation=useNavigation()
  console.log("kosara",basket)
   const handleNavigation = (basket) => {
    
    navigation.navigate('Basket');
  
  };
  if(basket.length===0) return null;

  return (
    <View style={styles.wrap}>
      <TouchableOpacity onPress={()=>handleNavigation(basket)} style={styles.touchable}>
        <Text style={styles.text}>{basket.length}</Text>
        <Text style={styles.textViewBasket}>View basket</Text>
        <Text style={styles.textprice}>{ukupno} kn</Text>

      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    zIndex: 50,
  },
  touchable:{
    backgroundColor: '#a0aec0',
    marginHorizontal: 20 ,
    padding: 16 ,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,


  },
  text:{
    fontWeight: 800,
    fontSize: 18,
    backgroundColor: '#cbd5e0',
    paddingHorizontal: 8,
    paddingVertical: 4 ,
    



  },
  textViewBasket:{
    fontWeight: 800,
    fontSize: 18,
    flex: 1,
    color: '#fff',
    textAlign: "center",
    



  },
  textprice:{
    fontWeight: 800,
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Georgia'
   

  }
 
});
export default BasketPopUp;
