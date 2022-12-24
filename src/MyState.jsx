import React, { useState, useRef } from "react";

const MyState = () => {
  let n = useRef();
  let [name, setName] = useState("name"); //empty value

  let updateName = () => {
    setName(n.current.value);
  };

  return (
    <>
      Enter name: <input type="text" onChange={updateName} ref={n} />
      {/* <button onClick={updateName}>Click me</button> */}
      <p>{name}</p>
    </>
  );
};

export default MyState;
