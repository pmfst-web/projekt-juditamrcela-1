import * as React from 'react';
import { View, Text, StyleSheet,FlatList,ScrollView,Image } from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import {addToOrder} from '../store/reducers/restoranSlice'
import DishCard from '../components/DishCard'
import BasketPopUp from '../components/BasketPopUp'

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
  const handleIncrement=(id)=>{
    dispatch(increment(id))
  }

  return (
    <> 
      <BasketPopUp/>
      <ScrollView>
        <View>
          <Image
          source={{
            uri:restoran.image,
          }}
          style={styles.image}
          />
        </View>
        <View style={{backgroundColor:'white'}}>
          <View style={styles.wrap}>
            <Text style={styles.text}>{restoran.title} </Text>
            <View style={styles.wrapper}>
              <Text style={styles.descriptionText} >Nearby {restoran.address}</Text>
            </View>
            <Text style={styles.descriptionText}>{restoran.short_description}</Text>
          </View>
          
          
        </View>
        <View style={{paddingBottom:160}}>
          <Text style={{	
                paddingHorizontal: 16,
                paddingTop: 24,
                marginBottom: 12,
                fontSize: 20,
                fontWeight: 'bold',
                 }}>Menu</Text>
          <FlatList  data={jela} renderItem={(item)=>(
            <DishCard podaci={item}/>
          )}/>
        </View>
      </ScrollView>
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