// Import react and react DOM libraries
import React from "react";
import ReactDOM from "react-dom";

//Create a react component

const App = () => {
  const buttontext = { text: "Cick here" };
  const labeltext = "Enter Name;";

  return (
    <div>
      <label className="label" for="name">
        {labeltext}
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
        {buttontext.text}
      </button>
    </div>
  );
};

//Take react component and show it on screen

ReactDOM.render(<App />, document.querySelector("#root"));
