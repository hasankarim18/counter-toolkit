import { createSlice } from '@reduxjs/toolkit'


const initialCounterState = {
    counter: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--
        },
        incbyfive(state, action) {
            state.counter = state.counter + action.payload
        },
        decbyfive(state, action) {
            state.counter = state.counter - action.payload
        },
        togggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
})

export const counterActions = counterSlice.actions

export default counterSlice
