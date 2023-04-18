interface ButtonProps {
	children: React.ReactNode;
	color?: "primary" | "secondary" | "danger";
	type: "button" | "submit" | "reset";
	isDisabled: boolean;
}

function Button({
	children,
	color = "primary",
	type,
	isDisabled,
}: ButtonProps) {
	return (
		<button type={type} className={`btn btn-${color}`} disabled={isDisabled}>
			{children}
		</button>
	);
}
export default Button;
