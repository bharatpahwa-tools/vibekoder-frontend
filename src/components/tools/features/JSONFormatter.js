import React, { useState } from "react";
import { Check, Copy, Trash2, Code, AlertCircle } from "lucide-react";
import ToolLayout from "../ToolLayout";
import { toolsRegistry } from "../registry";

const JSONFormatter = () => {
  const toolInfo = toolsRegistry.find((t) => t.id === "json-formatter");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  const format = () => {
    if (!input.trim()) return;
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError(null);
    } catch (err) {
      setError(err.message);
      setOutput("");
    }
  };

  const minify = () => {
    if (!input.trim()) return;
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError(null);
    } catch (err) {
      setError(err.message);
      setOutput("");
    }
  };

  const copyOutput = () => {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <ToolLayout {...toolInfo}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[600px]">
        {/* Input Column */}
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center mb-2 px-1">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Input JSON
            </label>
            <button
              onClick={() => setInput("")}
              className="text-xs text-red-500 hover:text-red-600 flex items-center gap-1"
            >
              <Trash2 size={12} /> Clear
            </button>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Paste JSON here... e.g. {"name": "Bharat"}'
            className={`flex-1 w-full bg-gray-50 dark:bg-[#1a1a1a] border rounded-2xl p-4 font-mono text-xs md:text-sm outline-none resize-none transition-colors ${
              error
                ? "border-red-500/50 focus:border-red-500"
                : "border-gray-200 dark:border-gray-800 focus:border-blue-500"
            }`}
          />
          {error && (
            <div className="mt-2 text-xs text-red-500 flex items-center gap-2 bg-red-50 dark:bg-red-900/10 p-2 rounded-lg">
              <AlertCircle size={14} /> {error}
            </div>
          )}
        </div>

        {/* Actions (Mobile: Middle, Desktop: Hidden) */}
        <div className="flex lg:hidden gap-2">
          <button
            onClick={format}
            className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-medium"
          >
            Format
          </button>
          <button
            onClick={minify}
            className="flex-1 py-3 bg-gray-800 text-white rounded-xl font-medium"
          >
            Minify
          </button>
        </div>

        {/* Output Column */}
        <div className="flex flex-col h-full relative">
          {/* Floating Action Bar for Desktop */}
          <div className="absolute top-1/2 -left-3 -translate-x-1/2 hidden lg:flex flex-col gap-2 z-10">
            <button
              onClick={format}
              className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-transform hover:scale-110"
              title="Format"
            >
              <Code size={20} />
            </button>
          </div>

          <div className="flex justify-between items-center mb-2 px-1">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
              Output
            </label>
            <button
              onClick={copyOutput}
              disabled={!output}
              className="text-xs text-blue-500 hover:text-blue-600 flex items-center gap-1 disabled:opacity-50"
            >
              {copied ? <Check size={12} /> : <Copy size={12} />}{" "}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <textarea
            readOnly
            value={output}
            placeholder="Result will appear here..."
            className="flex-1 w-full bg-gray-900 dark:bg-black border border-gray-800 rounded-2xl p-4 font-mono text-xs md:text-sm text-green-400 outline-none resize-none"
          />
        </div>
      </div>
    </ToolLayout>
  );
};

export default JSONFormatter;
