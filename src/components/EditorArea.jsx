import React from "react";
import MarkdownPreviewPane from "./MarkdownPreviewPane";
import HtmlCodeEditorPane from "./HtmlCodeEditorPane";

/**
 * Renders the main editor area containing the two panes.
 */
const EditorArea = () => {
  // Both panes are always rendered side-by-side
  return (
    <div className="editor-area-container">
      <MarkdownPreviewPane />
      <HtmlCodeEditorPane />
    </div>
  );
};

export default EditorArea;
