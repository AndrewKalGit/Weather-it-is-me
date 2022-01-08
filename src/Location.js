import React, { useState } from 'react';

export default function Location({setLocation, location, setWeather}) {

	// const initialState = {
	
	// }
	const url =
		'https://api.openweathermap.org/data/2.5/weather?q=New%20York%20City&appid=0f7ae3eca3979e434852a0f6be558f8e';

	const handleSubmit = (event) => {
		event.preventDefault();
		getWeatherByCity();
	};

	function getWeatherByCity() {
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=0f7ae3eca3979e434852a0f6be558f8e`;
		fetch(url)
			.then((res) => res.json())
			.then((json) => setWeather(json))
			.catch(console.error);
	}

	// const handleChange = (event) => {
	// 	setLocation({...setLocation, })
	// };

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Location</label>
					<input
						type='text'
						value={location}
						onChange={(x) => setLocation(x.target.value)}></input>
				</div>
				<button type='submit'>Search</button>
			</form>
			<p>{location}</p>
		</>
	);
}
