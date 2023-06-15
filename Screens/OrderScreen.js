import react, { useLayoutEffect, useState, useEffect } from 'react';
import {useSelector} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';


const OrderScreen = () => {
  const basket = useSelector((state) => state.restoran.kosarica);
  const navigation=useNavigation()
  useEffect(()=>{
    setTimeout(()=>{
      navigation.navigate('Home')
    },4000)
    
  })
  return (
    <View style={{backgroundColor: '#87cefa',justifyContent: 'center',alignItems: 'center',flex: 1}}>
      <Image
      source={require('../assets/8640.jpg')}
      style={{width:300,height:200, borderRadius:40}}
      />
      <Text style={styles.text}>Thank you for your order!</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text:{
    
    fontSize: 18,
    color: '#718096'
  }

 
 
});

export default OrderScreen;
