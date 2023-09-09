import { useStore } from "./hooks"

export default function History() {

    const [ , dispatch, {canUndo, canRedo}] = useStore()

	function handleUndo() {
		dispatch({type: "UNDO"})
	}
	
	function handleRedo() {
		dispatch({type: "REDO"})
	}

    return (
        <div>
            <button disabled={!canUndo} onClick={handleUndo}>Undo</button>
            <button disabled={!canRedo} onClick={handleRedo}>Redo</button>
        </div>
    )
}