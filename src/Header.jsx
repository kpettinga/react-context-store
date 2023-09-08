import { useState } from "react";
import Chicken from "./Chicken";
import { useAuth, useStore } from "./hooks";

export default function Header() {
	const [user, dispatch] = useStore((store) => store.user);
	const [status, setStatus] = useState("idle")

	const auth = useAuth()

	function handleLogin() {
		setStatus("pending")
		auth.login("kirk", "password", user => {
			dispatch({ type: "LOGIN", user })
			setStatus("resolved")
		})
	}
	
	function handleLogout() {
		setStatus("pending")
		auth.logout(() => {
			dispatch({ type: "LOGOUT" })
			setStatus("idle")
		})
	}

	return (
		<header>
			<nav className="flex-row">
				<h1>
					<Chicken size={20} />&nbsp;&nbsp;Chicken Store
				</h1>
				<div style={{marginLeft: 'auto'}}>
					{ status === "pending" ?
						<button disabled>...</button>
						: status === "resolved" ?
						<span>
							<strong>Kirk</strong>
							{" "}<button onClick={handleLogout}>Logout</button>
						</span>
						:
						<button onClick={handleLogin}>Login</button>
					}
				</div>
			</nav>
			<div>
				<p>
					{ user && <strong>Hello {user.name},<br/></strong> }
					This is an example of how to build global state management with <a href="https://react.dev/reference/react/useReducer">reducers</a> and the <a href="https://react.dev/reference/react/useContext">React Context API</a>. Check your console to see the current state after every update.
				</p>
			</div>
		</header>
	);
}
