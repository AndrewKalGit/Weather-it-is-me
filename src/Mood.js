import MoodList from './MoodList';
import Location from './Location';

export default function Mood({ weather }) {
	function onClick() {}
	return (
		<>
			<div>
				<MoodList weather={weather} />
			</div>
		</>
	);
}
