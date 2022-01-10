import React, { useState, useEffect } from 'react';
import MoodList from './MoodList';

export default function Output({ location, weather }) {
	if (!weather) {
		return <h3 className='output'>no data</h3>;
	}

	return (
		<div>
			{weather.weather.map((x, id) => {
				return (
					<h5 key={id} className='output'>
						{x.main}
					</h5>
				);
			})}
		</div>
	);
}
