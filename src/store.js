import { createContext } from "react";

export const StoreContext = createContext();

export const initialState = {
    count: 0,
    user: null
};

let test = 0

// A reducer helps us query and update state in a more semantic and efficient way.
export const storeReducer = (state, action) => {
    const { shouldLog } = state;
    const { type } = action;

    switch (type) {
        case "ADD": {
            state = { ...state, count: state.count + action.amount }
            break
        }
        case "REMOVE": {
            state = { ...state, count: state.count - action.amount }
            break
        }
        case "CLEAR": {
            state = { ...state, count: 0 }
            break
        }
        case "LOGIN": {
            state = { ...state, user: action.user }
            break
        }
        case "LOGOUT": {
            state = { ...state, user: null }
            break
        }
        default: {
            throw new Error("Invalid action type: " + type);
        }
    }

    if ( shouldLog ) {
        console.log(test++)
        // console.log('DISPATCHED: ', action, 'NEW STATE: ', state)
    }
    
    return state
}