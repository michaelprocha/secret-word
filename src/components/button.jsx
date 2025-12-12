function Button({ action, textButton }) {
	return (
		<button onClick={action} className="button">
			{textButton}
		</button>
	);
}

export default Button;
