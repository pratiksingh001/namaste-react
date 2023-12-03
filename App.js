import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => Object => HTMLElement(render)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "This is a React Element"
);

// How to create h1 tag using JSX
const jsxHeading = <h1 id="heading ">React using JSX</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
