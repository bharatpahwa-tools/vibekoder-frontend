import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Trash2, Columns, Rows } from "lucide-react";

const MAX_COLS = 4;
const MAX_ROWS = 20;

const TableBlock = ({ content, onChange }) => {
  // Initialize default structure if content is empty or invalid
  const initialData =
    typeof content === "object" && content?.headers
      ? content
      : {
          headers: ["Header 1", "Header 2"],
          rows: [
            ["Cell 1", "Cell 2"],
            ["Cell 3", "Cell 4"],
          ],
        };

  const [tableData, setTableData] = useState(initialData);

  useEffect(() => {
    // Sync local state if parent prop changes externally (e.g. from history/undo)
    if (typeof content === "object" && content?.headers) {
      setTableData(content);
    }
  }, [content]);

  const updateParent = (newData) => {
    setTableData(newData);
    onChange(newData);
  };

  // --- ACTIONS ---

  const updateHeader = (colIndex, value) => {
    const newHeaders = [...tableData.headers];
    newHeaders[colIndex] = value;
    updateParent({ ...tableData, headers: newHeaders });
  };

  const updateCell = (rowIndex, colIndex, value) => {
    const newRows = [...tableData.rows];
    newRows[rowIndex] = [...newRows[rowIndex]]; // Copy the row
    newRows[rowIndex][colIndex] = value;
    updateParent({ ...tableData, rows: newRows });
  };

  const addColumn = () => {
    if (tableData.headers.length >= MAX_COLS) return;
    const newHeaders = [
      ...tableData.headers,
      `Header ${tableData.headers.length + 1}`,
    ];
    const newRows = tableData.rows.map((row) => [...row, ""]);
    updateParent({ headers: newHeaders, rows: newRows });
  };

  const removeColumn = (colIndex) => {
    if (tableData.headers.length <= 1) return; // Prevent deleting last column
    const newHeaders = tableData.headers.filter((_, i) => i !== colIndex);
    const newRows = tableData.rows.map((row) =>
      row.filter((_, i) => i !== colIndex)
    );
    updateParent({ headers: newHeaders, rows: newRows });
  };

  const addRow = () => {
    if (tableData.rows.length >= MAX_ROWS) return;
    const newRow = new Array(tableData.headers.length).fill("");
    updateParent({ ...tableData, rows: [...tableData.rows, newRow] });
  };

  const removeRow = (rowIndex) => {
    if (tableData.rows.length <= 1) return; // Prevent deleting last row
    const newRows = tableData.rows.filter((_, i) => i !== rowIndex);
    updateParent({ ...tableData, rows: newRows });
  };

  return (
    <div className="overflow-x-auto p-1 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121212] shadow-sm">
      <div className="p-2 border-b border-gray-100 dark:border-gray-800 flex gap-2 mb-2">
        <button
          onClick={addColumn}
          disabled={tableData.headers.length >= MAX_COLS}
          className={`flex items-center gap-1 text-xs px-2 py-1 rounded transition ${
            tableData.headers.length >= MAX_COLS
              ? "bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed"
              : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
          }`}
        >
          <Columns size={12} /> + Col{" "}
          {tableData.headers.length >= MAX_COLS && "(Max)"}
        </button>
        <button
          onClick={addRow}
          disabled={tableData.rows.length >= MAX_ROWS}
          className={`flex items-center gap-1 text-xs px-2 py-1 rounded transition ${
            tableData.rows.length >= MAX_ROWS
              ? "bg-gray-100 dark:bg-gray-800 text-gray-400 cursor-not-allowed"
              : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-300"
          }`}
        >
          <Rows size={12} /> + Row{" "}
          {tableData.rows.length >= MAX_ROWS && "(Max)"}
        </button>
      </div>

      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            {tableData.headers.map((header, i) => (
              <th
                key={i}
                className="p-2 border-b-2 border-gray-100 dark:border-gray-700 relative group min-w-[120px]"
              >
                <input
                  type="text"
                  value={header}
                  onChange={(e) => updateHeader(i, e.target.value)}
                  className="w-full bg-transparent font-bold text-gray-800 dark:text-white outline-none placeholder-gray-400 text-sm"
                  placeholder="Header"
                />
                <button
                  onClick={() => removeColumn(i)}
                  className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 transition-opacity"
                  title="Remove Column"
                >
                  <Trash2 size={12} />
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="group/row">
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  className="p-2 border-b border-gray-50 dark:border-gray-800 relative"
                >
                  <input
                    type="text"
                    value={cell}
                    onChange={(e) =>
                      updateCell(rowIndex, colIndex, e.target.value)
                    }
                    className="w-full bg-transparent text-gray-600 dark:text-gray-300 outline-none text-sm"
                    placeholder="..."
                  />
                  {colIndex === tableData.headers.length - 1 && (
                    <button
                      onClick={() => removeRow(rowIndex)}
                      className="absolute right-[-10px] top-1/2 -translate-y-1/2 opacity-0 group-hover/row:opacity-100 text-gray-300 hover:text-red-500 transition-opacity p-2"
                      title="Remove Row"
                    >
                      <Trash2 size={12} />
                    </button>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TableBlock.propTypes = { content: PropTypes.any, onChange: PropTypes.func };
export default TableBlock;
