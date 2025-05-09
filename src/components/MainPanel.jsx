import React from "react"; // Removed useState as it's no longer needed for active tab
import TabBar from "./TabBar";
import EditorArea from "./EditorArea";

/**
 * Renders the main panel containing the TabBar and EditorArea.
 * Manages the visually active tab state (fixed in this version).
 */
const MainPanel = () => {
  // Define tab data
  const leftTabData = {
    id: "readme",
    title: "Preview readme.md",
    icon: "markdown",
  };
  const rightTabData = {
    id: "contactHtml",
    title: "index.html",
    icon: "file-code",
  };

  // The right tab ('index.html') is always visually active
  const fixedActiveTabId = rightTabData.id;

  return (
    <div className="main-panel">
      <TabBar
        leftTab={leftTabData}
        rightTab={rightTabData}
        activeTabId={fixedActiveTabId} // Pass the fixed active ID
        // No setActiveTabId needed as active state is fixed
      />
      <EditorArea /> {/* EditorArea always shows both panes */}
    </div>
  );
};

export default MainPanel;
