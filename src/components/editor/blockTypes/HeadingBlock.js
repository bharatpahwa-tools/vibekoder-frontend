import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const HeadingBlock = ({ content, onChange }) => {
  const textareaRef = useRef(null);

  // Auto-resize height
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
      rows={1}
      className="w-full bg-transparent text-2xl font-extrabold mt-2 p-1 px-2  text-gray-900 dark:text-white placeholder-gray-300 dark:placeholder-gray-700 border-none focus:ring-0 focus:outline-none resize-none overflow-hidden leading-tight transition-colors duration-300"
      placeholder="Heading 1"
    />
  );
};

HeadingBlock.propTypes = {
  content: PropTypes.string,
  onChange: PropTypes.func,
};
export default HeadingBlock;
