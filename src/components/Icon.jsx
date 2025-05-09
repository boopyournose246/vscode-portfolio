import React from "react";

/**
 * Renders a Codicon icon.
 * @param {object} props - Component props.
 * @param {string} props.name - The name of the Codicon (e.g., 'files', 'search').
 * @param {string} [props.title] - Optional tooltip text for the icon.
 * @param {string} [props.className] - Optional additional CSS classes.
 * @param {function} [props.onClick] - Optional click handler.
 */
const Icon = ({ name, title, className = "", onClick }) => (
  <span
    className={`codicon codicon-${name} ${className}`}
    title={title}
    onClick={onClick}
  ></span>
);

export default Icon;
