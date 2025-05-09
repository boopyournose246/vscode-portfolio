import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"; // Import the main CSS file

// Find the root element in your HTML
const rootElement = document.getElementById("root");

// Create a React root
const root = ReactDOM.createRoot(rootElement);

// Render the App component within StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
