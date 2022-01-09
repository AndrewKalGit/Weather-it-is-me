import './App.css';
import React, { useState } from 'react';
import Output from './Output';
import Mood from './Mood';
import Weather from './Weather';
import Location from './Location';
import react from 'react';

function App() {
	const [zipcode, setZipcode] = useState('');
	const [weather, setWeather] = useState(null);

	return (
		<>
			<h1 className='head1'>
				Weather it is me? <span>or not ...</span>
			</h1>
			
			<Weather></Weather>
			<Location
				setWeather={setWeather}
				zipcode={zipcode}
				setZipcode={setZipcode}></Location>
			<Mood weather={weather}></Mood>
			<Output weather={weather} zipcode={zipcode}></Output>
		</>
	);
}

export default App;
