import React from "react";
import EditorTab from "./EditorTab";

/**
 * Renders the tab bar containing editor tabs.
 * @param {object} props - Component props.
 * @param {object} props.leftTab - Data for the left tab { id, title, icon }.
 * @param {object} props.rightTab - Data for the right tab { id, title, icon }.
 * @param {string} props.activeTabId - The ID of the tab that should be visually active.
 */
const TabBar = ({ leftTab, rightTab, activeTabId }) => {
  // No state management needed here anymore for active tab

  return (
    <div className="tab-bar-bg">
      {/* Left Tab Group */}
      <div className="tab-group left-tab-group">
        {leftTab && (
          <EditorTab
            iconName={leftTab.icon}
            title={leftTab.title}
            isActive={activeTabId === leftTab.id} // Determined by fixed activeTabId
            // No onClick needed to change state
            onClose={() =>
              console.log("Attempt to close left tab:", leftTab.id)
            } // Placeholder close action
          />
        )}
      </div>
      {/* Right Tab Group */}
      <div className="tab-group right-tab-group">
        {rightTab && (
          <EditorTab
            iconName={rightTab.icon}
            title={rightTab.title}
            isActive={activeTabId === rightTab.id} // Determined by fixed activeTabId
            // No onClick needed to change state
            onClose={() =>
              console.log("Attempt to close right tab:", rightTab.id)
            } // Placeholder close action
          />
        )}
      </div>
    </div>
  );
};

export default TabBar;
