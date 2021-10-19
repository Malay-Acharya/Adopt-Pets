import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "A", animal: "B", breed: "C" }),
    React.createElement(Pet, { name: "A", animal: "B", breed: "C" }),
    React.createElement(Pet, { name: "A", animal: "BC", breed: "CD" }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
