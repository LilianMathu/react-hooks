import React, { useState } from "react";

function Hook4() {
  const [numbers, setNumbers] = useState([]);

  const addNumber = () => {
    setNumbers([
      ...numbers,
      {
        id: numbers.length,
        value: Math.ceil(Math.random() * 10),
      },
    ]);
  };

  return (
    <div>
      <button onClick={addNumber}>Add a new number</button>
      <ul>
        {numbers.map((number) => (
          <li key={number.id}>Value: {number.value} </li>
        ))}
      </ul>
    </div>
  );
}

export default Hook4;
