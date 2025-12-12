import Button from "./button";

function Start({ startGame, section }) {
	const start = section;
	return (
		<>
			<section className={`my-auto ${start} flex-col gap-6 items-center`}>
				<h1 className="text-white font-extrabold text-4xl uppercase">Adivinhe a palavra</h1>
				<Button action={startGame} textButton={"Começar jogo"}/>
			</section>
		</>
	);
}

export default Start;
