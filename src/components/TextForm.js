import React from "react";
import { useState } from "react"; // To use useState hook we need to first import it

export default function TextForm(props) {
  function handleUpClick() {
    let newText = text.toUpperCase(); // Using the javascript function to convert to lowercase
    settext(newText); // Setting the value of the state variable text to the new converted value
  }
  const handleLowClick = () => {
    let newText = text.toLowerCase(); // Using the javascript function to convert to Uppercase
    settext(newText); // Setting the value of the state variable text to the new converted value
  };
  const handleClearClick = () => {
    settext("");
    let textl = document.getElementById("myBox");
    textl.select();
  };
  const handleCopyClick = () => {
    let textl = document.getElementById("myBox");
    textl.select();
    navigator.clipboard.writeText(text);
    // alert('copied to clipboard');
  };
  // const handleRemoveClick = () => {
  //   let textArr = text.split(" ");
  //   let len = textArr.length;
  //   for(let i = 0; i<= len-1; i++){
  //     if(textArr[i] !== ""){
  //       textArr = textArr.slice(i,i+1);
  //     }
  //     else{
  //       continue;
  //     }
  //   }
  //   console.log(textArr);
  // }
  function handleOnChange(event) {
    // Any event handler gives us a parameter event which we can use
    settext(event.target.value); // Basically this lines means that "event.target" the target at which event occured ".value" gives the value of that target
    // What happens is that when any change event occurs the event parameter is passed through the onchange function by using it in line 'event.target' we are getting the target at which the event has occured then by using 'event.target.value' we are getting its value. Then we are using the line settext(event.target.value) we are setting the value obtained into the state variable text on every change, Thus updating the value entered by the user into the text variable on every change
  }
  const handleclick = () =>{
    window.scrollTo(0, 92);
  }
  const [text, settext] = useState(""); // we need to write this line inside the component's function
  return (
    <>
      <div>
        <h1 className={`text-${props.mode.color}`}>Text Analyzer</h1>
        <label className={`text-${props.mode.color}`} htmlFor="myBox">
          {props.heading}
        </label>
        {/* Value is used for Storing the text of the text area into state variable text initialized above */}
        <textarea
          className={`form-control bg-${props.mode.backgroundColor} text-${props.mode.color}`}
          id="myBox"
          rows="8"
          value={text}
          onChange={handleOnChange}
          onClick={handleclick}
        ></textarea>
        {/* If we provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable we need to set onChange function.*/}
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary" onClick={handleCopyClick}>
          Copy Text
        </button>
        {/* <button className="btn btn-primary" onClick={handleRemoveClick}>Remove Extra Spaces</button> */}
      </div>
      <div
        className={`container1 text-${props.mode.color} bg-${props.mode.mainBg}`}
      >
        <div className="container ">
          <h4>Your Text Summary</h4>
          <p>
            The text you entered contains{" "}
            <b>
              {
                text.split(" ").filter((element) => {
                  return element.length !== 0;
                }).length
              }
            </b>{" "}
            words and <b>{text.length - text.split(" ").length + 1}</b>{" "}
            characters
          </p>
          <p>
            The Estimated time required to read the text entered by you is{" "}
            <b>{0.025 * (text.length - text.split(" ").length + 1)}</b>sec
          </p>
        </div>
        <div className="container" style={{marginBottom : '13.5vh'}}>
          <h4>Preview of your text</h4>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
