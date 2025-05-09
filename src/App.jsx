import React from "react";
import TopBar from "./components/TopBar";
import ActivityBar from "./components/ActivityBar";
import MainPanel from "./components/MainPanel";
import StatusBar from "./components/StatusBar";
// Make sure index.css is imported (usually done in main.jsx)
// import './index.css';

/**
 * The main application component that structures the UI layout.
 */
function App() {
  return (
    // Use the app-container class for correct flex layout and height
    <div className="app-container">
      <TopBar />
      <div className="main-layout-area">
        <ActivityBar />
        <MainPanel />
      </div>
      <StatusBar />
    </div>
  );
}

export default App;
