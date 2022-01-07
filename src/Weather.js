import React from 'react';

export default function Weather(props) {
	const weather = 'Raining';
	const temperature = 74;

	return (
		<>
			<h4>{weather}</h4>
			<h4>{temperature}°</h4>
		</>
	);
}
