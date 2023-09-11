import ChickenList from "./ChickenList";
import ChickenTools from "./ChickenTools";
import Header from "./Header";
import History from "./History";
import StoreProvider from "./StoreProvider";
import OtherCoop from "./OtherCoop";

function App() {

	return (
		<div className="App">
		
			<StoreProvider shouldLog isUndoable>
				<Header />
				<div className="card">
					<ChickenTools />
					<ChickenList style={{ marginTop: "3rem" }} />
				</div>
				<History style={{ textAlign: 'center', margin: '1rem' }} />
			</StoreProvider>

			<StoreProvider>
				{/* Separate Providers track SEPARATE states */}
				<OtherCoop />
			</StoreProvider>

		</div>
	);
}

export default App;
