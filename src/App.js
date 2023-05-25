import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import React, { useState } from "react";
// import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState({
    color: "dark",
    backgroundColor: "light",
    action: "Enable",
    mainBg: "#f5f5f5",
  });
  // const [alert, setalert] = useState(null);
  // const showAlert = (message, type, backg, clr) => {
  //   setalert({
  //     msg: message,
  //     type: type,
  //     bg: backg,
  //     color: clr,
  //   });
  //   setTimeout(() => {
  //     setalert(null);
  //   }, 1500);
  // };
  const toggleMode = () => {
    if (mode.color === "dark") {
      setMode({
        color: "light",
        backgroundColor: "dark",
        action: "Disable",
        mainBg: "#5e4f4f",
      });
      document.body.style.backgroundColor = "#5e4f4f";
      // showAlert("Dark Mode Has Been Enabled", "Success", "dark", "light");
    } 
    else {
      setMode({
        color: "dark",
        backgroundColor: "light",
        action: "Enable",
        mainBg: "#f5f5f5",
      });
      document.body.style.backgroundColor = "#f5f5f5";
      // showAlert("Light Mode Has Been Enabled", "Success", "#f5f5f5", "dark");
    }
  };
  return (
    <>
      {/* In practice projects we will be importing html and css from bootstrap */}
      {/* Importing the navbar from our navbar component and passing a prop(property) title with syntax same as an html attribute*/}
      <Router>
        <Navbar
          title="Text Analyser"
          about="About Us"
          mode={mode}
          toggleMode={toggleMode}
        ></Navbar>
        {/* <Alert alert={alert} /> */}
        <Routes>
          <Route
            exact path="/"
            element={
              <div className="container">
                <TextForm
                  heading="Enter the text to Analyse"
                  mode={mode}
                ></TextForm>
              </div>
            }
          />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
