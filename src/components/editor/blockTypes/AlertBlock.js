import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import {
  Info,
  CheckCircle2,
  Lightbulb,
  XCircle,
  AlertTriangle,
  Bell,
  Star,
  Sparkles,
  Flame,
  CloudRain,
  Leaf,
  Heart,
  Shield,
  Rocket,
} from "lucide-react";

export const COLORS = {
  blue: {
    bg: "bg-blue-50 dark:bg-blue-900/20",
    border: "border-blue-200 dark:border-blue-800",
    text: "text-blue-800 dark:text-blue-200",
    icon: Info,
  },
  green: {
    bg: "bg-green-50 dark:bg-green-900/20",
    border: "border-green-200 dark:border-green-800",
    text: "text-green-800 dark:text-green-200",
    icon: CheckCircle2,
  },
  yellow: {
    bg: "bg-yellow-50 dark:bg-yellow-900/20",
    border: "border-yellow-200 dark:border-yellow-800",
    text: "text-yellow-800 dark:text-yellow-200",
    icon: Lightbulb,
  },
  red: {
    bg: "bg-red-50 dark:bg-red-900/20",
    border: "border-red-200 dark:border-red-800",
    text: "text-red-800 dark:text-red-200",
    icon: XCircle,
  },
  purple: {
    bg: "bg-purple-50 dark:bg-purple-900/20",
    border: "border-purple-200 dark:border-purple-800",
    text: "text-purple-800 dark:text-purple-200",
    icon: AlertTriangle,
  },

  // NEW COLORS BELOW ⬇️

  gray: {
    bg: "bg-gray-50 dark:bg-gray-800/30",
    border: "border-gray-200 dark:border-gray-700",
    text: "text-gray-700 dark:text-gray-300",
    icon: Bell,
  },
  indigo: {
    bg: "bg-indigo-50 dark:bg-indigo-900/20",
    border: "border-indigo-200 dark:border-indigo-800",
    text: "text-indigo-800 dark:text-indigo-200",
    icon: Star,
  },
  violet: {
    bg: "bg-violet-50 dark:bg-violet-900/20",
    border: "border-violet-200 dark:border-violet-800",
    text: "text-violet-800 dark:text-violet-200",
    icon: Sparkles,
  },
  cyan: {
    bg: "bg-cyan-50 dark:bg-cyan-900/20",
    border: "border-cyan-200 dark:border-cyan-800",
    text: "text-cyan-800 dark:text-cyan-200",
    icon: CloudRain,
  },
  teal: {
    bg: "bg-teal-50 dark:bg-teal-900/20",
    border: "border-teal-200 dark:border-teal-800",
    text: "text-teal-800 dark:text-teal-200",
    icon: Leaf,
  },
  emerald: {
    bg: "bg-emerald-50 dark:bg-emerald-900/20",
    border: "border-emerald-200 dark:border-emerald-800",
    text: "text-emerald-800 dark:text-emerald-200",
    icon: Shield,
  },
  orange: {
    bg: "bg-orange-50 dark:bg-orange-900/20",
    border: "border-orange-200 dark:border-orange-800",
    text: "text-orange-800 dark:text-orange-200",
    icon: Flame,
  },
  rose: {
    bg: "bg-rose-50 dark:bg-rose-900/20",
    border: "border-rose-200 dark:border-rose-800",
    text: "text-rose-800 dark:text-rose-200",
    icon: Heart,
  },
  sky: {
    bg: "bg-sky-50 dark:bg-sky-900/20",
    border: "border-sky-200 dark:border-sky-800",
    text: "text-sky-800 dark:text-sky-200",
    icon: Rocket,
  },
  amber: {
    bg: "bg-amber-50 dark:bg-amber-900/20",
    border: "border-amber-200 dark:border-amber-800",
    text: "text-amber-800 dark:text-amber-200",
    icon: Lightbulb,
  },
  lime: {
    bg: "bg-lime-50 dark:bg-lime-900/20",
    border: "border-lime-200 dark:border-lime-800",
    text: "text-lime-800 dark:text-lime-200",
    icon: CheckCircle2,
  },
  slate: {
    bg: "bg-slate-50 dark:bg-slate-900/20",
    border: "border-slate-200 dark:border-slate-800",
    text: "text-slate-800 dark:text-slate-200",
    icon: Info,
  },
  zinc: {
    bg: "bg-zinc-50 dark:bg-zinc-900/20",
    border: "border-zinc-200 dark:border-zinc-800",
    text: "text-zinc-800 dark:text-zinc-200",
    icon: Bell,
  },
};

const AlertBlock = ({ content, onChange }) => {
  // Handle legacy content or initialize
  const initialData =
    typeof content === "object" && content !== null
      ? content
      : { text: content || "", type: "blue" };

  const [data, setData] = useState(initialData);
  const textareaRef = useRef(null);

  useEffect(() => {
    setData(
      typeof content === "object" && content !== null
        ? content
        : { text: content || "", type: "blue" }
    );
  }, [content]);

  // Auto-resize
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

  const CurrentTheme = COLORS[data.type] || COLORS.blue;
  const Icon = CurrentTheme.icon;

  return (
    <div
      className={`relative group p-4 rounded-xl border ${CurrentTheme.bg} ${CurrentTheme.border} transition-all duration-200`}
    >
      {/* Color/Type Selector - Visible on Hover */}
      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1 bg-white dark:bg-[#1e1e1e] p-1 rounded-full shadow-sm border border-gray-100 dark:border-gray-700 z-10">
        {Object.keys(COLORS).map((color) => (
          <button
            key={color}
            onClick={() => updateField("type", color)}
            className={`w-4 h-4 rounded-full ${
              COLORS[color].bg.split(" ")[0]
            } border ${
              COLORS[color].border.split(" ")[0]
            } hover:scale-110 transition-transform ${
              data.type === color ? "ring-2 ring-offset-1 ring-gray-400" : ""
            }`}
            title={color}
          />
        ))}
      </div>

      <div className="flex gap-4">
        <div className={`shrink-0 mt-0.5 ${CurrentTheme.text}`}>
          <Icon size={24} />
        </div>
        <textarea
          ref={textareaRef}
          value={data.text}
          onChange={(e) => updateField("text", e.target.value)}
          className={`w-full bg-transparent text-md ${CurrentTheme.text} border-none focus:ring-0 focus:outline-none resize-none overflow-hidden placeholder-gray-400 dark:placeholder-gray-500 leading-relaxed`}
          placeholder={`Write a ${data.type} note...`}
          rows={1}
        />
      </div>
    </div>
  );
};

AlertBlock.propTypes = { content: PropTypes.any, onChange: PropTypes.func };
export default AlertBlock;
