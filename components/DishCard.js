import react,{useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

const DishCard = (props) => {
  const navigation = useNavigation();
  const [isPressed,setIsPressed]=useState(false)

  return (
    <>
    <TouchableOpacity onPress={()=>setIsPressed(!isPressed)} style={styles.touchable}>
      <View style={styles.wrap}>
        <View style={{flex:1,paddingRight:8}}>
          <Text style={styles.text}>{props.podaci.item.name} </Text>

          <Text style={styles.descriptionText}>
            {props.podaci.item.description}
          </Text>
          <Text style={styles.descriptionText}>
            {props.podaci.item.price} kn
          </Text>
        </View>
        <View>
          <Image
            source={{
              uri: props.podaci.item.image,
            }}
            style={styles.image}
          />
        </View>
      </View>
      
    </TouchableOpacity>
    {isPressed &&(
      <View style={{backgroundColor:'white', paddingHorizontal:16}}>
        <View style={{ flexDirection: 'row' , alignItems: 'center'}}>
          <TouchableOpacity>
            <Ionicons name={`add-circle`} size={25} color={'#868686'}></Ionicons>
          </TouchableOpacity>
          <Text>0</Text>
          <TouchableOpacity>
            <Ionicons name={`remove-circle`} size={25} color={'#868686'}></Ionicons>
          </TouchableOpacity>
        </View>
      </View>
    )}
    </>
  );
};
const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: 12,
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 70,
    width: 70,
    padding:8
  },
  text: {
    paddingTop: 8,
    fontSize: 18,
  },

  descriptionText: {
    fontSize: 12,
    color: '#a0aec0',
  },
  touchable: {
    backgroundColor: '#fff',
    marginRight: 12,
    borderColor: '#edf2f7',
    borderTopWidth: 1 ,
    borderBottomWidth: 1,
    padding:16,
    
  },
});
export default DishCard;
