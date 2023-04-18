import { useState } from "react";

function RatingSelect({ select }: { select: (rating: number) => void }) {
	const [selected, setSelected] = useState(10);
	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setSelected(parseInt(e.target.value));
		select(parseInt(e.target.value));
	}
	return (
		<ul className="rating">
			{Array.from({ length: 10 }, (_, i) => (
				<li key={`rating-${i + 1}`}>
					<input
						type="radio"
						id={`num${i + 1}`}
						name="rating"
						value={i + 1}
						onChange={handleChange}
						checked={selected === i + 1}
					/>
					<label htmlFor={`num${i + 1}`}>{i + 1}</label>
				</li>
			))}
		</ul>
	);
}
export default RatingSelect;
