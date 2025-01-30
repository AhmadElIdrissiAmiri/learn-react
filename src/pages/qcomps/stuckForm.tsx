import { useState } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
// we need to use setFirstName and setLastName to update the state of the form
// and we need to use the handleFirstNameChange and handleLastNameChange functions to update the state of the form
// without the setFirstName and setLastName functions the form will not update

  function handleFirstNameChange(e: { target: { value: string; }; }) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e: { target: { value: string; }; }) {
    setLastName(e.target.value);
  }
// we need to use the handleReset 
// function to reset the state of the form using the SerFirstName and setLastName functions
  function handleReset() {
    setFirstName(''); 
    setLastName('');
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
