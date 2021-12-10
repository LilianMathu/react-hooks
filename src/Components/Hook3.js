import React, { useState } from "react";

function Hook3() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <div>
      <form action="">
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />

        <h1>FirstName is {name.firstName}</h1>
        <h1>LastName is {name.lastName}</h1>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div> 
  );
}

export default Hook3;
