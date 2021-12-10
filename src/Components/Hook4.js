import React, { useState } from "react";

function Hook4() {
  const [numbers, setNumbers] = useState([]);

  const addNumbers = (e) => {
    setNumbers(...numbers, {
      id: numbers.length,
      value: Math.floor(Math.random() * 10) + 1,
    });
  };

  return (
    <div>
      <button onClick={addNumbers}>Add a number to the array</button>
      <ul>
        {numbers.map((number) => (
          <li key={number.id}>{number.value} </li>
        ))}
      </ul>
    </div>
  );
}

export default Hook4;
