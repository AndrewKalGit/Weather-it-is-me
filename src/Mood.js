import MoodList from './MoodList';

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
