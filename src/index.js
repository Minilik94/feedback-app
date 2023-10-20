import React from "react";
import ReactDOM from "react-dom";
import './index.css'
import App from "./App";


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);


// This is the current and supported way of doing it
// import React from "react";
// import { createRoot } from "react-dom/client";
// import "./index.css";
// import App from "./App";

// const rootElement = document.getElementById("root");

// createRoot(rootElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
