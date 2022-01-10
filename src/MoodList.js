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

	function generateTips(mood) {
		if (mood === 'negative' && weather.weather[0].main === 'Clear') {
			setTip(
				'No clouds obstructing the sunshine! Since you are feeling down go for a walk, and get some sunlight!'
			);
		} else if (
			mood === 'very negative' &&
			weather.weather[0].main === 'Clear'
		) {
			setTip(
				"No clouds obstructing the sunshine! Since you are feeling down go for a walk, and get some sunlight! Sometimes it could just be the weather, but if the walk and sunlight doesn't help don't be afraid to get support!"
			);
		} else if (mood === 'positive' && weather.weather[0].main === 'Clear') {
			setTip(
				"That's awesome that you are feeling good, keep it up and get some sunlight to maintain it!"
			);
		} else if (
			mood === 'very positive' &&
			weather.weather[0].main === 'Clear'
		) {
			setTip(
				"That's awesome that you are feeling good, keep it up and get some sunlight to maintain it! Sometimes even if you on top of the world it's good to not become complacent with your health"
			);
		} else if (mood === 'neutral' && weather.weather[0].main === 'Clear') {
			setTip(
				'Nothing wrong feeling just "ok"! It is ok to feel good as well, so go out for some sunlight and brighten your day!'
			);
		} else {
			setTip(
				'This weather is not supported yet and the tip is still in development'
			);
		}

		if (mood === 'negative' && weather.weather[0].main === 'Clouds') {
			setTip(
				'Oh no! Just remember it is ok to feel not ok and more often than not studies show bad weather and little sunlight can affect mood. Days like this it is even more important to have good company to remind you the world is not that bad after all.'
			);
		} else if (
			mood === 'very negative' &&
			weather.weather[0].main === 'Clouds'
		) {
			setTip(
				'Oh no! Just remember it is ok to feel not ok and more often than not studies show bad weather and little sunlight can affect mood. Days like this it is even more important to have good company to remind you the world is not that bad after all. If you are feeling depressed or just very down seek support and utilize resources around you! Warm regards <3'
			);
		} else if (mood === 'positive' && weather.weather[0].main === 'Clouds') {
			setTip(
				"That's awesome that you are feeling good, keep it up and make sure you focus on the silver linings. Keep doing what you are doing!"
			);
		} else if (
			mood === 'very positive' &&
			weather.weather[0].main === 'Clouds'
		) {
			setTip(
				"That's awesome that you are feeling good, keep it up and make sure you focus on the silver linings. Keep doing what you are doing! Make sure not to neglect yourself even when you are feeling good. Sometimes when people feel very great, they can often forget how they got there. :^) Keep it up!"
			);
		} else if (mood === 'neutral') {
			setTip(
				'Nothing wrong feeling just "ok"! It is ok to feel good as well, so surround yourself in an environment you love or with people you love being around!'
			);
		}
		if (mood === 'negative' && weather.weather[0].main === 'Rain') {
			setTip(
				'It is raining, caution while driving. Rain can provoke feelings of sadness and depression. It is important to stay connected to other areas of your life that make you feel well.'
			);
		} else if (mood === 'very negative' && weather.weather[0].main === 'Rain') {
			setTip(
				'It is raining, caution while driving. Rain can provoke feelings of sadness and depression. It is important to stay connected to other areas of your life that make you feel well. It could feel like a mellow moment, and the rain may not be helping. Days like this since it may be hard to be outside, look around your home space and appreciate or possibly even enjoy what you do have'
			);
		} else if (mood === 'positive' && weather.weather[0].main === 'Rain') {
			setTip(
				"That's awesome that you are feeling good, stay well. Sine it may be harder to go out, take some time to appreciate what you have indoors"
			);
		} else if (mood === 'very positive' && weather.weather[0].main === 'Rain') {
			setTip(
				"That's awesome that you are feeling good, stay well. Sine it may be harder to go out, take some time to appreciate what you have indoors. It is easy to lose sight and take how you became so happy for granted! Take some time to reflect on what's contributing to this happiness :^) Cheers!"
			);
		} else if (mood === 'neutral' && weather.weather[0].main === 'Rain') {
			setTip(
				'Nothing wrong feeling just "ok"! It is ok to feel good as well. Take this time to be intentional and appreciate what you have inside of your home enviroment!'
			);
		}
	}

	function handleChange(event) {
		console.log(event.target.value);
		setMoodForm(event.target.value);
		generateTips(event.target.value);
	}

	return (
		<>
			<div className='dropdown'>
				<label htmlFor='Moods' className='white-space'>
					Select a mood:{' '}
				</label>
				<select
					onChange={handleChange}
					name='Moods'
					value={moodForm}
					disabled={weather ? false : true}>
					<option>-</option>
					<option value={moodLists[0].mood}>{moodLists[0].mood}</option>
					<option value={moodLists[1].mood}>{moodLists[1].mood}</option>
					<option value={moodLists[2].mood}>{moodLists[2].mood}</option>
					<option value={moodLists[3].mood}>{moodLists[3].mood}</option>
					<option value={moodLists[4].mood}>{moodLists[4].mood}</option>
				</select>
			</div>
			<br></br>
			<p id='whitesmoke'>{tip && tip}</p>
		</>
	);
}

export default MoodList;
