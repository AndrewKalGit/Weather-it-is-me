import React, { useState } from 'react';
import Mood from './Mood';
import Location from './Location';

function MoodList({ weather }) {
	const [tip, setTip] = useState(null);
	const [moodForm, setMoodForm] = useState('');
	const [moodLists, setMoodList] = useState([
		{
			mood: 'very negative',
			selected: false,
			id: 0,
		},
		{ mood: 'negative', selected: false, id: 1 },
		{ mood: 'neutral', selected: false, id: 2 },
		{ mood: 'positive', selected: false, id: 3 },
		{ mood: 'very positive', selected: false, id: 4 },
	]);

	function generateTips() {
		if (
			weather &&
			moodForm === 'negative' &&
			weather.weather[0].main === 'clear'
		) {
			setTip(
				'No clouds obstructing the sunshine! Since you are feeling down go for a walk, and get some sunlight!'
			);
		}
	}
	console.log(setTip);
	function handleChange(event) {
		setMoodForm(event.target.value);
		generateTips();
	}

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
