import React, { useState, useEffect } from "react";

function UseEffect1() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const addClicks = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("updated");
    document.title = `Clicked ${count} times`;
  }, [count]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <button onClick={addClicks}>Clicked {count} times</button>
    </div>
  );
}

export default UseEffect1;
