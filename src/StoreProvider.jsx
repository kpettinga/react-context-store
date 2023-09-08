import { useReducer } from "react";
import { StoreContext, initialState, storeReducer } from "./store";
import PropTypes from 'prop-types'

// A custom provider takes care of initializing state
export default function StoreProvider({ children, shouldLog }) {
  
	// instead of useState, we want to use our reducer to manage state
  const [store, dispatch] = useReducer( storeReducer, initialState);

  function loggedDispatch(dispatch) {
    return dispatch
  }

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