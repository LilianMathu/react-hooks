import React, { useState, useEffect } from "react";

const ConditionalRendering = () => {
  //React render conditional 1#: Inline If with logical operator

  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(true);
  });

  return <div>{(loggedIn && <h1>Hello Lilian</h1>) || "Hello Stranger"}</div>;
};

export default ConditionalRendering;
