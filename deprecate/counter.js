import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    // action #1
    increment: (state) => {
      state.count += 1
    },
    // action #2
    decrement: (state) => {
      state.count -= 1
    },
    // action #3
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
  },
})

// export all actions so we can call them in our app
export const { increment, decrement, incrementByAmount } = counterSlice.actions

// export all reducers so we can call them in our app
export default counterSlice.reducer