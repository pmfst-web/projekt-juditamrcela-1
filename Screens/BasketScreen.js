import * as React from 'react';
import {useEffect,useState} from 'react';
import { View, Text, StyleSheet,FlatList,ScrollView,Image,TouchableOpacity,SafeAreaView } from 'react-native';
import {useSelector,useDispatch} from 'react-redux';
import { addToOrder, removeDish } from '../store/reducers/restoranSlice';
import tw from 'tailwind-react-native-classnames'


const RestaurantDetail = ({navigation}) => {
  const basket = useSelector((state) => state.restoran.kosarica);
  console.log("Basket",basket)
  const [grupiraniKosara,setGrupiraniKosara]=useState([])
  const ukupno=basket.reduce((total,item)=>total+=item.price,0)
  
  const dispatch=useDispatch();
  
  const handleOrder=()=>{
    navigation.navigate('Order')
  }
  useEffect(()=>{
    const grupirani=basket.reduce((res,jelo)=>{
      (res[jelo.id]=res[jelo.id] || []).push(jelo);
      return res;
    },{})
    setGrupiraniKosara(grupirani);
   
  }, [basket]);
  console.log(grupiraniKosara)
  const handleGroup=(jelo)=>{
    console.log("uslo",jelo)
    dispatch(removeDish(jelo))
    const grupirani=kosara.reduce((res,jelo)=>{
      (res[jelo.id]=res[jelo.id] || []).push(jelo);
      return res;
    },{})
    setGrupiraniKosara(grupirani);

  
  }
  

  return (
    <SafeAreaView> 
     <View style={styles.wrap}>
        
        <ScrollView>
         {Object.entries(grupiraniKosara).map(([key,items])=>(
           <View style={styles.wrapper} key={key}>
            <View style={tw `flex-row `}>
              <Text >{items?.length} x</Text>
              <Image
              source={{ uri: items[0].image }}
              style={{paddingLeft:8},styles.image} />
              <Text style={{paddingLeft:8}}>{items[0].name} </Text>
            </View>
            <View style={tw `flex-row justify-between items-center`}>  
              <Text style={[tw `mx-2`],styles.descriptionText}>{items[0].price} kn</Text>
              <TouchableOpacity style={{paddingLeft:16}}>
                <Text style={styles.removeText} onPress={()=>handleGroup(items[0])}>
                Remove</Text>
              </TouchableOpacity>
            </View>

           </View>

         ))}
        </ScrollView>
        
     </View>
     <View style={{padding:5}}>
          <View style={{flexDirection:"row",justifyContent: 'space-between'}}>
            <Text style={styles.descriptionText}>Subtotal</Text>
            <Text style={styles.descriptionText}>{ukupno} kn</Text>

          </View>
           <View style={{flexDirection:"row",justifyContent: 'space-between'}}>
            <Text style={styles.descriptionText}>Delivery Fee</Text>
            <Text style={styles.descriptionText}>10,30 kn</Text>

          </View>
            <View style={{flexDirection:"row",justifyContent: 'space-between'}}>
            <Text >Order Total</Text>
            <Text style={{fontWeight: 800}}>{ukupno + 10.30} kn</Text>

          </View>
          <TouchableOpacity onPress={()=>handleOrder()} style={styles.button}>
            <Text style={{fontWeight:'bold',color:'white',textAlign: 'center'}}>Place order</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#fff',
    shadowColor: 'rgba(0, 0, 0, 0.1)', 
    shadowOffset: {width: 0, height: 1}, 
    shadowRadius: 3, 
    elevation: 1.5, 
  },
  image: {
    height: 50,
    width: 50,
    
    borderTopEndRadius: 9999,
    borderBottomEndRadius: 9999,
    borderTopStartRadius: 9999,
    borderBottomStartRadius: 9999,
  },
  removeText: {
    
    fontSize: 12,
    color:"#fc8181",
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 8 ,
    paddingHorizontal: 20,
    justifyContent: 'space-between'
  },
  descriptionText: {
    fontSize: 12,
    color: '#a0aec0',
    marginBottom:8
  },
  button:{
    
    borderRadius: 8, 
    padding:16,
    backgroundColor:'#a0aec0',
  },
});

export default RestaurantDetail;