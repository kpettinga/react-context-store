import { useState } from "react";
import { useStore } from "./hooks";

export default function ChickenTools() {
	
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