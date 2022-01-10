import './App.css';
import React, { useState } from 'react';
import Output from './Output';
import Mood from './Mood';
import Description from './Description';
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
			<div className='grid-container'>
				<Description></Description>
				<Location
					setWeather={setWeather}
					zipcode={zipcode}
					setZipcode={setZipcode}></Location>
				<Mood weather={weather}></Mood>
				<span className='flex-container'>
					<Output weather={weather} zipcode={zipcode}></Output>
				</span>
			</div>
		</>
	);
}

export default App;
