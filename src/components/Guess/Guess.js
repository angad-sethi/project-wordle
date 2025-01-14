import React from "react";
import { checkGuess } from "../../game-helpers";

function Guess({ guesses, answer, setResult, numOfguesses }) {
  return (
    <div class="guess-results">
      {guesses.map((guess, index) => {
        console.log(index);
        const checkedArray = checkGuess(guess, answer);

        if (guess === answer && numOfguesses <= 6) {
          setResult("win");
        } else if (numOfguesses > 6) {
          setResult("loss");
        }

        return (
          <p class="guess">
            {checkedArray.map((char) => {
              return <span class={`cell ${char.status}`}>{char.letter}</span>;
            })}
          </p>
        );
      })}
    </div>
  );
}

export default Guess;
