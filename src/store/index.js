import redux, { createStore } from 'redux'
import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    counter: 0,
    showCounter: true
}



const counterReducer = (state = initialState, action) => {
    if (action.type === 'inc') {
        return {
            ...state,
            counter: state.counter + 1,

        }
    }

    if (action.type === 'dec') {

        return {
            ...state,
            counter: state.counter - 1,
        }
    }

    if (action.type === 'incbyfive') {
        return {
            ...state,
            counter: state.counter + action.payload,
        }
    }

    if (action.type === "decbyfive") {
        return {
            ...state,
            counter: state.counter - action.payload,
        }
    }

    if (action.type === 'toggle') {
        return {
            ...state,
            showCounter: !state.showCounter,
        }
    }

    return state

}

const store = createStore(counterReducer)

export default store



