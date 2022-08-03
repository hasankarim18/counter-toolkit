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


        if (state.counter <= 0) {
            return state
        }

        return {
            ...state,
            counter: state.counter - 1
        }
    }


    return state

}

const store = createStore(counterReducer)

export default store



