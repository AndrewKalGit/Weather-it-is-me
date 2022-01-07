import './App.css';
import Output from './Output';
import Mood from './Mood';
import Weather from './Weather';
import Location from './Location'

function App() {
	return (
		<>
			<h1>Weather it is me? <span>or not ...</span></h1> 
			<Weather></Weather>
			<Location></Location>
			<Mood></Mood>
			<Output></Output>
		</>
	);
}

export default App;
