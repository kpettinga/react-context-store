import Chicken from "./Chicken";

export default function Header() {

	return (
		<header>
			<nav className="flex-row">
				<h1>
					<Chicken size={20} />&nbsp;&nbsp;The Chicken Coop
				</h1>
			</nav>
			<div style={{marginLeft: '3rem', marginRight: '3rem'}}>
				<p>
					This is an example of how to build <strong>global state management</strong> with <a href="https://react.dev/reference/react/useReducer"><strong>reducers</strong></a> and the <a href="https://react.dev/reference/react/useContext"><strong>React Context API</strong></a>.
				</p>
				<p>It features some of the same enhancements you can get with tools like Redux.</p>
				<ul>
					<li>A logger which outputs actions and resulting state to the console.</li>
					<li>State history, enabling Undo/Redo actions.</li>
				</ul>
			</div>
		</header>
	);
}
