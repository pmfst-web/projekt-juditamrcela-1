import react from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image,ScrollView } from 'react-native';
import RestaurantCard from './RestaurantCard'

const FeaturedRow = (podaci) => {
  return (
    <View>
    <View style={styles.wrap}>
      <Text style={styles.textTitle}>{podaci.item.title}</Text>
    </View>
    <Text style={styles.descriptionText}>{podaci.item.description}</Text>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
      {/*Restaurant Card*/}
      <RestaurantCard  
      id={123}
      image="https://links.papareact.com/gn7"
      title="Sushi bar"
      rating={3.7}
      genre="Japanese"
      address="Marka marulica 66"
      short_description="Amazing sushi food"
      dishes={[]}
      long={20}
      lat={0}
      />
      <RestaurantCard  
      id={123}
      image="https://links.papareact.com/gn7"
      title="Sushi bar"
      rating={3.7}
      genre="Japanese"
      address="Marka marulica 66"
      short_description="Amazing sushi food"
      dishes={[]}
      long={20}
      lat={0}
      />
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
