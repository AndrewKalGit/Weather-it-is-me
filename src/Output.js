import React, { useState, useEffect } from 'react';
import MoodList from './MoodList';

export default function Output({location, weather}) {

	if (!weather) {
		return <h3 className='output'>no data</h3>
	}

	return(
	<div>{weather.weather.map((x) => {
		return <h5 className='output'>{x.description}</h5>;
	})}</div>
	)
}
