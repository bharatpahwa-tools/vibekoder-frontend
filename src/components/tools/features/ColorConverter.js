import React, { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";
import ToolLayout from "../ToolLayout";
import { toolsRegistry } from "../registry";

const ColorConverter = () => {
  const toolInfo = toolsRegistry.find((t) => t.id === "color-converter");
  const [hex, setHex] = useState("#3b82f6");
  const [rgb, setRgb] = useState("");
  const [hsl, setHsl] = useState("");
  const [previewStyle, setPreviewStyle] = useState({});

  // Convert HEX to others
  useEffect(() => {
    if (/^#[0-9A-F]{6}$/i.test(hex)) {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);

      setRgb(`rgb(${r}, ${g}, ${b})`);

      // Calculate HSL
      const r1 = r / 255;
      const g1 = g / 255;
      const b1 = b / 255;
      const max = Math.max(r1, g1, b1);
      const min = Math.min(r1, g1, b1);
      let h,
        s,
        l = (max + min) / 2;

      if (max === min) {
        h = s = 0;
      } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r1:
            h = (g1 - b1) / d + (g1 < b1 ? 6 : 0);
            break;
          case g1:
            h = (b1 - r1) / d + 2;
            break;
          case b1:
            h = (r1 - g1) / d + 4;
            break;
        }
        h /= 6;
      }
      setHsl(
        `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(
          l * 100
        )}%)`
      );
      setPreviewStyle({ backgroundColor: hex });
    }
  }, [hex]);

  const CopyInput = ({ label, value }) => {
    const [copied, setCopied] = useState(false);
    const handleCopy = () => {
      navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };
    return (
      <div className="relative group">
        <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
          {label}
        </label>
        <div className="relative">
          <input
            readOnly
            value={value}
            className="w-full bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-xl px-4 py-3 font-mono text-gray-900 dark:text-white outline-none"
          />
          <button
            onClick={handleCopy}
            className="absolute right-2 top-2 p-1.5 bg-white dark:bg-[#252525] rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 hover:text-blue-500 transition-colors"
          >
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
        </div>
      </div>
    );
  };

  return (
    <ToolLayout {...toolInfo}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Color Picker / Input */}
        <div className="md:col-span-1 space-y-6">
          <div
            className="w-full aspect-square rounded-3xl shadow-inner border border-gray-200 dark:border-gray-800 transition-colors duration-500 flex items-center justify-center"
            style={previewStyle}
          >
            <span className="bg-black/20 backdrop-blur-md text-white px-4 py-2 rounded-xl font-mono">
              {hex}
            </span>
          </div>
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
              Pick Color
            </label>
            <div className="flex gap-2">
              <input
                type="color"
                value={hex}
                onChange={(e) => setHex(e.target.value)}
                className="h-12 w-12 rounded-xl cursor-pointer bg-transparent border-0 p-0"
              />
              <input
                type="text"
                value={hex}
                onChange={(e) => setHex(e.target.value)}
                className="flex-1 bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-xl px-4 font-mono text-gray-900 dark:text-white uppercase outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Converters */}
        <div className="md:col-span-2 space-y-6">
          <CopyInput label="HEX" value={hex} />
          <CopyInput label="RGB" value={rgb} />
          <CopyInput label="HSL" value={hsl} />

          <div className="p-4 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-2xl">
            <h4 className="text-blue-700 dark:text-blue-300 font-bold mb-2 text-sm">
              CSS Snippet
            </h4>
            <code className="text-xs sm:text-sm font-mono text-blue-900 dark:text-blue-100 block break-all">
              color: {hex}; /* {rgb} */
            </code>
          </div>
        </div>
      </div>
    </ToolLayout>
  );
};

export default ColorConverter;
