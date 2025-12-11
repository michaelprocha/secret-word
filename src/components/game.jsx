import { useState } from "react";

function Game({score, setScore, viewWord}) {

	return (
        <section className="my-auto flex flex-col gap-6 items-center">
            <h3>Pontuação atual: {score}</h3>
            <h5>Dica da palavra: </h5>
            <p>chances: </p>
            <ul className="flex gap-2 p-4 bg-black">
                {viewWord.map((letter, i) => (
                    <li key={i} className="text-7xl uppercase bg-white flex items-center justify-center w-22 h-28">a{letter}</li>
                ))}
            </ul>
        </section>
    )
}

export default Game;
