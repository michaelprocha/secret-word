import { useState } from "react";
import Start from "./components/start";
import Game from "./components/game";
import EndGame from "./components/end_game";

function App() {
	const words = [
		{ category: "objeto", word: "mesa" },
		{ category: "objeto", word: "cadeira" },
		{ category: "objeto", word: "porta" },
		{ category: "objeto", word: "livro" },
		{ category: "objeto", word: "copo" },
		{ category: "objeto", word: "prato" },
		{ category: "objeto", word: "cama" },
		{ category: "objeto", word: "bola" },
		{ category: "objeto", word: "chave" },
		{ category: "objeto", word: "carro" },
		{ category: "ação", word: "ir" },
		{ category: "ação", word: "ver" },
		{ category: "ação", word: "dar" },
		{ category: "ação", word: "ler" },
		{ category: "ação", word: "rir" },
		{ category: "ação", word: "falar" },
		{ category: "ação", word: "comer" },
		{ category: "ação", word: "beber" },
		{ category: "ação", word: "correr" },
		{ category: "ação", word: "abrir" },
		{ category: "pessoa", word: "mãe" },
		{ category: "pessoa", word: "pai" },
		{ category: "pessoa", word: "filho" },
		{ category: "pessoa", word: "amigo" },
		{ category: "pessoa", word: "bebê" },
		{ category: "pessoa", word: "tia" },
		{ category: "pessoa", word: "tio" },
		{ category: "pessoa", word: "vó" },
		{ category: "pessoa", word: "avô" },
		{ category: "pessoa", word: "primo" },
	];

	const [score, setScore] = useState(0);
	const [viewWord, setViewWord] = useState([]);
	const [viewGategory, setViewGategory] = useState("");
	const [selectedWord, setSelectedWord] = useState([]);
	const [chances, setChances] = useState(3);
	const [sectionStart, setSectionStart] = useState("flex");
	const [sectionGame, setSectionGame] = useState("hidden");
	const [sectionEnd, setSectionEnd] = useState("hidden");

	const resetWord = () => {
		const position = Math.floor(Math.random() * words.length);

		const localSelectedWord = words[position].word.split("");
		setSelectedWord(words[position].word.split(""));

		const selectedWordForView = [...localSelectedWord];
		selectedWordForView.fill("");

		const selectedGategory = words[position].category;

		setViewGategory(selectedGategory);
		setViewWord(selectedWordForView);
	}

	const startGame = () => {
		resetWord();
		setChances(3);
		setScore(0);
		setSectionStart("hidden");
		setSectionEnd("hidden");
		setSectionGame("flex");
	};

	return (
		<main className="flex flex-col min-h-dvh">
			<Start startGame={startGame} section={sectionStart} />
			<Game
				setEndSection={setSectionEnd}
				setOwnSection={setSectionGame}
				section={sectionGame}
				resetWord={resetWord}
				score={score}
				setScore={setScore}
				viewWord={viewWord}
				category={viewGategory}
				secretWord={selectedWord}
				setViewWord={setViewWord}
				chances={chances}
				setChances={setChances}
			/>
			<EndGame section={sectionEnd} score={score} startGame={startGame} />
		</main>
	);
}

export default App;
