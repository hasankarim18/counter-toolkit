
import { createSlice, configureStore } from '@reduxjs/toolkit'


const initialState = {
    counter: 0,
    showCounter: true
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
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
        decbyfive() {
            state.counter = state.counter - action.payload
        },
        togggleCounter() {
            state.showCounter = !state.showCounter
        }
    }
})

const store = configureStore({
    reducer: counterSlice.reducer
})


// alternative way
// const store = configureStore({
//     reducer: {
//         counter: counterSlice.reducer
//     }
// })

export default store



