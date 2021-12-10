import React, { useState, useEffect } from "react";

function UseEffect1() {
  const [count, setCount] = useState(0);

  const addClicks = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <button onClick={addClicks}>Click {count} times</button>
    </div>
  );
}

export default UseEffect1;
