import { createContext } from "react";

export const StoreContext = createContext();

export const initialState = {
    count: 0,
    user: null,
};

// A reducer helps us query and update state in a more semantic and efficient way.
export const storeReducer = (state, action) => {
    const { type } = action;
   
    switch (type) {
        case "ADD": {
            return { ...state, count: state.count + action.amount }
        }
        case "REMOVE": {
            return { ...state, count: state.count - action.amount }
        }
        case "CLEAR": {
            return { ...state, count: 0 }
        }
        case "LOGIN": {
            return { ...state, user: action.user }
        }
        case "LOGOUT": {
            return { ...state, user: null }
        }
        default: {
            throw new Error("Invalid action type: " + type);
        }
    }
}