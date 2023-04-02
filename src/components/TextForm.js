import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    console.log("UpperCase Was Clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const resetText = () => {
    console.log("Reset was clicked");
    setText("Enter text here");
  };

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="12"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Upper Case
      </button>
      <p />
      <button className="btn btn-primary" onClick={resetText}>
        Reset
      </button>
    </div>
  );
}
