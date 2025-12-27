import React from "react";
import PropTypes from "prop-types";

const ListBlock = ({ content, onChange }) => {
  const items = Array.isArray(content) ? content : [content];

  const updateItem = (index, val) => {
    const newItems = [...items];
    newItems[index] = val;
    onChange(newItems);
  };

  const addItem = () => onChange([...items, ""]);
  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    onChange(newItems);
  };

  return (
    <ul className="space-y-1 py-2 px-2 ">
      {items.map((item, index) => (
        <li key={index} className="flex items-start group">
          <span className="mr-3 mt-2.5 w-1.5 h-1.5 bg-gray-400 dark:bg-gray-500 rounded-full shrink-0  transition-colors" />
          <input
            type="text"
            value={item}
            onChange={(e) => updateItem(index, e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                addItem();
              }
              if (e.key === "Backspace" && item === "" && items.length > 1) {
                e.preventDefault();
                removeItem(index);
              }
            }}
            className="w-full bg-transparent text-md text-gray-700 dark:text-gray-300 border-none focus:ring-0 focus:outline-none placeholder-gray-300 dark:placeholder-gray-700 leading-relaxed transition-colors"
            placeholder="List item..."
          />
        </li>
      ))}
    </ul>
  );
};

ListBlock.propTypes = { content: PropTypes.any, onChange: PropTypes.func };
export default ListBlock;
