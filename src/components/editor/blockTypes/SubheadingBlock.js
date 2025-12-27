import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const SubheadingBlock = ({ content, onChange }) => {
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
      rows={1}
      className="w-full bg-transparent text-xl mt-2  px-2 font-semibold text-gray-800 dark:text-gray-100 placeholder-gray-300 dark:placeholder-gray-700 border-none focus:ring-0 focus:outline-none resize-none overflow-hidden leading-snug transition-colors duration-300"
      placeholder="Subheading..."
    />
  );
};

SubheadingBlock.propTypes = {
  content: PropTypes.string,
  onChange: PropTypes.func,
};
export default SubheadingBlock;
