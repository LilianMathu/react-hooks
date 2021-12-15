import React, { useState, useEffect } from "react";

function MousePosition() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const moveFunction = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", moveFunction);
  }, []);

  return (
    <div>
      X is - {x}, Y is - {y}
    </div>
  );
}

export default MousePosition;
