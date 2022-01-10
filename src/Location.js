import React, { useState } from 'react';

export default function Location({ setZipcode, zipcode, setWeather }) {
	const url =
		'https://api.openweathermap.org/data/2.5/weather?q=New%20York%20City&appid=0f7ae3eca3979e434852a0f6be558f8e';

	const handleSubmit = (event) => {
		event.preventDefault();
		getWeatherByCity();
	};

	function getWeatherByCity() {
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${zipcode}&appid=0f7ae3eca3979e434852a0f6be558f8e`;
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
						placeholder='Zip Code, US'
						value={zipcode}
						onChange={(x) => setZipcode(x.target.value)}></input>
				</div>
				<button className='Search' type='submit'>
					Search
				</button>
			</form>
		</>
	);
}
