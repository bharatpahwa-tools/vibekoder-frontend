import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Workflow, Sparkles, Loader2, RefreshCw } from "lucide-react";
import mermaid from "mermaid";
import { generateDiagramCode } from "../../../services/aiService";

// Initialize mermaid config
mermaid.initialize({
  startOnLoad: false,
  theme: "default",
  securityLevel: "loose",
});

const DiagramBlock = ({ content, onChange }) => {
  // content is the mermaid code string
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [key, setKey] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!content || !containerRef.current) return;
    containerRef.current.innerHTML = `<div class="mermaid">${content}</div>`;

    try {
      mermaid.run({
        querySelector: ".mermaid",
      });
    } catch (err) {
      console.error("Mermaid Render Error", err);
      containerRef.current.innerHTML = `<div class="text-red-500 text-xs p-2">Invalid Mermaid Syntax</div>`;
    }
  }, [content, key]);

  const handleGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    try {
      const code = await generateDiagramCode(prompt);
      onChange(code);
      setKey((prev) => prev + 1);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#121212]">
      {/* Header / Input Area */}
      <div className="flex flex-col gap-3 mb-4">
        <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider">
          <Workflow size={14} /> AI Diagram Generator
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleGenerate()}
            placeholder="Describe a flow (e.g. 'Login process with error handling')..."
            className="flex-1 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2 text-sm outline-none focus:ring-1 focus:ring-black transition-all text-gray-700 dark:text-gray-200"
          />
          <button
            onClick={handleGenerate}
            disabled={loading || !prompt}
            className="px-4 py-2 bg-black text-white rounded-full text-xs font-bold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg shadow-blue-500/20"
          >
            {loading ? (
              <Loader2 size={14} className="animate-spin" />
            ) : (
              <Sparkles size={14} />
            )}
            Generate
          </button>
        </div>
      </div>

      {/* Render Area */}
      {content ? (
        <div className="relative group border border-gray-100 dark:border-gray-800 rounded-xl bg-gray-50/50 dark:bg-[#0a0a0a] p-4 min-h-[150px] flex items-center justify-center overflow-x-auto">
          <div ref={containerRef} className="w-full text-center" />

          {/* Edit Mode Overlay (Optional: allow raw edit) */}
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => setKey((k) => k + 1)}
              className="p-1.5 bg-white dark:bg-[#222] border border-gray-200 dark:border-gray-700 rounded-lg text-gray-500 hover:text-blue-500 shadow-sm"
              title="Refresh Diagram"
            >
              <RefreshCw size={14} />
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-8 text-gray-400 dark:text-gray-600 text-xs bg-gray-50 dark:bg-[#1a1a1a] rounded-xl border border-dashed border-gray-200 dark:border-gray-800">
          Generated diagram will appear here
        </div>
      )}

      {/* Raw Code Toggle (Hidden by default, could be added for power users) */}
      {content && (
        <details className="mt-2 text-xs">
          <summary className="text-gray-400 cursor-pointer hover:text-gray-600">
            View Mermaid Syntax
          </summary>
          <textarea
            value={content}
            onChange={(e) => onChange(e.target.value)}
            className="w-full mt-2 h-24 p-2 bg-gray-100 dark:bg-[#1a1a1a] rounded-lg font-mono text-xs outline-none"
          />
        </details>
      )}
    </div>
  );
};

DiagramBlock.propTypes = {
  content: PropTypes.string,
  onChange: PropTypes.func,
};
export default DiagramBlock;
