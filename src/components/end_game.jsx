import Button from "./button";

function EndGame({ section, score, startGame }) {
	const end = section;

	return (
		<section className={`${end} flex-col items-center gap-4`}>
			<h2 className="text-white text-4xl font-medium">Fim de jogo!</h2>
			<p className="text-white text-xl font-bold mt-4">A sua pontuação foi: {score}</p>
			<Button action={startGame} textButton={"Reiniciar"} />
		</section>
	);
}

export default EndGame;
