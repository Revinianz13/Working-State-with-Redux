import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };


const counterSlice = createSlice({
  name:'counter',
  initialState: initialCounterState,
  reducers:{
    increment (state) {
      state.counter ++;
    },
    decrement (state) {
      state.counter --;
    },
    increase (state, action) {
      state.counter = state.counter + action.payload; // when we have action on the other side we need export with payload
    },
    toogleCounter(state) {
      state.showCounter= !state.showCounter;
    }
  }
});



export const counterActions = counterSlice.actions;
export default counterSlice.reducer;