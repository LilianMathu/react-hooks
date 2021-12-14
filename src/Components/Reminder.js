import React, { useState, useEffect } from "react";

function Reminder() {
  const [count, setCount] = useState(0);

  const changeCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    document.title = `clicked ${count} times`;
  });

  return (
    <div>
      <button onClick={changeCount}>Count: {count}</button>
    </div>
  );
}

export default Reminder;
