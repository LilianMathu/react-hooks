import React, { useState, useEffect } from "react";

const ConditionalRendering = () => {
  //React render conditional 1#: Inline If with logical operator
  //  const [loggedIn, setLoggedIn] = useState(false);
  //  useEffect(() => {
  //    setLoggedIn(true);
  //  });
  //  return <div>{(loggedIn && <h1>Hello Lilian</h1>) || "Hello Stranger"}</div>;

  //React render conditional #2: Inline if-else with conditional operator

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(true);
  });

  return <div>{loggedIn ? "Hello Lilian" : "Hello stranger"}</div>;
};

export default ConditionalRendering;
