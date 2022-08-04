import redux, { createStore } from 'redux'


const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action) => {
    if (action.type === 'inc') {
        return {
            ...state,
            counter: state.counter + 1
        }
    }

    if (action.type === 'dec') {

        return {
            ...state,
            counter: state.counter - 1
        }
    }

    if (action.type === 'incbyfive') {
        return {
            ...state,
            counter: state.counter + action.payload
        }
    }

    if (action.type === "decbyfive") {
        return {
            ...state,
            counter: state.counter - action.payload
        }
    }


    return state

}

const store = createStore(counterReducer)

export default store



