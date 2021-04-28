import React, { useState } from "react";

const UseStateBasics = () => {
  const [text, setText] = useState("random title");

  const handleClick = () => {
    // setText("hello world");
    if (text === "random title") {
      setText("hello world");
    } else {
      setText("random title");
    }
  };

  return (
    <>
      <h1>{text}</h1>
      <button className="btn" type="button" onClick={handleClick}>
        change title
      </button>
    </>
  );
};

export default UseStateBasics;
