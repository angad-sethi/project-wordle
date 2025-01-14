import React from "react";
import GuessInput from "../GuessInput/GuessInput";
import { sample } from "../../utils";
import { WORDS } from "../../data";
import Banner from "../GuessList/GuessList";
import Guess from "../Guess/Guess";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [result, setResult] = React.useState("");
  // const guessList = guesses;
  function handleGuessSubmit(newGuess) {
    setGuesses([...guesses, newGuess]);
  }

  const lastSixGuesses = guesses.length <= 6 ? guesses : guesses.slice(-6);

  return (
    <>
      <Guess
        guesses={lastSixGuesses}
        answer={answer}
        setResult={setResult}
        numOfguesses={guesses.length}
      />
      <GuessInput handleGuessSubmit={handleGuessSubmit} />
      <Banner result={result} answer={answer} numOfguesses={guesses.length} />
    </>
  );
}

export default Game;
