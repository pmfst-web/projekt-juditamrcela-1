import react from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image,ScrollView, FlatList } from 'react-native';
import RestaurantCard from './RestaurantCard'
import { RESTAURANTS } from '../data/pocetni';

const FeaturedRow = (podaci) => {
  return (
    <View>
    <View style={styles.wrap}>
      <Text style={styles.textTitle}>{podaci.item.title}</Text>
    </View>
    <Text style={styles.descriptionText}>{podaci.item.description}</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
      {/*Restaurant Card*/}
      <FlatList horizontal='true' data={RESTAURANTS} renderItem={RestaurantCard}/>
      
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
