import ChickenList from "./ChickenList";
import ChickenTools from "./ChickenTools";
import Header from "./Header";
import StoreProvider from "./StoreProvider";

function App() {
	return (
		<div className="App">
			<StoreProvider>
				<Header />
				<ChickenTools />
				<ChickenList style={{ marginTop: "3rem" }} />
			</StoreProvider>
		</div>
	);
}

export default App;
