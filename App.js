const root = ReactDOM.createRoot(document.getElementById("root"));

const nestedElement = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", null, "This is a heading1"),
    React.createElement("h2", null, "This is a heading2"),
  ])
);

console.log(nestedElement); // will be an object

root.render(nestedElement);
