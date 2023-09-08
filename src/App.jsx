import { createContext, useContext, useReducer, useState } from "react";
import Chicken from "./Chicken";

const StoreContext = createContext();

const initialState = {
  count: 0,
  user: {
	name: 'Kirk',
	age: 37,
	hobbies: ['running', 'coding', 'beer']
  }
};

// A reducer helps us query and update state in a more semantic and efficient way.
function storeReducer(state, action) {
  const { type } = action;
  switch (type) {
    case "ADD": {
      return { ...state, count: state.count + action.amount };
    }
    case "REMOVE": {
      return { ...state, count: state.count - action.amount };
    }
    case "CLEAR": {
      return { ...state, count: 0 };
    }
    default: {
      throw new Error("Invalid action type: " + type);
    }
  }
}

// A custom provider takes care of initializing state
function StoreContextProvider({ children }) {
  
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

// A handy custom hook for use in our components
function useStore(callback) {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore() must be used within <StoreContextProvider>");
  }
  const [state, dispatch] = context
  return [callback ? callback(state) : state, dispatch]
}

function Header() {
	const [{name}] = useStore(store => store.user)
	return (
		<header>
		<h1>
			<Chicken size={40} /> Chicken Store
		</h1>
		<p>
			Hello {name}, this is an example of how to build global state management with the{" "}
			<a href="https://react.dev/reference/react/useContext">
			React Context API
			</a>{" "}
			and{" "}
			<a href="https://react.dev/reference/react/useReducer">
			<code>React.useReducer</code>
			</a>
		</p>

		<hr />
		</header>
	);
}

function ChickenTools() {
	
	const [count, dispatch] = useStore(store => store.count);
	// increment is only relevant to this component, so it stays in local state
	const [increment, setIncrement] = useState(1);

	function handleAdd() {
		dispatch({ type: "ADD", amount: increment });
	}

	function handleRemove() {
		if (count < 1) return
		dispatch({ type: "REMOVE", amount: Math.min(count, increment) });
	}

	function handleClear() {
		if (count < 1) return
		dispatch({ type: "CLEAR" });
	}

	return (
		<div className="flex-row">
			<button onClick={handleAdd}>Add</button>
			<input
				value={increment}
				min="1"
				step="1"
				type="number"
				onChange={(e) => setIncrement(parseInt(e.target.value))}
				/>
			<button disabled={count === 0} onClick={handleRemove}>
				Remove
			</button>
			<button disabled={count === 0} onClick={handleClear} style={{ marginLeft: "auto" }} >
				Clear
			</button>
		</div>
	);
}

function ChickenList(props) {
	const [count] = useStore(store => store.count)
	return (
		<div {...props}>
			<p>Chickens: {count}</p>
			{count > 0 ? (
			new Array(count)
				.fill(null)
				.map((v, k) => <Chicken key={k} size={60} />)
			) : (
			<p>The coop is empty :(</p>
			)}
		</div>
	)
}

function App() {
  return (
    <div className="App">
      <StoreContextProvider>
        <Header />
        <ChickenTools />
        <ChickenList style={{ marginTop: "3rem" }} />
      </StoreContextProvider>
    </div>
  );
}

export default App;
