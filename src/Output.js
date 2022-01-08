import React, { useState, useEffect } from 'react';
import MoodList from './MoodList';

export default function Output({location, weather}) {

	if (!weather) {
		return <h3>no data</h3>
	}

	return(
	<div>{weather.weather.map((x) => {
		return <h5>{x.description}</h5>;
	})}</div>
	)
}
