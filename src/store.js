import { createContext } from "react";

export const StoreContext = createContext();

export const initialState = {
    past: [],
    present: {
        count: 0,
        user: null,
    },
    future: []
};

// A reducer helps us query and update state in a more semantic and efficient way.
export const storeReducer = (state, action) => {
    const { type } = action;
    const { past, present, future } = state
   
    let newPresent = { ...present }
    let newPast = [...past, present]
    let newFuture = []

    switch (type) {
        case "ADD": {
            newPresent.count = present.count + action.amount
            break
        }
        case "REMOVE": {
            newPresent.count = present.count - action.amount
            break
        }
        case "CLEAR": {
            newPresent.count = 0
            break
        }
        case "LOGIN": {
            newPresent.user = action.user
            break
        }
        case "LOGOUT": {
            newPresent.user = null
            break
        }
        case "UNDO": {
            newPast = past.slice(0, past.length - 1)
            newPresent = past[past.length - 1]
            newFuture = [present, ...future]
            break
        }
        case "REDO": {
            newPast = [...past, present]
            newPresent = future[0]
            newFuture = future.slice(1, future.length)
            break
        }
        default: {
            throw new Error("Invalid action type: " + type);
        }
    }

    return {
        past: newPast,
        present: newPresent,
        future: newFuture
    }
}