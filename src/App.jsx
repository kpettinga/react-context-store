import ChickenList from "./ChickenList";
import ChickenTools from "./ChickenTools";
import Header from "./Header";
import History from "./History";
import StoreProvider from "./StoreProvider";

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

			{/* 
				Note: Separate Providers will track SEPARATE states. 
				So all components that need access to the same state should be 
				wrapped in the same StoreProvider component 
			*/}

		</div>
	);
}

export default App;
