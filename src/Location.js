import React, { useState } from 'react';

export default function Location({ setZipcode, zipcode, setWeather }) {
	const handleSubmit = (event) => {
		event.preventDefault();
		getWeatherByCity();
	};

	function getWeatherByCity() {
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${zipcode}&appid=${process.env.REACT_APP_API_KEY}`;
		fetch(url)
			.then((res) => res.json())
			.then((json) => setWeather(json))
			.catch(console.error);
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div>
					<label className='white-text'>Location: </label>
					<input
						type='text'
						pattern='[0-9,A-Za-z]{8}'
						placeholder='Zip Code,US'
						value={zipcode}
						onChange={(x) => setZipcode(x.target.value)}></input>
				</div>
				<button className='Search' type='submit'>
					Search
				</button>
				<p className='smallDisclaimer'>
					Currently mainly supports 5 digit zip codes followed by a comma and a
					2 letter country code. For best results follow exact format, don't
					include spaces.
				</p>
			</form>
		</>
	);
}
