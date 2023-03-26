import react from 'react'
import {View, Text,StyleSheet,ScrollView} from 'react-native'
import CategoryBox from "./CategoryBox"
import {RESTAURANTS} from '../data/pocetni'
const Categories=()=>{
  return(
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.wrap}>
      {RESTAURANTS.map(()=>{
        
      })}
      <CategoryBox imgUrl="https://links.papareact.com/gn7" title="Test"/>
      <CategoryBox imgUrl="https://links.papareact.com/gn7" title="Test"/>
      <CategoryBox imgUrl="https://links.papareact.com/gn7" title="Test"/>
      <CategoryBox imgUrl="https://links.papareact.com/gn7" title="Test"/>
      <CategoryBox imgUrl="https://links.papareact.com/gn7" title="Test"/>
      <CategoryBox imgUrl="https://links.papareact.com/gn7" title="Test"/>
      <CategoryBox imgUrl="https://links.papareact.com/gn7" title="Test"/>
      <CategoryBox imgUrl="https://links.papareact.com/gn7" title="Test"/>

    </ScrollView>
  )
}
const styles = StyleSheet.create({
  wrap:{
    paddingHorizontal:15,
    paddingTop:10,
  }

})
export default Categories
