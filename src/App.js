import './App.css';
import React, { useState } from 'react';
import Output from './Output';
import Mood from './Mood';
import Weather from './Weather';
import Location from './Location';
import react from 'react';

function App() {
	const [location, setLocation] = useState('');
	const [weather, setWeather] = useState(null);

	return (
		<>
			<h1>
				Weather it is me? <span>or not ...</span>
			</h1>
			<Weather></Weather>
			<Location setLocation={setLocation} location={location} setWeather={setWeather}></Location>
			<Mood weather={weather}></Mood>
			<Output location={location} weather={weather}></Output>
		</>
	);
}

export default App;
