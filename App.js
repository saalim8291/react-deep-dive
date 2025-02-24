import React from "react";
import ReactDOM from "react-dom"; // Use "react-dom/client" for React 18

const nestedElement = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", null, "This is a heading1"),
    React.createElement("h2", null, "This is a heading2"),
  ])
);

const root = ReactDOM.createRoot(document.getElementById("root")); // Correct method

console.log(nestedElement); // will be an object

root.render(nestedElement); // Correctly render the element
