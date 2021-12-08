import React, { useState } from "react";

function Hook2() {
  const initialCount = 0;

  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  const handleIncrementByFive = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevState) => prevState + 1);
    }
  };

  return (
    <div>
      <h1>Count: {count} </h1>
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <br />
      <button onClick={handleIncrement}>Increment</button>
      <br />
      <button onClick={handleDecrement}>Decrement</button>
      <br />
      <button onClick={handleIncrementByFive}>Increment 5</button>
      <br />
    </div>
  );
}

export default Hook2;
