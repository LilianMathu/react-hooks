import React, { useState, useEffect } from "react";

function Reminder() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const changeCount = () => {
    setCount(count + 1);
  };

  const changeName = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    console.log(`updated ${count} times`);
    document.title = `clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <button onClick={changeCount}>Count: {count}</button>
      <input type="text" value={name} onChange={changeName} />
    </div>
  );
}

export default Reminder;
