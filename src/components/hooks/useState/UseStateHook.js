import React, { useState } from "react";

const UseStateHook = () => {
  let [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };
  const handleDec = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button onClick={handleInc}>+</button>
      <p>{count}</p>
      <button onClick={handleDec}>-</button>
    </div>
  );
};

export default UseStateHook;
