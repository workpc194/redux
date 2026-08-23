import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
    name: 'counter',
    initialState:{
        counter: 0
    },
    reducers:{
        increase:(state)=>{
            state.counter += 1
        },
        decrease:(state)=>{
            if(state.counter >= 1){
                state.counter -= 1
            }
        },
        increaseBy:(state, num)=>{
            state.counter += num.payload
        },
        reset:(state)=>{
            state.counter = 0
        }
    }
})

export const { increase, decrease, increaseBy, reset } = CounterSlice.actions
export default CounterSlice.reducer