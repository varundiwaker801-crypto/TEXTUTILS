import React, { useState } from "react";

export default function TextForm(props) {
  const handelUpClick = () => {
    //  console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  const handelLoClick = () => {
    //  console.log("uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };
  const handelOnchange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  const handelClearClick = (event) => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "success");
  };
  const handleTitleClick = () => {
    let newText = text

      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    setText(newText);
    props.showAlert("Converted to Title Case!", "success");
  };

  const handleCopyClick = () => {
    let copyText = document.getElementById("myBOx");
    copyText.select();
    copyText.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Copied to clipboard!", "success");
  };

  const handleExtraSpacesClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const [text, setText] = useState("");
  //  text = "new text";//worng way to change the state variable
  //  setText("new text"); //correct way to change the state variable
  return (
    <>
      <div style={{ color: props.mode === "dark" ? "white" : "black" }} >
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handelOnchange}
            style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "black" }}id="myBOx" rows="8" ></textarea>
        </div>
        <button className="btn btn-primary mx-3" onClick={handelUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary mx-3" onClick={handelLoClick}>
          Convert to Lowercase
        </button>

        <button className="btn btn-primary mx-3" onClick={handelClearClick}>
          Clear Text
        </button>

        <button className="btn btn-primary mx-3" onClick={handleTitleClick}>
          Convert to Title Case
        </button>

        <button className="btn btn-primary mx-3" onClick={handleCopyClick}>
          Copy Text
        </button>

        <button
          className="btn btn-primary mx-3"
          onClick={handleExtraSpacesClick}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3"style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your text summary</h2>
      <p>
            {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words,{" "}
            {text.length} characters
      </p>
        <p>{0.33 * text.trim() === "" ? 0 : text.trim().split(/\s+/).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : "Enter text in the textbox above to preview it here."}</p>
      </div>
    </>
  );
}
