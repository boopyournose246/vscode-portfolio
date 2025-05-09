import React from "react";
import Icon from "./Icon";

/**
 * Renders a single editor tab.
 * @param {object} props - Component props.
 * @param {string} props.iconName - Codicon name for the tab icon.
 * @param {string} props.title - Text title of the tab.
 * @param {boolean} props.isActive - Whether the tab is visually active.
 * @param {function} [props.onClick] - Click handler for the tab (optional, not used for state change now).
 * @param {function} [props.onClose] - Click handler for the close button.
 */
const EditorTab = ({ iconName, title, isActive, onClick, onClose }) => {
  // Handler for the close icon click
  const handleClose = (e) => {
    e.stopPropagation(); // Prevent the tab itself from being clicked
    if (onClose) onClose();
    console.log("Close tab:", title); // Placeholder action
  };

  // Determine the CSS class based on the active state
  const tabClassName = `editor-tab ${isActive ? "active" : ""}`;

  return (
    // Removed the main onClick handler to prevent active state switching
    <div className={tabClassName}>
      <Icon name={iconName} />
      <span>{title}</span>
      <Icon name="close" className="codicon-close" onClick={handleClose} />
    </div>
  );
};

export default EditorTab;
