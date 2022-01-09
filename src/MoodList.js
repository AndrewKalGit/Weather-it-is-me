import React, { useState } from 'react';
import Mood from './Mood';
import Location from './Location'; //Keep here for now we might need

function MoodList({ weather }) {
	const [tip, setTip] = useState(null)
	const [moodForm, setMoodForm] = useState('');
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

	//function compare the 2: weather api data and human data
	//<p {function name here}></p>
	//have another state variable for advice and 

	//simple version no logic
	function generateTips() {
		//after if logic to determine tip
		setTip('this is your tip')
	}

	function handleChange(event) {
		setMoodForm(event.target.value);
		generateTips();
		//trigger the function to compare 
		//compare weather and selected mood 
	}
	//regular expressions form validation and make user only put in what you want post mvp
	return (
		<>
			<div className='dropdown'>
				<label htmlFor='Moods'>Select a mood: </label>
				<select onChange={handleChange} name='Moods' value={moodForm}>
					<option>-</option>
					<option value={moodLists[0].mood}>{moodLists[0].mood}</option>
					<option value={moodLists[1].mood}>{moodLists[1].mood}</option>
					<option value={moodLists[2].mood}>{moodLists[2].mood}</option>
					<option value={moodLists[3].mood}>{moodLists[3].mood}</option>
					<option value={moodLists[4].mood}>{moodLists[4].mood}</option>
				</select>
			</div>
			<p>{tip && tip}</p>
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
