import React from "react";
import Icon from "./Icon"; // Assuming Icon.jsx is in the same directory

/**
 * Renders the top bar containing the search input and controls.
 */
const TopBar = () => {
  return (
    <div className="top-bar-area">
      {/* Placeholder for window controls (like macOS) */}
      <div className="top-bar-left-placeholder"></div>

      {/* Centered search bar */}
      <div className="search-bar-container-wrapper">
        <div className="search-bar">
          <Icon name="search" />
          <input type="text" placeholder="Welcome to Ram's Portfolio" />
        </div>
      </div>

      {/* Right-side controls placeholder */}
      <div className="top-bar-right-controls">
        <div className="top-bar-icons">
          <Icon
            name="split-horizontal"
            title="Split Editor"
            className="codicon-split-horizontal"
          />
          <Icon name="ellipsis" title="More Actions" />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
