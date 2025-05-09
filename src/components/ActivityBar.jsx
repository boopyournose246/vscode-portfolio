import React, { useState } from "react";
import Icon from "./Icon";

// Data for the icons in the activity bar
const activityIconsList = [
  { name: "menu", title: "Menu" },
  { name: "files", title: "Explorer" },
  { name: "search", title: "Search" },
  { name: "source-control", title: "Source Control" },
  { name: "debug-alt", title: "Run and Debug" },
  { name: "extensions", title: "Extensions" },
];
const bottomIconsList = [
  { name: "account", title: "Account" },
  { name: "settings-gear", title: "Manage" },
];

/**
 * Renders the vertical activity bar on the left.
 */
const ActivityBar = () => {
  // State to track which icon is visually active
  const [activeIconName, setActiveIconName] = useState("files"); // 'files' is active by default

  return (
    <div className="activity-bar-bg">
      {/* Render main activity icons */}
      {activityIconsList.map((icon) => (
        <Icon
          key={icon.name}
          name={icon.name}
          title={icon.title}
          // Apply 'active-icon' class if this icon's name matches the active state
          className={icon.name === activeIconName ? "active-icon" : ""}
          onClick={() => setActiveIconName(icon.name)} // Update active icon on click
        />
      ))}

      {/* Render bottom icons (Account, Settings) */}
      <div className="bottom-icons">
        {bottomIconsList.map((icon) => (
          <Icon key={icon.name} name={icon.name} title={icon.title} />
        ))}
      </div>
    </div>
  );
};

export default ActivityBar;
