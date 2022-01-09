import React, { useState } from 'react';
import Mood from './Mood';
import Location from './Location'; //Keep here for now we might need

function MoodList({ weather }) {
	const [moodLists, setMoodList] = useState([
		{
			mood: 'very negative',
			selected: false,
			id: 0,
			weather: weather ? weather.weather[0].main : '',
		},
		{ mood: 'negative', selected: false, id: 1 },
		{ mood: 'neutral', selected: false, id: 2 },
		{ mood: 'positive', selected: false, id: 3 },
		{ mood: 'very positive', selected: false, id: 4 },
	]);

	return (
		<>
			<div className='dropdown'>
				<button className='dropbtn'>Drop Down</button>
				<h4>{}</h4>
				<div className='dropdown-content'>
					<span>{moodLists[0].mood}</span>
					<span>{moodLists[1].mood}</span>
					<span>{moodLists[2].mood}</span>
					<span>{moodLists[3].mood}</span>
					<span>{moodLists[4].mood}</span>
				</div>
			</div>
		</>
	);
}

export default MoodList;

// const location = 'New York';
// const sample = 'sample data 123 going to be from API';
// const temperature = 75;

// let mood;
// let moodDisplay;
// let tips;
// let finalOutput;

//might have to move functions around but just make them work for now
// function checkTemp() {
// 	if (temperature < 36) {
// 		tips = 'Potential Frost Advisory';
// 	}
// 	if (temperature > 105) {
// 		tips = 'Potential Heat Advisory';
// 	}
// 	if (temperature >= 110) {
// 		tips = 'Potential Excessive Heat Warning';
// 	}
// }

// function checkWeather() {
// 	tips = `The weather outside: ${sample}`;
// }

// function clouds() {
// 	tips = '';
// }

// function veryGood() {
// 	mood = 2;
// }

// function good() {
// 	mood = 1;
// }

// function neutral() {
// 	mood = 0;
// }
// function bad() {
// 	mood = -1;
// }

// function veryBad() {
// 	mood = -2;
// }

//Remember for now you are using sample data but you have to use API data by either getting API data to "travel" across each component <= best way probably for now or get API data to import into all the components seperately

// just do 3 categories of temperature cold room hot and also snow or rain or sun and wind level? make it simple

// function moodAdvice() {}
