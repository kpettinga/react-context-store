import { useReducer } from "react";
import { StoreContext, initialState, storeReducer } from "./store";

// A custom provider takes care of initializing state
export default function StoreProvider({ children }) {
  
	// instead of useState, we want to use our reducer to manage state
  const [store, dispatch] = useReducer(storeReducer, initialState);

  // we pass store AND dispatch into value so that child components 
  // can dispatch actions to update global state.
  return (
    <StoreContext.Provider value={[store, dispatch]}>
      {children}
    </StoreContext.Provider>
  );

}