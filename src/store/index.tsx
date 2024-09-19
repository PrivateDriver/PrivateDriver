import { createStore } from 'redux'

const initialState = {
    isLogged: false,
    user: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isLogged: true,
                user: action.payload,
            }
        case 'LOGOUT':
            return {
                ...state,
                isLogged: false,
                user: null,
            }
        default:
            return state
    }
}

const store = createStore(reducer)
export default store