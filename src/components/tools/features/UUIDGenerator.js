import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Copy, RefreshCw, Check, Trash2 } from "lucide-react";
import ToolLayout from "../ToolLayout";
import { toolsRegistry } from "../registry";

const UUIDGenerator = () => {
  const toolInfo = toolsRegistry.find((t) => t.id === "uuid-generator");
  const [uuids, setUuids] = useState([]);
  const [count, setCount] = useState(5);
  const [copied, setCopied] = useState(false);

  const generate = () => {
    const newUuids = Array.from({ length: count }, () => uuidv4());
    setUuids(newUuids);
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(uuids.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Generate initial on load
  React.useEffect(() => {
    if (uuids.length === 0) generate();
  }, []);

  return (
    <ToolLayout {...toolInfo}>
      <div className="space-y-8">
        {/* Controls */}
        <div className="flex flex-wrap items-end gap-4 p-4 bg-gray-50 dark:bg-[#1a1a1a] rounded-2xl">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Quantity
            </label>
            <input
              type="number"
              min="1"
              max="100"
              value={count}
              onChange={(e) => setCount(parseInt(e.target.value) || 1)}
              className="w-full bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-blue-500 transition-colors text-gray-900 dark:text-white"
            />
          </div>
          <button
            onClick={generate}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl flex items-center gap-2 transition-all active:scale-95 shadow-lg shadow-blue-500/20"
          >
            <RefreshCw size={18} /> Generate
          </button>
        </div>

        {/* Output */}
        <div className="relative group">
          <div className="absolute top-4 right-4 flex gap-2">
            <button
              onClick={copyToClipboard}
              className="p-2 bg-white dark:bg-[#2a2a2a] border border-gray-200 dark:border-gray-700 rounded-lg text-gray-500 hover:text-blue-600 transition-colors shadow-sm"
              title="Copy All"
            >
              {copied ? (
                <Check size={16} className="text-green-500" />
              ) : (
                <Copy size={16} />
              )}
            </button>
            <button
              onClick={() => setUuids([])}
              className="p-2 bg-white dark:bg-[#2a2a2a] border border-gray-200 dark:border-gray-700 rounded-lg text-gray-500 hover:text-red-500 transition-colors shadow-sm"
              title="Clear"
            >
              <Trash2 size={16} />
            </button>
          </div>

          <textarea
            readOnly
            value={uuids.join("\n")}
            className="w-full h-96 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 font-mono text-sm leading-relaxed text-gray-700 dark:text-gray-300 outline-none resize-none"
          />
        </div>
      </div>
    </ToolLayout>
  );
};

export default UUIDGenerator;
