import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Quote } from "lucide-react";

const BG_COLORS = {
  default: "bg-transparent border-l-4 border-gray-900 dark:border-gray-100",
  blue: "bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500 rounded-r-xl",
  green:
    "bg-green-50 dark:bg-green-900/10 border-l-4 border-green-500 rounded-r-xl",
  purple:
    "bg-purple-50 dark:bg-purple-900/10 border-l-4 border-purple-500 rounded-r-xl",
};

const QuoteBlock = ({ content, onChange }) => {
  // Handle string content (legacy) vs object content (new)
  const initialData =
    typeof content === "object" && content !== null
      ? content
      : { text: content || "", color: "default" };

  const [data, setData] = useState(initialData);
  const textareaRef = useRef(null);

  useEffect(() => {
    setData(
      typeof content === "object" && content !== null
        ? content
        : { text: content || "", color: "default" }
    );
  }, [content]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [data.text]);

  const updateField = (field, value) => {
    const newData = { ...data, [field]: value };
    setData(newData);
    onChange(newData);
  };

  const currentStyle = BG_COLORS[data.color] || BG_COLORS.default;
  const isDefault = data.color === "default";

  return (
    <div
      className={`relative group flex gap-4 p-6 transition-all duration-300 ${currentStyle}`}
    >
      {/* Style Switcher */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1 bg-white dark:bg-[#1e1e1e] p-1 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
        <button
          onClick={() => updateField("color", "default")}
          className="w-5 h-5 rounded border border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center text-[10px]"
        >
          A
        </button>
        <button
          onClick={() => updateField("color", "blue")}
          className="w-5 h-5 rounded border border-blue-200 bg-blue-100 hover:bg-blue-200"
        ></button>
        <button
          onClick={() => updateField("color", "green")}
          className="w-5 h-5 rounded border border-green-200 bg-green-100 hover:bg-green-200"
        ></button>
        <button
          onClick={() => updateField("color", "purple")}
          className="w-5 h-5 rounded border border-purple-200 bg-purple-100 hover:bg-purple-200"
        ></button>
      </div>

      <Quote
        className={`shrink-0 mt-1 ${
          isDefault
            ? "text-gray-400 dark:text-gray-500"
            : "text-gray-900 dark:text-white opacity-80"
        }`}
        size={24}
      />

      <textarea
        ref={textareaRef}
        value={data.text}
        onChange={(e) => updateField("text", e.target.value)}
        className={`w-full bg-transparent text-md italic font-serif ${
          isDefault
            ? "text-gray-800 dark:text-gray-200"
            : "text-gray-900 dark:text-gray-100"
        } border-none focus:ring-0 focus:outline-none resize-none overflow-hidden placeholder-gray-400 leading-relaxed`}
        placeholder="Enter a quote..."
        rows={1}
      />
    </div>
  );
};

QuoteBlock.propTypes = { content: PropTypes.any, onChange: PropTypes.func };
export default QuoteBlock;
