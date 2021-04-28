import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
// we cannot use hooks in conditionals
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("use useEffect");
    if (value >= 1) {
      document.title = `New Messages(${value})`;
    }
  });
  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me!
      </button>
    </>
  );
};

export default UseEffectBasics;
