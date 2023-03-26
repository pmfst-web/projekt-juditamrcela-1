import react, { useLayoutEffect,useState,useEffect } from 'react';
import { View, Text,StyleSheet,TextInput,ScrollView,FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Categories from "../components/Categories"
import FeaturedRow from "../components/FeaturedRow"
import {RESTAURANTS} from '../data/pocetni'
import {FEATURED} from '../data/featuredData'
const HomeScreen = () => {
  const navigation = useNavigation();
  const [featuredRow,setFeaturedRow]=useState([])
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  useEffect(()=>{
    //dohvat podataka sa redux
  },[])

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
          />
        </View>
      </View>
      {/*Restaurant list*/}
      <ScrollView style={styles.scrollViewWrap}>
        {/*Kategorije po jelu*/}
          <Categories/>

        {/*Prikaz restorana*/}
        <FlatList data={FEATURED} renderItem={FeaturedRow}/>
         
          
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 8,
    flexDirection:'column',

  },
  text_gray:{
    color:'#a0aec0',
    fontSize:10,
    fontWeight:'bold',

  },
  text_bold:{
    fontWeight:'bold',
    fontSize:15,
  },
  wrap:{
    backgroundColor:'white',
    padding:5,

  },
  text_input:{
    height:40,
    borderRadius:10,
    backgroundColor:'#e2e8f0',

  },
  scrollViewWrap:{
    backgroundColor:'#f7fafc',
    paddingBottom:100,
    flexDirection:'column',
  }

});

export default HomeScreen;


