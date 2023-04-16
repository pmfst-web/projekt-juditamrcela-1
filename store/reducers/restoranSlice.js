import { createSlice} from '@reduxjs/toolkit'
import {RESTAURANTS} from '../../data/pocetni'
import {FEATURED} from '../../data/featuredData'

const initialState={
    featured:FEATURED,
    restaurants:RESTAURANTS,
    kosarica:[],
}

const restaurantSlice=createSlice({

    name:'restoran',
    initialState,
    reducers:{
      addToOrder:(state,action)=>{
        const order={...action.payload,count:1};
        return{
          ...state,
          kosarica:order
        }
      },
      increment:(state,action)=>{
        const kosarica=state.kosarica.map((jelo)=>
          jelo.id==action.payload?
          {
            ...jelo,
            count:count+1,
          }: jelo
          )
        return{
          ...state,
          kosarica:kosarica
        }
        
      },
       decrement:(state,action)=>{
        const kosarica=state.kosarica.map((jelo)=>
          jelo.id==action.payload?
          {
            ...jelo,
            count:count-1,
          }: jelo
          )
        return{
          ...state,
          kosarica:kosarica
        }
        
      }
      
    },
    removeDish:(state,action)=>{
      const jeloDel=state.kosarica.filter((jelo)=>
      jelo.id!=action.payload)
      return{
        ...state,
        kosarica:jeloDel
      }
    }

})



export const {addToOrder,increment,decrement}=restaurantSlice.actions

export default restaurantSlice.reducer