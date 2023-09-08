import { useEffect } from "react";
import ChickenList from "./ChickenList";
import ChickenTools from "./ChickenTools";
import Header from "./Header";
import StoreProvider from "./StoreProvider";

function App() {
	return (
		<div className="App">
			<StoreProvider shouldLog={true}>
				<Header />
				<div className="card">
					<ChickenTools />
					<ChickenList style={{ marginTop: "3rem" }} />
				</div>
			</StoreProvider>
		</div>
	);
}

export default App;
