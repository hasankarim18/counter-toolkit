
import { createSlice, configureStore } from '@reduxjs/toolkit'


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


const initialAuthState = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logout(state) {
            state.isAuthenticated = false
        }
    }
})




const store = configureStore({
    reducer: {
        counterReducer: counterSlice.reducer,
        authReducer: authSlice.reducer
    }
})


// alternative way
// const store = configureStore({
//     reducer: {
//         counter: counterSlice.reducer
//     }
// })

export const counterActions = counterSlice.actions
export const authActions = authSlice.actions

export default store



