import React, { useState } from "react";

function Reminder() {
  const [items, setItems] = useState([]);

  const addNumbers = () => {
    setItems([
      ...items,
      {
        id: items.length,
        value: Math.ceil(Math.random() * 10),
      },
    ]);
  };

  return (
    <div>
      <button onClick={addNumbers}>Add number</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>Value: {item.value}</li>
        ))}
      </ul>
    </div>
  );
}

export default Reminder;
