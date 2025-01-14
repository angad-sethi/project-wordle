import React from "react";

function GuessInput({ handleGuessSubmit }) {
  const [textValue, setTextValue] = React.useState("");

  return (
    <>
      <form
        onSubmit={(event) => {
          event.preventDefault();

          handleGuessSubmit(textValue);
          setTextValue("");
        }}
        class="guess-input-wrapper"
      >
        <label for="guess-input">Enter guess:</label>
        <input
          id="guess-input"
          type="text"
          value={textValue}
          onChange={(event) => {
            const upperCase = event.target.value.toUpperCase();
            setTextValue(upperCase);
          }}
          required
          pattern="[A-Z]{5,5}"
          title="5 letter word"
        />
      </form>
    </>
  );
}

export default GuessInput;
