import { useState } from "react";
import Button from "./button";

function Game({
    setEndSection,
    setOwnSection,
    section,
	resetWord,
	score,
	setScore,
	viewWord,
	category,
	secretWord,
	setViewWord,
	chances,
	setChances,
}) {
    const game = section;
	const [guessLetter, setGuessLetter] = useState("");

	const newWordView = [...viewWord];
	const stringSecretWord = secretWord.join("");

	const removerAcentos = (str) => {
		return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	};

	const guess = (e) => {
		e.preventDefault();
		let right = false;
		secretWord.forEach((letterAccent, i) => {
			const letter = removerAcentos(letterAccent);
			if (letter === guessLetter) {
				newWordView[i] = letterAccent;
				right = true;
			}
		});
		setViewWord(newWordView);
		if (!right) {
			setChances(chances - 1);
		}

		const stringNewWord = newWordView.join("");

		if (stringNewWord === stringSecretWord) {
			setScore(score + 100);
			resetWord();
		}

		if (chances <= 1) {
			setOwnSection("hidden");
			setEndSection("flex");
		}
	};

	return (
		<section className={`my-auto ${game} flex-col gap-6 items-center`}>
			<h3 className="text-xl text-white">Pontuação atual: {score}</h3>
			<h5 className="text-2xl text-white">Dica da palavra: {category}</h5>
			<p className="text-base font-bold text-white">chances: {chances}</p>
			<ul className="flex gap-2 p-4 bg-black">
				{viewWord.map((letter, i) => (
					<li key={i} className="text-7xl uppercase bg-white flex items-center justify-center w-22 h-28">
						{letter}
					</li>
				))}
			</ul>
			<p className="text-white font-bold">Tente adivinha uma letra da palavra:</p>
			<form onSubmit={(e) => guess(e)}>
				<label className="relative flex gap-4 items-center">
					<span className="absolute bottom-9999">Digite a letra</span>
					<input
						required
						maxLength="1"
						value={guessLetter}
						onInput={(e) => setGuessLetter(e.target.value)}
						className="bg-white h-8 w-8 text-center text-2xl rounded-md"
						type="text"
						name="letter"
					/>
					<Button action={null} textButton={"Chutar"} />
				</label>
			</form>
		</section>
	);
}

export default Game;
