import React, { useState } from 'react';

export default function Location(props) {
	const [location, setLocation] = useState('New York City');

	return (
		<>
			<form>
				<div>
					<label>Location</label>
					<input
						type='text'
						value={location}
						onChange={(x) => setLocation(x.target.value)}></input>
				</div>
				<button type='submit'>Search</button>
			</form>
			<p>
				PUT API DATA HERE for example you can type in anything and it will
				appear in this "variable" box so use that to your advantage by making to
				refer to a key: {location}
			</p>
		</>
	);
}
