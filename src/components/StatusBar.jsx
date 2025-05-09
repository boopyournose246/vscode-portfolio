import React from "react";
import Icon from "./Icon";

/**
 * Reusable component for an item in the status bar.
 * @param {object} props - Component props.
 * @param {React.ReactNode} props.children - Content of the status item.
 * @param {string} [props.iconName] - Optional Codicon name for an icon.
 * @param {string} [props.className] - Optional additional CSS classes.
 * @param {string} [props.title] - Optional tooltip text.
 */
const StatusBarItem = ({ children, iconName, className = "", title }) => (
  <div className={`status-item ${className}`} title={title}>
    {iconName && <Icon name={iconName} />}
    {children}
  </div>
);

/**
 * Renders the status bar at the bottom of the UI.
 */
const StatusBar = () => {
  return (
    <div className="status-bar-bg">
      {/* Left side items */}
      <div className="status-left">
        <StatusBarItem iconName="source-control">main</StatusBarItem>
        <StatusBarItem iconName="sync" />
        <StatusBarItem>
          <Icon name="error" /> 0 <Icon name="warning" /> 0
        </StatusBarItem>
      </div>
      {/* Right side items */}
      <div className="status-right">
        <StatusBarItem>Ln 1, Col 1</StatusBarItem>
        <StatusBarItem>Spaces: 2</StatusBarItem>
        <StatusBarItem>UTF-8</StatusBarItem>
        <StatusBarItem>CRLF</StatusBarItem>
        <StatusBarItem iconName="code">HTML</StatusBarItem>
        <StatusBarItem iconName="feedback" title="Feedback" />
        <StatusBarItem
          iconName="bell"
          title="Notifications"
          className="bell-icon"
        />
      </div>
    </div>
  );
};

export default StatusBar;
