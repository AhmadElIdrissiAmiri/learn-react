import { useState } from "react";

export default function Scoreboard() {
  const [player, setPlayer] = useState({
    firstName: "John Woodrow",
    lastName: "Wilson",
    likescore: 10,
  });
  // we have to use setplayer to update the player object including the likescore

  function handlePlusClick() {
    setPlayer({
      ...player,
      likescore: player.likescore + 1,
    });
  }
  // we have to use setplayer to update the player object including the firstname
  function handleFirstNameChange(e: { target: { value: string } }) {
    setPlayer({
      ...player,
      firstName: e.target.value,
    });
  }
  // we have to use setplayer to update the player object including the lastname
  function handleLastNameChange(e: { target: { value: string } }) {
    setPlayer({
      ...player,
      lastName: e.target.value,
    });
  }

  return (
    <>
      <label>
        Like Score: <b>{player.likescore}</b>
        {"  "}
        <button onClick={handlePlusClick}>+1</button>
      </label>
      <label>
        First name:
        <input value={player.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={player.lastName} onChange={handleLastNameChange} />
      </label>
    </>
  );
}
