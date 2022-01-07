import React from 'react';
import Location from './Location'; //Keep here for now we might need

function MoodList(props) {

	const location = "New York"

	let mood;
	let moodDisplay;

	function veryGood() {
		mood = 2;
	}

	function good() {
		mood = 1;
	}

	function neutral() {
		mood = 0;
	}
	function bad() {
		mood = -1;
	}

	function veryBad() {
		mood = -2;
	}

	function moodAdvice() {
		if (mood === 2) {
			moodDisplay = `Hello user from ${location}`
		}
	}

	return (
		<>
			<li onClick={veryGood}>Very Positive</li>
			<li onClick={good}>Positive</li>
			<li onClick={neutral}>Neutral</li>
			<li onClick={bad}>Negative</li>
			<li onClick={veryBad}>Very Negative</li>
		</>
	);
}

export default MoodList;
