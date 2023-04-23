import { createSlice} from '@reduxjs/toolkit'

const initialState={
    items:[],
    count:[],
}

const basketSlice=createSlice({

    name:'basket',
    initialState,
    reducers:{
      addToOrder:(state,action)=>{
        state.items=[...state.items,action.payload]
        return{
          ...state,
          kosarica:order
        }
      }
    }
      
  
   

})



export const {addToOrder}=basketSlice.actions

export default basketSlice.reducer