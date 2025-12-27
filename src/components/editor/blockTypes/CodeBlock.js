import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const CodeBlock = ({ content, onChange }) => {
  const textareaRef = useRef(null);

  // Auto-resize height based on content
  useEffect(() => {
    if (textareaRef.current) {
      // Reset height to auto to get the correct scrollHeight for shrinking
      textareaRef.current.style.height = "auto";
      // Set height to scrollHeight
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [content]);

  return (
    <div className="rounded-xl overflow-hidden bg-[#1e1e1e] border border-gray-200 dark:border-gray-800 shadow-lg ring-1 ring-black/5">
      {/* Terminal Header */}
      <div className="flex items-center px-4 py-2 bg-[#252526] border-b border-[#333]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="ml-4 text-[10px] text-gray-400 font-mono">
          JavaScript
        </div>
      </div>

      {/* Editor Area */}
      <div className="p-4">
        <textarea
          ref={textareaRef}
          value={content}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent text-sm font-mono text-gray-300 border-none focus:ring-0 focus:outline-none resize-none min-h-[50px] leading-relaxed custom-scrollbar placeholder-gray-600"
          placeholder="// Write your code here..."
          spellCheck={false}
          rows={1}
        />
      </div>
    </div>
  );
};

CodeBlock.propTypes = { content: PropTypes.string, onChange: PropTypes.func };
export default CodeBlock;
