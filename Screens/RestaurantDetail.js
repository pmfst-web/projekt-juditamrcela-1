import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import {addToOrder} from '../store/reducers/restoranSlice'
const RestaurantDetail = ({route,navigation}) => {
  const idRestoran=route.params?.id;
  console.log(idRestoran)
  const sviRestorani=useSelector((state)=>state.restoran.restaurants)
  const restoran=sviRestorani.find((r)=>r.id==idRestoran)
  const jela=restoran.dishes
  console.log(jela,"jela")

  const dispatch=useDispatch();

  const handleToOrder=(jelo)=>{
    dispatch(addToOrder(jelo))
  }

  return (
    <View>
      <Text>Ekran sa detaljima</Text>
    </View>
  );
};

export default RestaurantDetail;