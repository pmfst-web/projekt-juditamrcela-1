import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from "./Screens/HomeScreen";
import BasketScreen from './Screens/BasketScreen';
import RestaurantDetail from "./Screens/RestaurantDetail";
import OrderScreen from "./Screens/OrderScreen";

import store from './store/reducers/store';


// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}/>
      <Stack.Screen name='Restaurant Details' component={RestaurantDetail}/>
      <Stack.Screen name='Basket' component={BasketScreen}/>
      <Stack.Screen name='Order' component={OrderScreen} options={{ headerShown: false}}/>
      </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
