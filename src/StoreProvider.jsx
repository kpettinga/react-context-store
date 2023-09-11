import { useReducer } from "react";
import { StoreContext, initialState, storeReducer } from "./store";
import PropTypes from "prop-types";
import { logger, undoable } from "./middleware";

// A custom provider takes care of initializing state
export default function StoreProvider({ children, shouldLog, isUndoable }) {
 
	let reducer = storeReducer
	let state = initialState
 
	// add undo/redo 
	if (isUndoable) {
		reducer = undoable(reducer);
		state = {
			past: [],
			present: state,
			future: []
		}
	}
	
	// add logger
	if (shouldLog) {
		reducer = logger(reducer);
	}

	// instead of useState, we want to use our reducer to manage state
	const [store, dispatch] = useReducer(reducer, state);

	// we pass store and dispatch into value so that child components
	// can dispatch actions to update global state.
	return (
		<StoreContext.Provider value={[store, dispatch]}>
			{children}
		</StoreContext.Provider>
	);
}

StoreProvider.propTypes = {
	shouldLog: PropTypes.bool,
	isUndoable: PropTypes.bool,
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
