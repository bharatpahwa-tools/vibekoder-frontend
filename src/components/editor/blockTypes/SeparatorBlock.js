import React from "react";
import PropTypes from "prop-types";
import { Minus, MoreHorizontal, GripHorizontal, Square } from "lucide-react";

// Style definitions
const SEPARATOR_STYLES = {
  solid: {
    label: "Solid",
    icon: <Minus size={16} />,
    class: "border-t border-gray-300 dark:border-gray-700 my-8",
  },
  dashed: {
    label: "Dashed",
    icon: <GripHorizontal size={16} />,
    class: "border-t-2 border-dashed border-gray-300 dark:border-gray-700 my-8",
  },
  dotted: {
    label: "Dotted",
    icon: <MoreHorizontal size={16} />,
    class: "border-t-4 border-dotted border-gray-300 dark:border-gray-700 my-8",
  },
  dots: {
    label: "3 Dots",
    icon: <span className="text-xs font-bold">•••</span>,
    class:
      "text-center text-2xl tracking-widest text-gray-300 dark:text-gray-600 font-serif my-8 border-none",
  },
  whitespace: {
    label: "Spacer",
    icon: <Square size={14} />,
    class: "w-full border-none my-0",
  },
};

const SeparatorBlock = ({ content, onChange }) => {
  const currentStyle = SEPARATOR_STYLES[content] ? content : "solid";

  return (
    <div className="group relative">
      {/* The Visual Separator */}
      <div className="px-4">
        {currentStyle === "dots" ? (
          <div className={SEPARATOR_STYLES.dots.class}>• • •</div>
        ) : (
          <hr className={SEPARATOR_STYLES[currentStyle].class} />
        )}
        {currentStyle === "whitespace" && (
          <div className="h-24 w-full flex items-center justify-center bg-gray-50/50 dark:bg-[#1a1a1a]/50 border border-dashed border-gray-200 dark:border-gray-800 rounded-lg text-xs text-gray-400">
            Large Whitespace Gap
          </div>
        )}
      </div>

      {/* Style Switcher (Floating Toolbar) */}
      <div className="absolute -top-14 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-white dark:bg-[#1e1e1e] p-1 rounded-full border border-gray-200 dark:border-gray-700 shadow-lg flex items-center gap-1 z-10">
        {Object.keys(SEPARATOR_STYLES).map((style) => (
          <button
            key={style}
            onClick={() => onChange(style)}
            className={`p-1.5 rounded-full transition-colors ${
              currentStyle === style
                ? "bg-black dark:bg-white text-white dark:text-black"
                : "text-gray-500 hover:bg-gray-100 dark:hover:bg-[#2a2a2a]"
            }`}
            title={SEPARATOR_STYLES[style].label}
          >
            {SEPARATOR_STYLES[style].icon}
          </button>
        ))}
      </div>
    </div>
  );
};

SeparatorBlock.propTypes = {
  content: PropTypes.string,
  onChange: PropTypes.func,
};
export default SeparatorBlock;
