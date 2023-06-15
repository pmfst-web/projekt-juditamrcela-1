import react, { useLayoutEffect, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

import RestaurantCard from '../components/RestaurantCard';
import { useSelector } from 'react-redux';
import { getRest } from '../store/reducers/restoranSlice';
const HomeScreen = ({ navigation }) => {
  const restorani = useSelector((state) => state.restoran.restaurants);
  const featured = useSelector((state) => state.restoran.featured);
  const [filteredData, setFilteredData] = useState([]);
  const [flag,setFlag]=useState(false);
 
  const handleFilter=(text)=>{
       if(text){  
            setFlag(true)
            const newData = restorani.filter(item => {
                const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            })
            setFilteredData(newData);
        } else {
            setFilteredData(restorani);
            setFlag(false)
        }
  }
  
  return (
    <View style={styles.wrap}>
      {/*Header*/}
      <View>
        <View style={styles.container}>
          <Text style={styles.text_gray}>Deliver now!</Text>
          <Text style={styles.text_bold}>Current location</Text>
        </View>
      </View>

      {/*search bar*/}
      <View style={styles.container}>
        <View>
          <TextInput
            placeholder="Search restaurants"
            keyboardType="default"
            style={styles.text_input}
            onChangeText={(text) => handleFilter(text)}
         
          />
        </View>
      </View>
      {/*Restaurant list*/}
      <ScrollView style={styles.scrollViewWrap}>
        {/*Kategorije po jelu*/}
        <Categories />
        {flag ? 
        <FlatList data={filteredData} renderItem={(item)=>(
        <RestaurantCard podaci={item}/>
      )}/>: 
        
        <FlatList style={{paddingBottom:50}}
          data={featured}
          renderItem={(item) => <FeaturedRow podaci={item} />}
        />}
       
        
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 8,
    flexDirection: 'column',
  },
  text_gray: {
    color: '#a0aec0',
    fontSize: 10,
    fontWeight: 'bold',
  },
  text_bold: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  wrap: {
    backgroundColor: 'white',
    padding: 5,
  },
  text_input: {
    height: 40,
    borderRadius: 10,
    backgroundColor: '#e2e8f0',
  },
  scrollViewWrap: {
    backgroundColor: '#f7fafc',
    paddingBottom: 100,
    flexDirection: 'column',
  },
});

export default HomeScreen;
