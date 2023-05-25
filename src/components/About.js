import React from "react";

export default function About(props) {
  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button bg-${props.mode.backgroundColor} text-${props.mode.color}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
            <b>About Text Analyser</b>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div
              className={`accordion-body bg-${props.mode.backgroundColor} text-${props.mode.color}`}
            >
              <b>Text Analyzer</b> is a powerful and user-friendly website
              designed to assist you in analyzing and manipulating text quickly
              and efficiently. Whether you're a student, writer, or simply
              someone who works with text regularly, Text Analyzer is your
              go-to tool for gaining valuable insights and performing essential
              text transformations.<br/><br/>
              Beyond analyzing the text, Text Analyzer also provides convenient text transformation tools. With a single click, you can effortlessly convert your text to uppercase, allowing for emphasis or complying with specific stylistic guidelines. Conversely, the website also offers the option to convert your text to lowercase, ideal for when you need to normalize or reduce the emphasis in your writing.<br/><br/>
              Text Analyzer is a versatile and user-friendly website that empowers you to analyze text effectively. With its comprehensive word and character count, estimated reading time, and convenient text transformation features, it's a valuable resource for writers, students, and professionals alike.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className={`accordion-button bg-${props.mode.backgroundColor} text-${props.mode.color}`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
            <b>Usecases of Text Analyser</b>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className={`accordion-body bg-${props.mode.backgroundColor} text-${props.mode.color}`}
            >
               A prominently placed text input field allows you to effortlessly enter your desired text. Once you've entered your content, Text Analyzer performs an instant analysis and displays the key metrics right before your eyes.<br/><br/>
              First and foremost, Text Analyzer reveals the number of words and characters present in your text, enabling you to precisely assess the length and complexity of your writing. This feature is particularly useful for ensuring compliance with character limits or tracking progress on writing assignments.<br/><br/>
              Additionally, Text Analyzer offers an estimated reading time feature, giving you a clear indication of how long it would take an average reader to read the provided text. This estimation is invaluable when preparing presentations, speeches, or any situation where time management is crucial.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
