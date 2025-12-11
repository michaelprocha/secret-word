import Button from "./button";

function Start({ startGame }) {
	return (
		<>
			<section className="my-auto flex flex-col gap-6 items-center">
				<h1 className="font-extrabold text-4xl uppercase">Adivinhe a palavra</h1>
				<Button startGame={startGame} />
			</section>
		</>
	);
}

export default Start;
