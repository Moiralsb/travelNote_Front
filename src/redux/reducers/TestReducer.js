import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  value: 0
}

const TestReducer = createSlice({
  name: "test",
  initialState,
  reducers: {
    add: (state) => {
      state.value += 1
    },
    sub: (state) => {
      state.value -= 1
    },

    incrementByAmount : (state, action) => {
      state.value += action.payload
    },
  },
})

export const { add, sub, incrementByAmount } = TestReducer.actions
export default TestReducer.reducer
