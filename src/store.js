import { createContext } from "react";

export const StoreContext = createContext();

export const initialHistory = {
    past: [],
    future: []
}

export const initialState = {
    count: 0,
    user: null,
    history: initialHistory
};

// A reducer helps us query and update state in a more semantic and efficient way.
export const storeReducer = (state, action) => {
    const { type } = action;

    const { history, ...newState } = state
    const past = [...history.past, {...newState}]

    switch (type) {
        case "ADD": {
            newState.count = newState.count + action.amount
            break
        }
        case "REMOVE": {
            newState.count = newState.count - action.amount
            break
        }
        case "CLEAR": {
            newState.count = 0
            break
        }
        case "LOGIN": {
            newState.user = action.user
            break
        }
        case "LOGOUT": {
            newState.user = null
            break
        }
        default: {
            throw new Error("Invalid action type: " + type);
        }
    }

    newState.history = {
        past,
        future: history.future
    }
    
    return newState
}