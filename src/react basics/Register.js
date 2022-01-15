import React, { useState } from "react";

const Modal = (props) => {
  if (!props.show) {
    return null;
  }
  return <h1>Register Here!</h1>;
};

const Register = () => {
  const [register, setregister] = useState(false);

  const handleChange = () => {
    setregister(!register);
  };
  return (
    <>
      <Modal show={register} />
      <button onClick={handleChange}>Register</button>
    </>
  );
};

export default Register;
