import { useReducer } from "react";
import { StoreContext, initialState, storeReducer } from "./store";
import PropTypes from 'prop-types'

// Logger middleware
// Thanks to https://github.com/Zaelot-Inc/use-reducer-logger
const logger = reducer => (state, action) => {
  const next = reducer(state, action)
  console.group("Dispatched: ", action);
  console.log(next)
  console.groupEnd()
  return next
}

// A custom provider takes care of initializing state
export default function StoreProvider({ children, shouldLog }) {

  const reducer = shouldLog ? logger(storeReducer) : storeReducer
  
	// instead of useState, we want to use our reducer to manage state
  const [store, dispatch] = useReducer( reducer, initialState);

  // we pass store AND dispatch into value so that child components 
  // can dispatch actions to update global state.
  return (
    <StoreContext.Provider value={[store, dispatch]}>
      {children}
    </StoreContext.Provider>
  );

}

StoreProvider.propTypes = {
  shouldLog: PropTypes.bool,
  children: PropTypes.array
}