import React from "react"
import cookies from "./cookies.jpg"

function App() {
  return (
    <React.Fragment>
      <p>{sayGoodbye()}</p>
      {displayHeader()}
      <ImageFrame/>
      <DisplayMessage whatever_message="Hello there"/>
    </React.Fragment>
  );
}

function DisplayMessage (props) {
  return (
    <div>{props.whatever_message}</div>
  )
}

function ImageFrame() {
  return (
    <div style={{
      borderColor: "red",
      borderStyle: "solid",
      borderWidth: "4px"
    }}>
      <img src={cookies} alt="Cute puppy"/>
    </div>
    
  )
}

function displayHeader() {
  return (
    <h2>About Me</h2>
  )
}

function sayGoodbye() {
  return "Goodbye"
}

export default App;
