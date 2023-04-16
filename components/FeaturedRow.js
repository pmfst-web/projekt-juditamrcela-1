import react from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image,ScrollView,FlatList } from 'react-native';
import RestaurantCard from './RestaurantCard';
import {RESTAURANTS} from '../data/pocetni';
import {useSelector} from 'react-redux';
import {getRest} from '../store/reducers/restoranSlice';
const FeaturedRow = (props) => {
  const restorani=useSelector((state)=>state.restoran.restaurants);
  console.log(restorani,'bb')
  
  return (
    <View>
    <View style={styles.wrap}>
      <Text style={styles.textTitle}>{props.podaci.item.title}</Text>
    </View>
    <Text style={styles.descriptionText}>{props.podaci.item.description}</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
      {/*Restaurant Card*/}
      <FlatList horizontal={true} data={restorani} renderItem={(item)=>(
        <RestaurantCard podaci={item}/>
      )}/>
      
    </ScrollView>
      
    </View>
  );
};
const styles = StyleSheet.create({
  wrap: {
    marginTop: 16,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16 

  
  },
  textTitle:{
    fontWeight:'bold'
  },
  descriptionText:{
      fontSize: 12,
      color: '#a0aec0',
      paddingHorizontal: 16,
  },
  scrollView:{
    paddingHorizontal: 15,
    paddingTop:16,
  }
});
export default FeaturedRow;
