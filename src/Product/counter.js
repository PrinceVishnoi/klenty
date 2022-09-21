import React, { useState } from "react";
import './counter.css'
function Items() {
  const [add, setAdd] = useState(0);
  const clickHandler = () => {
    setAdd(add + 1);
  };
  const removeHandler = () => {
    if (add > 0) {
      setAdd(add - 1);
    } else {
      setAdd(0);
    }
  };
  return (
    <>
      <div className="buttonsboth">
        <button className="button1" onClick={clickHandler}>Add to Cart</button>
        <span className="no"> {add} </span>
        <button  className="button2" onClick={removeHandler}>Remove</button>
      </div>
    </>
  );
}
export default Items;
