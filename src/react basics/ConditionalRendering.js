import React, { useState, useEffect } from "react";

const ConditionalRendering = () => {
  //1#: Inline If with logical operator
  //  const [loggedIn, setLoggedIn] = useState(false);
  //  useEffect(() => {
  //    setLoggedIn(true);
  //  });
  //  return <div>{(loggedIn && <h1>Hello Lilian</h1>) || "Hello Stranger"}</div>;
  //#2: Inline if-else with conditional operator
  //const [loggedIn, setLoggedIn] = useState(false);
  //useEffect(() => {
  //  setLoggedIn(true);
  //});
  //return <div>{loggedIn ? <h1>Hello Lilian</h1> : <h1>Hello Guest</h1>}</div>;
  //3#: If-Else statement
  //const [loggedIn, setloggedIn] = useState(false);
  //useEffect(() => {
  //  setloggedIn(true);
  //});
  //if (loggedIn) {
  //  return (
  //    <div>
  //      <h1>Hello Lilian</h1>
  //    </div>
  //  );
  //} else {
  //  return (
  //    <div>
  //      <h1>Hello Stranger</h1>
  //    </div>
  //  );
  //}
  //4# : React Component returning null -> This is mostly useful for drop-down menus, or modals.
  const Modal = (props) => {
    if (!props.show) {
      return null;
    }
    return <h1>Register Here!</h1>;
  };

  const Register = () => {
    const [showModal, setshowModal] = useState(false);

    const handleChange = () => {
      setshowModal(true);
    };
    return (
      <>
        <Modal show={showModal} />
        <button onClick={handleChange}>Register</button>
      </>
    );
  };
};

export default ConditionalRendering;
