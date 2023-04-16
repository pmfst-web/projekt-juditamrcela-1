import react from 'react'
import {View, Text,StyleSheet,ScrollView} from 'react-native'
import CategoryBox from "./CategoryBox"
import {RESTAURANTS} from '../data/pocetni'
const Categories=()=>{
  return(
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.wrap}>
     
      <CategoryBox imgUrl="https://links.papareact.com/gn7" title="Sushi"/>
      <CategoryBox imgUrl="https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/aee22e3a94433fcf6500b8003f66a70c" title="Pizza"/>
      <CategoryBox imgUrl="https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/fd38df9967deca4d7dae07b818ba3284" title="Indian"/>
      <CategoryBox imgUrl="https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/1e16b7821335e0c3d956f42e88f69c5d" title="Burger"/>
      <CategoryBox imgUrl="https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/2c0457f493adaff5a10e9794b07ae60b" title="Deserts"/>
      <CategoryBox imgUrl="https://snack-code-uploads.s3.us-west-1.amazonaws.com/~asset/cf66fc965f844f430a1c65d5e2534802" title="Rice"/>
      

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
