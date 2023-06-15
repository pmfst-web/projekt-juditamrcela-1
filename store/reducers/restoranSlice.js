import { createSlice } from '@reduxjs/toolkit';
import { RESTAURANTS } from '../../data/pocetni';
import { FEATURED } from '../../data/featuredData';

const initialState = {
  featured: FEATURED,
  restaurants: RESTAURANTS,
  kosarica: [],
};

const restaurantSlice = createSlice({
  name: 'restoran',
  initialState,
  reducers: {
   
    addToOrder: (state, action) => {
      state.kosarica = [...state.kosarica, action.payload];
    },
     setRestaurant:(state,action)=>{
      state.restaurants=state.restaurants.filter((rest)=>rest.id!=action.payload)

    },
    removeDish: (state, action) => {
      const jeloDel = state.kosarica.findIndex(
        (jelo) => jelo.id === action.payload.id
      );
      
      let kopijaKosarica = [...state.kosarica];
      if (jeloDel >= 0) {
        kopijaKosarica.splice(jeloDel, 1);
      } else {
        console.warn(`cant remove product`);
      }
     
      state.kosarica=kopijaKosarica
     
    },
  }
});

export const { addToOrder, removeDish } = restaurantSlice.actions;

export default restaurantSlice.reducer;
