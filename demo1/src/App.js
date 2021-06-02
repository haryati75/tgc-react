import React from "react"
import rabbit from "./cookies.jpg"
import "./App.css"

function App() {
  let name = "Yati";
  return (
    <React.Fragment>
      <p>Hello World {name}</p>
      <p>Another Hello world</p>
      <AlertBox></AlertBox>
      <AlertBox></AlertBox>
      <img src={require("./baby.jpg").default}/>
      <img src={rabbit}/>
      <p>{myAlert(name)}</p>
    </React.Fragment>
  );
}

function AlertBox(props) {
  return (
    <React.Fragment>
      <div>
        Danger! Danger! 
      </div>
    </React.Fragment>
  )
}

function myAlert(n) {
  return "Howdy " + n
}

export default App;
