import * as React from 'react';
import { View, Text, StyleSheet,FlatList,ScrollView,Image } from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import {addToOrder} from '../store/reducers/restoranSlice'
import DishCard from '../components/DishCard'
import BasketPopUp from '../components/BasketPopUp'

const RestaurantDetail = ({route,navigation}) => {
  const restorani = useSelector((state) => state.restoran.restaurants);
  const idRestoran=route.params?.id;
  console.log("res id",idRestoran)
  const restoran=restorani.find((res)=>res.id===idRestoran)
  console.log("trenutni",restoran)
 
 

  return (
    <> 
     <View>
      <Text>Basket screen</Text>
     </View>
    </>
  );
};
const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  image: {
    height: 192,
    width: '100%',
    padding: 16 ,
    backgroundColor: '#e2e8f0'
  
  },
  text: {
    
    fontSize: 30,
    fontWeight: 'bold',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  descriptionText: {
    fontSize: 12,
    color: '#a0aec0',
    marginBottom:8
  },
});

export default RestaurantDetail;