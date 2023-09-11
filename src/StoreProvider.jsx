import { useReducer } from "react";
import { StoreContext, initialState, storeReducer } from "./store";
import PropTypes from "prop-types";

// Reducer Enhancers ---------------------------------------- /

// Logger
// Thanks to https://github.com/Zaelot-Inc/use-reducer-logger
const logger = (reducer) => (state, action) => {
	const next = reducer(state, action);
	console.group("Dispatched: ", action);
	console.log(next);
	console.groupEnd();
	return next;
};

// Undo/Redo
function undoable(reducer) {
	return function (state, action) {
		const { past, present, future } = state
		const { type } = action;
		switch (type) {
			case "UNDO": {
				return {
					past: past.slice(0, past.length - 1),
					present: past[past.length - 1],
					future: [present, ...future]
				}
			}
			case "REDO": {
				return {
					past: [...past, present],
					present: future[0],
					future: future.slice(1)
				}
			}
			default: {
				const next = reducer(present, action);
				return {
					past: [...past, present],
					present: next,
					future: []
				}
			}
		}
	};
}

// A custom provider takes care of initializing state
export default function StoreProvider({ children, shouldLog, isUndoable }) {
 
	let reducer = storeReducer
	let state = initialState
 
	if (isUndoable) {
		reducer = undoable(reducer);
		state = {
			past: [],
			present: state,
			future: []
		}
	}
	
	if (shouldLog) {
		reducer = logger(reducer);
	}

	// instead of useState, we want to use our reducer to manage state
	const [store, dispatch] = useReducer(reducer, state);

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
  isUndoable: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
