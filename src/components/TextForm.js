import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

const handleCopy =()=> {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
}

const handleExtraSpace =()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
}

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    console.log("UpperCase Was Clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    console.log("UpperCase Was Clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const resetText = () => {
    console.log("Reset was clicked");
    setText("");
  };

  return (
    <>
    <div className="container">
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
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>
        Convert to Upper Case
      </button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>
        Convert to Lower Case
      </button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>
        Copy Text
      </button>
      <button className="btn btn-primary mx-1" onClick={resetText}>
        Reset
      </button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>
        Remove Extra Space
      </button>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters.</p>
        <p>{text.split(" ").length * 0.008} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}
