import React, { useRef, useState } from "react";

const AddItem = () => {
  let [numItem, setNumItem] = useState(0);

  let addItem = () => {
    let n = numItem;
    n++;        //n = n + 1
    setNumItem(n);
  };

  let removeItem = () => {
    
  }

  return (
    <>
      <button onClick={removeItem}>-</button>
      <input type="text" style={{ textAlign: "center" }} value={numItem} />
      <button onClick={addItem}>+</button>
    </>
  );

};


export default AddItem;
