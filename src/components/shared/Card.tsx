function Card({
	children,
	reverse,
}: {
	children: React.ReactNode;
	reverse?: boolean;
}) {
	return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
}
export default Card;
