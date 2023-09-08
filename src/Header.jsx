import Chicken from "./Chicken";
import { useStore } from "./hooks";

export default function Header() {
	const [{name}] = useStore(store => store.user)
	return (
		<header>
		<h1>
			<Chicken size={40} /> Chicken Store
		</h1>
		<p>
			<strong>Hello {name}</strong>, this is an example of how to build global state management with the{" "}
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