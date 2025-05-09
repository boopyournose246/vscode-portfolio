import React from "react";
import Icon from "./Icon";

/**
 * Renders the line numbers for the code editor.
 * @param {object} props - Component props.
 * @param {number} props.count - The total number of lines to display.
 */
const LineNumbers = ({ count }) => {
  const numbers = Array.from({ length: count }, (_, i) => i + 1);
  return (
    <div className="line-numbers">
      {numbers.map((n) => (
        <div key={n}>{n}</div>
      ))}
    </div>
  );
};

/**
 * Renders the right pane displaying the HTML code snippet, including breadcrumbs.
 */
const HtmlCodeEditorPane = () => {
  // Line count matching the formatted HTML content below
  const codeLineCount = 85;

  // Formatted HTML content string with explicit newlines for the links section
  const htmlCodeContent = {
    __html: `<span class="html-comment">&lt;!-- Connect me through these ways --&gt;</span>
<span class="punctuation">&lt;</span><span class="tag">div</span> <span class="attribute-name">class</span><span class="punctuation">=</span><span class="attribute-value">"contact-info-links"</span><span class="punctuation">&gt;</span> <span class="html-comment">&lt;!-- Changed class name for clarity --&gt;</span>
    <span class="punctuation">&lt;</span><span class="tag">div</span><span class="punctuation">&gt;</span>
        <span class="punctuation">&lt;</span><span class="tag">span</span> <span class="attribute-name">class</span><span class="punctuation">=</span><span class="attribute-value">"codicon codicon-globe"</span><span class="punctuation">&gt;&lt;/</span><span class="tag">span</span><span class="punctuation">&gt;</span> 
        <span class="punctuation">&lt;</span><span class="tag">a</span> <span class="attribute-name">href</span><span class="punctuation">=</span><span class="attribute-value">"https://linkedin.com/in/ram-aadarsh"</span> <span class="attribute-name">target</span><span class="punctuation">=</span><span class="attribute-value">"_blank"</span> <span class="attribute-name">class</span><span class="punctuation">=</span><span class="attribute-value">"link"</span><span class="punctuation">&gt;</span><span class="element-text">linkedin.com/in/ram-aadarsh</span><span class="punctuation">&lt;/</span><span class="tag">a</span><span class="punctuation">&gt;</span>
    <span class="punctuation">&lt;/</span><span class="tag">div</span><span class="punctuation">&gt;</span>
    <span class="punctuation">&lt;</span><span class="tag">div</span><span class="punctuation">&gt;</span>
        <span class="punctuation">&lt;</span><span class="tag">span</span> <span class="attribute-name">class</span><span class="punctuation">=</span><span class="attribute-value">"codicon codicon-github"</span><span class="punctuation">&gt;&lt;/</span><span class="tag">span</span><span class="punctuation">&gt;</span> 
        <span class="punctuation">&lt;</span><span class="tag">a</span> <span class="attribute-name">href</span><span class="punctuation">=</span><span class="attribute-value">"https://github.com/boopyournose246"</span> <span class="attribute-name">target</span><span class="punctuation">=</span><span class="attribute-value">"_blank"</span> <span class="attribute-name">class</span><span class="punctuation">=</span><span class="attribute-value">"link"</span><span class="punctuation">&gt;</span><span class="element-text">github.com/boopyournose246</span><span class="punctuation">&lt;/</span><span class="tag">a</span><span class="punctuation">&gt;</span>
    <span class="punctuation">&lt;/</span><span class="tag">div</span><span class="punctuation">&gt;</span>
<span class="punctuation">&lt;/</span><span class="tag">div</span><span class="punctuation">&gt;</span>

<span class="punctuation">&lt;</span><span class="tag">section</span> <span class="attribute-name">class</span><span class="punctuation">=</span><span class="attribute-value">"projects-overview"</span><span class="punctuation">&gt;</span> <span class="html-comment">&lt;!-- Changed class name for clarity --&gt;</span>
    <span class="punctuation">&lt;</span><span class="tag">h2</span><span class="punctuation">&gt;</span><span class="element-text">PROJECT HIGHLIGHTS</span><span class="punctuation">&lt;/</span><span class="tag">h2</span><span class="punctuation">&gt;</span> <span class="html-comment">&lt;!-- More descriptive title --&gt;</span>

    <span class="punctuation">&lt;</span><span class="tag">div</span> <span class="attribute-name">class</span><span class="punctuation">=</span><span class="attribute-value">"project-item"</span><span class="punctuation">&gt;</span> <span class="html-comment">&lt;!-- Consistent class naming --&gt;</span>
        <span class="punctuation">&lt;</span><span class="tag">h3</span><span class="punctuation">&gt;</span><span class="element-text">AI Language Teacher</span><span class="punctuation">&lt;/</span><span class="tag">h3</span><span class="punctuation">&gt;</span>
        <span class="punctuation">&lt;</span><span class="tag">p</span> <span class="attribute-name">class</span><span class="punctuation">=</span><span class="attribute-value">"project-description"</span><span class="punctuation">&gt;</span>
            <span class="element-text">Developed a web-based AI Language Teacher application designed to provide interactive language learning experiences.
            The platform leverages AI models for features like pronunciation feedback, grammar correction, and personalized lesson generation.
            Users can practice speaking and writing in various languages with real-time intelligent assistance.</span>
        <span class="punctuation">&lt;/</span><span class="tag">p</span><span class="punctuation">&gt;</span>
        <span class="punctuation">&lt;</span><span class="tag">div</span> <span class="attribute-name">class</span><span class="punctuation">=</span><span class="attribute-value">"project-tech-stack"</span><span class="punctuation">&gt;</span>
            <span class="punctuation">&lt;</span><span class="tag">h4</span><span class="punctuation">&gt;</span><span class="element-text">Tech Stack:</span><span class="punctuation">&lt;/</span><span class="tag">h4</span><span class="punctuation">&gt;</span>
            <span class="punctuation">&lt;</span><span class="tag">ul</span><span class="punctuation">&gt;</span>
                <span class="punctuation">&lt;</span><span class="tag">li</span><span class="punctuation">&gt;</span><span class="element-text">React / Next.js (Frontend Framework)</span><span class="punctuation">&lt;/</span><span class="tag">li</span><span class="punctuation">&gt;</span>
                <span class="punctuation">&lt;</span><span class="tag">li</span><span class="punctuation">&gt;</span><span class="element-text">Node.js / Python (Backend for AI/ML processing)</span><span class="punctuation">&lt;/</span><span class="tag">li</span><span class="punctuation">&gt;</span>
                <span class="punctuation">&lt;</span><span class="tag">li</span><span class="punctuation">&gt;</span><span class="element-text">TensorFlow / spaCy (AI/ML Libraries)</span><span class="punctuation">&lt;/</span><span class="tag">li</span><span class="punctuation">&gt;</span>
                <span class="punctuation">&lt;</span><span class="tag">li</span><span class="punctuation">&gt;</span><span class="element-text">Speech Recognition API</span><span class="punctuation">&lt;/</span><span class="tag">li</span><span class="punctuation">&gt;</span>
                <span class="punctuation">&lt;</span><span class="tag">li</span><span class="punctuation">&gt;</span><span class="element-text">Cloud Platform (e.g., Vercel, AWS/GCP)</span><span class="punctuation">&lt;/</span><span class="tag">li</span><span class="punctuation">&gt;</span>
            <span class="punctuation">&lt;/</span><span class="tag">ul</span><span class="punctuation">&gt;</span>
        <span class="punctuation">&lt;/</span><span class="tag">div</span><span class="punctuation">&gt;</span>
        <span class="punctuation">&lt;</span><span class="tag">p</span> <span class="attribute-name">class</span><span class="punctuation">=</span><span class="attribute-value">"project-link"</span><span class="punctuation">&gt;</span>
            <span class="punctuation">&lt;</span><span class="tag">a</span> <span class="attribute-name">href</span><span class="punctuation">=</span><span class="attribute-value">"https://ai-lang-teacher.vercel.app/"</span> <span class="attribute-name">target</span><span class="punctuation">=</span><span class="attribute-value">"_blank"</span> <span class="attribute-name">class</span><span class="punctuation">=</span><span class="attribute-value">"link"</span><span class="punctuation">&gt;</span><span class="element-text">View Project</span><span class="punctuation">&lt;/</span><span class="tag">a</span><span class="punctuation">&gt;</span>
        <span class="punctuation">&lt;/</span><span class="tag">p</span><span class="punctuation">&gt;</span>
    <span class="punctuation">&lt;/</span><span class="tag">div</span><span class="punctuation">&gt;</span>

    <span class="punctuation">&lt;</span><span class="tag">div</span> <span class="attribute-name">class</span><span class="punctuation">=</span><span class="attribute-value">"project-item"</span><span class="punctuation">&gt;</span>
        <span class="punctuation">&lt;</span><span class="tag">h3</span><span class="punctuation">&gt;</span><span class="element-text">E-commerce Platform</span><span class="punctuation">&lt;/</span><span class="tag">h3</span><span class="punctuation">&gt;</span>
        <span class="punctuation">&lt;</span><span class="tag">p</span> <span class="attribute-name">class</span><span class="punctuation">=</span><span class="attribute-value">"project-description"</span><span class="punctuation">&gt;</span>
            <span class="element-text">Designed and built a comprehensive e-commerce platform featuring product browsing, shopping cart functionality, user authentication, and a secure checkout process.
            Includes an administrative dashboard for managing products, orders, and users.
            The platform is designed for scalability and a seamless user experience.</span>
        <span class="punctuation">&lt;/</span><span class="tag">p</span><span class="punctuation">&gt;</span>
        <span class="punctuation">&lt;</span><span class="tag">div</span> <span class="attribute-name">class</span><span class="punctuation">=</span><span class="attribute-value">"project-tech-stack"</span><span class="punctuation">&gt;</span>
            <span class="punctuation">&lt;</span><span class="tag">h4</span><span class="punctuation">&gt;</span><span class="element-text">Tech Stack:</span><span class="punctuation">&lt;/</span><span class="tag">h4</span><span class="punctuation">&gt;</span>
            <span class="punctuation">&lt;</span><span class="tag">ul</span><span class="punctuation">&gt;</span>
                <span class="punctuation">&lt;</span><span class="tag">li</span><span class="punctuation">&gt;</span><span class="element-text">React / Vue.js (Frontend Framework)</span><span class="punctuation">&lt;/</span><span class="tag">li</span><span class="punctuation">&gt;</span>
                <span class="punctuation">&lt;</span><span class="tag">li</span><span class="punctuation">&gt;</span><span class="element-text">Node.js / Express.js (Backend)</span><span class="punctuation">&lt;/</span><span class="tag">li</span><span class="punctuation">&gt;</span>
                <span class="punctuation">&lt;</span><span class="tag">li</span><span class="punctuation">&gt;</span><span class="element-text">MongoDB / PostgreSQL (Database)</span><span class="punctuation">&lt;/</span><span class="tag">li</span><span class="punctuation">&gt;</span>
                <span class="punctuation">&lt;</span><span class="tag">li</span><span class="punctuation">&gt;</span><span class="element-text">Stripe / PayPal (Payment Gateway)</span><span class="punctuation">&lt;/</span><span class="tag">li</span><span class="punctuation">&gt;</span>
                <span class="punctuation">&lt;</span><span class="tag">li</span><span class="punctuation">&gt;</span><span class="element-text">JWT (Authentication)</span><span class="punctuation">&lt;/</span><span class="tag">li</span><span class="punctuation">&gt;</span>
                <span class="punctuation">&lt;</span><span class="tag">li</span><span class="punctuation">&gt;</span><span class="element-text">Cloud Hosting (e.g., AWS, DigitalOcean)</span><span class="punctuation">&lt;/</span><span class="tag">li</span><span class="punctuation">&gt;</span>
            <span class="punctuation">&lt;/</span><span class="tag">ul</span><span class="punctuation">&gt;</span>
        <span class="punctuation">&lt;/</span><span class="tag">div</span><span class="punctuation">&gt;</span>
        {/* Removed project link for this item as it wasn't in the original snippet */}
    <span class="punctuation">&lt;/</span><span class="tag">div</span><span class="punctuation">&gt;</span>

    <span class="punctuation">&lt;</span><span class="tag">div</span> <span class="attribute-name">class</span><span class="punctuation">=</span><span class="attribute-value">"project-item"</span><span class="punctuation">&gt;</span>
        <span class="punctuation">&lt;</span><span class="tag">h3</span><span class="punctuation">&gt;</span><span class="element-text">Collaborative Web Environment</span><span class="punctuation">&lt;/</span><span class="tag">h3</span><span class="punctuation">&gt;</span>
        <span class="punctuation">&lt;</span><span class="tag">p</span> <span class="attribute-name">class</span><span class="punctuation">=</span><span class="attribute-value">"project-description"</span><span class="punctuation">&gt;</span>
            <span class="element-text">Developed a dynamic web application enabling real-time collaborative interaction between users and an AI model.
            Features include a chat interface for conversational exchanges and an integrated editor supporting various document and code formats.
            The platform facilitates iterative content creation and editing in a shared space.</span>
        <span class="punctuation">&lt;/</span><span class="tag">p</span><span class="punctuation">&gt;</span>
        <span class="punctuation">&lt;</span><span class="tag">div</span> <span class="attribute-name">class</span><span class="punctuation">=</span><span class="attribute-value">"project-tech-stack"</span><span class="punctuation">&gt;</span>
            <span class="punctuation">&lt;</span><span class="tag">h4</span><span class="punctuation">&gt;</span><span class="element-text">Tech Stack:</span><span class="punctuation">&lt;/</span><span class="tag">h4</span><span class="punctuation">&gt;</span>
            <span class="punctuation">&lt;</span><span class="tag">ul</span><span class="punctuation">&gt;</span>
                <span class="punctuation">&lt;</span><span class="tag">li</span><span class="punctuation">&gt;</span><span class="element-text">React (Frontend UI Library)</span><span class="punctuation">&lt;/</span><span class="tag">li</span><span class="punctuation">&gt;</span>
                <span class="punctuation">&lt;</span><span class="tag">li</span><span class="punctuation">&gt;</span><span class="element-text">WebSockets (Real-time Communication)</span><span class="punctuation">&lt;/</span><span class="tag">li</span><span class="punctuation">&gt;</span>
                <span class="punctuation">&lt;</span><span class="tag">li</span><span class="punctuation">&gt;</span><span class="element-text">Node.js / Python (Backend Logic)</span><span class="punctuation">&gt;&lt;/</span><span class="tag">li</span><span class="punctuation">&gt;</span>
                <span class="punctuation">&lt;</span><span class="tag">li</span><span class="punctuation">&gt;</span><span class="element-text">CodeMirror / Monaco Editor (Editor Component)</span><span class="punctuation">&lt;/</span><span class="tag">li</span><span class="punctuation">&gt;</span>
                <span class="punctuation">&lt;</span><span class="tag">li</span><span class="punctuation">&gt;</span><span class="element-text">Markdown Parsers & Syntax Highlighters</span><span class="punctuation">&lt;/</span><span class="tag">li</span><span class="punctuation">&gt;</span>
                <span class="punctuation">&lt;</span><span class="tag">li</span><span class="punctuation">&gt;</span><span class="element-text">Cloud Infrastructure (Scalable Hosting)</span><span class="punctuation">&lt;/</span><span class="tag">li</span><span class="punctuation">&gt;</span>
            <span class="punctuation">&lt;/</span><span class="tag">ul</span><span class="punctuation">&gt;</span>
        <span class="punctuation">&lt;/</span><span class="tag">div</span><span class="punctuation">&gt;</span>
        {/* Removed project link for this item as it wasn't in the original snippet */}
    <span class="punctuation">&lt;/</span><span class="tag">div</span><span class="punctuation">&gt;</span>
<span class="punctuation">&lt;/</span><span class="tag">section</span><span class="punctuation">&gt;</span>
        `,
  }; // Note the use of backticks and actual newlines

  return (
    <div className="editor-pane html-code-editor">
      {/* Breadcrumbs added here */}
      <div className="editor-breadcrumbs">
        <span className="breadcrumb-item">my-portfolio</span>
        <Icon name="chevron-right" />
        <span className="breadcrumb-item">src</span>
        <Icon name="chevron-right" />
        <span className="breadcrumb-item">components</span>
        <Icon name="chevron-right" />
        {/* Updated breadcrumb text */}
        <span className="breadcrumb-item active">index.html</span>
      </div>
      {/* Code Area */}
      <div className="code-area-wrapper">
        <LineNumbers count={codeLineCount} />
        <pre
          className="html-code-block"
          dangerouslySetInnerHTML={htmlCodeContent}
        />
      </div>
    </div>
  );
};

export default HtmlCodeEditorPane;
