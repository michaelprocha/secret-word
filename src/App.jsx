import { useState } from "react";
import Start from "./components/start";
import Game from "./components/game";

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
  const [viewWord, setViewWord] = useState([])
  const [viewGategory, setViewGategory] = useState("")

	const startGame = () => {
		const position = Math.floor(Math.random() * (words.length + 2));

		const selectedWord = words[position].word.split("");

		const selectedWordForView = [...selectedWord];
    selectedWordForView.fill("");

		const selectedGategory = words[position].category;

    setViewGategory(selectedGategory);
    setViewWord(selectedWordForView);
	};

	return (
		<main className="flex flex-col min-h-dvh">
			<Start startGame={startGame} />
			<Game score={score} setScore={setScore} viewWord={viewWord}/>
		</main>
	);
}

export default App;
