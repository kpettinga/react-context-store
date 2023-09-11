import { useStore } from "./hooks"

export default function OtherCoop() {

    const [count, dispatch] = useStore( store => store.count )

    return (
        <div>
            <p>- - -</p>
            <h4>Note: Providers track state independently</h4>
            <p>{"In another dimension, you have " + count + " chickens."}</p>
            <p>
                <button onClick={() => dispatch({type: 'ADD', amount: 1})}>add</button>
                <button onClick={() => dispatch({type: 'REMOVE', amount: 1})}>remove</button>
            </p>
        </div>
    )
}