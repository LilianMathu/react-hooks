import React, { useState, useEffect } from "react";

function MousePosition() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const MouseMoveHandler = (e) => {
    console.log('mouse has moved');
    
  }

  useEffect(() => {
    console.log("use-effect called");
    window.addEventListener("mousemove", MouseMoveHandler);
  });

  return <div></div>;
}

export default MousePosition;
