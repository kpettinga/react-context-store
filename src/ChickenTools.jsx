import { useStore } from "./hooks";

export default function ChickenTools() {
	
	const [count, dispatch] = useStore(store => store.present.count);

	function handleAdd() {
		dispatch({ type: "ADD", amount: 1 });
	}

	function handleRemove() {
		if (count < 1) return
		dispatch({ type: "REMOVE", amount: 1 });
	}

	function handleReset() {
		if (count < 1) return
		dispatch({ type: "RESET" });
	}

	return (
		<div className="flex-row">
			<button onClick={handleAdd}>
				Add
			</button>
			<button disabled={count === 0} onClick={handleRemove}>
				Remove
			</button>
			<button disabled={count === 0} onClick={handleReset} style={{ marginLeft: "auto" }} >
				Reset
			</button>
		</div>
	);
}