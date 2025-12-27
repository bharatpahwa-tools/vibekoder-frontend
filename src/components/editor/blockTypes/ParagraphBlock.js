import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const ParagraphBlock = ({ content, onChange }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [content]);

  return (
    <textarea
      ref={textareaRef}
      value={content}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-transparent px-2  mt-2 text-md text-gray-600 dark:text-gray-300 placeholder-gray-300 dark:placeholder-gray-600 border-none focus:ring-0 focus:outline-none resize-none overflow-hidden leading-relaxed transition-colors duration-300 min-h-[1.5em]"
      placeholder="Start writing..."
      rows={1}
    />
  );
};

ParagraphBlock.propTypes = {
  content: PropTypes.string,
  onChange: PropTypes.func,
};
export default ParagraphBlock;
