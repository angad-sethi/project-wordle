import React from "react";

function Banner({ result, answer, numOfguesses }) {
  if (result === "win") {
    return (
      <div class="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {numOfguesses} guesses</strong>.
        </p>
      </div>
    );
  } else if (result === "loss") {
    return (
      <div class="sad banner">
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
      </div>
    );
  } else if (result === "Hack") {
    return (
      <div class="sad banner">
        <p>
          Sorry, the Carlton blues haven't won a championship since 1995 despite
          having a championship team and coach and all the money in the world.
          Please cry alone and don't get the tears on the keyboard Ryan.
        </p>
      </div>
    );
  } else {
    return null;
  }
}

export default Banner;
