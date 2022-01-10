import React, { useState, useEffect } from 'react';
import MoodList from './MoodList';

export default function Output({ location, weather }) {
	if (!weather) {
		return <h3 className='output'>Current: no data</h3>;
	}

	return (
		<div>
			{weather.weather.map((x, id) => {
				return (
					<h2 key={id} className='output'>
						{x.description}
					</h2>
				);
			})}
		</div>
	);
}
