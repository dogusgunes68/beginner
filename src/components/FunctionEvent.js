import React from "react";

export default function FunctionEvent() {
  const handleEvent = () => {
    console.log("Button Clicked");
  };
  return (
    <div>
      FunctionEvent <button onClick={handleEvent}>Click here</button>
    </div>
  );
}
