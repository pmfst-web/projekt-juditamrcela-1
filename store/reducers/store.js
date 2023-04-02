import {configureStore} from '@reduxjs/toolkit'
import restoran from './restoranSlice'

const store=configureStore({
  reducer:{
    restoran
  }
})

export default store;