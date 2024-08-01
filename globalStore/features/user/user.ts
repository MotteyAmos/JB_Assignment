import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Alert } from 'react-native'

export interface UserState {
  userName: string,
  balance:number
}

const initialState = {
  userName: "",
  balance:0
}satisfies UserState as UserState

export const userSlice =createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName:(state, action)=>{
        state.userName= action.payload
    },
    
    makeDeposite:(state,action)=>{
      const amount = parseFloat(action.payload);
       
      if (isNaN(amount) || amount <= 0) {
        Alert.alert('Invalid amount', 'Please enter a valid deposit amount.');
        return;
    }
    state.balance += amount;
     
    }
    
  
  },
})

// Action creators are generated for each case reducer function
export const { setUserName, makeDeposite } = userSlice.actions

export default userSlice.reducer