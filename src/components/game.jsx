import { useState, useRef } from "react";
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
	const inputRef = useRef(null)
	const [guessLetter, setGuessLetter] = useState("");
	const [letters, setLetters] = useState("")

	const newWordView = [...viewWord];
	const stringSecretWord = secretWord.join("");

	const removerAcentos = (str) => {
		return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	};

	const guess = (e) => {
		e.preventDefault();
		let right = false;
		const lowerCaseGuess = guessLetter.toLowerCase();
		secretWord.forEach((letterAccent, i) => {
			const letter = removerAcentos(letterAccent);
			if (letter === lowerCaseGuess) {
				newWordView[i] = letterAccent;
				right = true;
			}
		});
		setViewWord(newWordView);
		if (!right) {
			setChances(chances - 1);
		}

		const stringNewWord = newWordView.join("");

		setGuessLetter("");

		if (letters === "") {
			setLetters(guessLetter);
		}else{
			setLetters(`${letters}, ${guessLetter}`);
		}

		inputRef.current.focus();

		if (stringNewWord === stringSecretWord) {
			setLetters("");
			setScore(score + 100);
			resetWord();
		}

		if (chances <= 1) {
			setLetters("");
			setOwnSection("hidden");
			setEndSection("flex");
		}
	};

	function formatInput(e){
		const letter = e.target.value.toUpperCase();
		setGuessLetter(letter);
	}

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
			<form className="flex gap-4 items-center" onSubmit={(e) => guess(e)}>
				<label className="relative">
					<span className="absolute bottom-9999">Digite a letra</span>
					<input
						ref={inputRef}
						autoComplete="off"
						required
						maxLength="1"
						value={guessLetter}
						onInput={(e) => formatInput(e)}
						className="bg-white h-8 w-8 text-center text-2xl rounded-md"
						type="text"
						name="letter"
					/>
				</label>
				<Button action={null} textButton={"Chutar"} />
			</form>
			<p className="text-white font-medium">Letras chutadas: {letters}</p>
		</section>
	);
}

export default Game;
