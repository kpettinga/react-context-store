import { useContext } from "react";
import { StoreContext } from "./store";

export const useStore = (callback) => {
	const context = useContext(StoreContext);
	if (!context) {
		throw new Error("useStore() must be used within <StoreProvider>");
	}
	const [state, dispatch] = context;
	return [callback ? callback(state) : state, dispatch];
};

export const useAuth = () => {
	function login(user, password, callback) {
		return fetch("http://httpbin.org/delay/2", { method: "POST", body: JSON.stringify({ user, password }) })
			.then( response => callback({ name: "Kirk" }, response) )
	}
		
	function logout(callback) {
		return fetch("http://httpbin.org/delay/2", { method: "POST" })
			.then( response => callback(response) )
	}

	return { login, logout }
};
