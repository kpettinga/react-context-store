// Reducer Enhancers ---------------------------------------- /
// These functions enhance reducers with extra functionality

// Logger - Log actions and resulting state to the console.
// Thanks to https://github.com/Zaelot-Inc/use-reducer-logger
export const logger = (reducer) => (state, action) => {
	const next = reducer(state, action);
	console.group("Dispatched: ", action);
	console.log(next);
	console.groupEnd();
	return next;
};

// Undo/Redo - Ability to track state history.
// Pulled from Redux's method:
// https://redux.js.org/usage/implementing-undo-history#second-attempt-writing-a-reducer-enhancer 
export const undoable = (reducer) => (state, action) => {
	const { past, present, future } = state;
	const { type } = action;
	switch (type) {
		case "UNDO": {
			return {
				past: past.slice(0, past.length - 1),
				present: past[past.length - 1],
				future: [present, ...future],
			};
		}
		case "REDO": {
			return {
				past: [...past, present],
				present: future[0],
				future: future.slice(1),
			};
		}
		case "RESET": {
			return {
				past: [],
				present: reducer(present, action),
				future: [],
			};
		}
		default: {
			return {
				past: [...past, present],
				present: reducer(present, action),
				future: [],
			};
		}
	}
};
