"use client";
import React from "react";

function Disclosure({ children }) {
  const [isDisclosed, setIsDisclosed] = React.useState(false);
  return (
    <>
      {isDisclosed ? (
        <div>{children}</div>
      ) : (
        <div className="reveal">
          <button onClick={() => setIsDisclosed(true)}>Reveal Content</button>
        </div>
      )}
    </>
  );
}

export default Disclosure;
