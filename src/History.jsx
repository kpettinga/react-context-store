import { useStore } from "./hooks"

export default function History(props) {

    const [store, dispatch] = useStore()
    const canUndo = store.past.length > 0
    const canRedo = store.future.length > 0

	function handleUndo() {
		dispatch({type: "UNDO"})
	}
	
	function handleRedo() {
		dispatch({type: "REDO"})
	}

    return (
        <div {...props}>
            <button disabled={!canUndo} onClick={handleUndo}>Undo</button>
            <button disabled={!canRedo} onClick={handleRedo}>Redo</button>
        </div>
    )
}