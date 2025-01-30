import { useState } from "react";

export default function RequestTracker() {
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);
// we need to use arrow functions to update the state of the form
// without the arrow function the pending will not update as well as completed 
// that's why the counters used to work weirdly now it is fixed by using the arrow function
  async function handleClick() {
    setPending((pending) => pending + 1);
    await delay(3000);
    setPending((pending) => pending - 1);
    setCompleted((completed) => completed + 1);
  }

  return (
    <>
      <h3>Pending: {pending}</h3>
      <h3>Completed: {completed}</h3>
      <button onClick={handleClick}>Buy</button>
    </>
  );
}

function delay(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
