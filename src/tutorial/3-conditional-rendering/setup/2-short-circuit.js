import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  return (
    <>
      <h1>{text || "soodit kumar"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        Toggle Error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <h4>there is an error...</h4>
      ) : (
        <div>
          <h4>there is no error</h4>
        </div>
      )}
      {/* {text && <h3>Truthy Displays here</h3>}
      {!text && <h3>Falsy Displays here</h3>} */}
    </>
  );
};

export default ShortCircuit;
