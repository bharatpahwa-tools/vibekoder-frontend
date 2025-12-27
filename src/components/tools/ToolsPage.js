import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ArrowRight, Wrench, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { toolsRegistry } from "../tools/registry";

export default function ToolsPage() {
  const [query, setQuery] = useState("");

  const filteredTools = toolsRegistry.filter(
    (tool) =>
      tool.title.toLowerCase().includes(query.toLowerCase()) ||
      tool.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#09090b] text-slate-900 dark:text-slate-50 transition-colors duration-300 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen opacity-70 animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl mix-blend-multiply dark:mix-blend-screen opacity-70 animate-blob animation-delay-4000" />
        {/* Dot Grid */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 text-blue-600 dark:text-blue-300 text-xs font-semibold tracking-wide uppercase">
            <Sparkles size={12} />
            <span>10x Productivity Tools</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-slate-400">
              Your Toolbox
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A curated collection of essential utilities to streamline your
            development workflow. Open-source and privacy-focused.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-2xl mx-auto mb-20 group"
        >
          <div className="relative transform transition-all duration-300 group-hover:-translate-y-1">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <Search className="h-5  rounded-full w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full rounded-full   pl-12 pr-4 py-5 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-2xl text-slate-900 dark:text-white placeholder-slate-400  outline-none transition-all shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)]"
              placeholder="Search for a tool..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <span className="text-xs text-slate-400 border border-slate-200 dark:border-white/10 rounded px-2 py-1 bg-slate-50 dark:bg-white/5">
                /
              </span>
            </div>
          </div>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool, index) => (
            <Link key={tool.id} to={tool.path}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="group h-full relative"
              >
                {/* Card Glow Effect on Hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-0 group-hover:opacity-20 transition duration-500 blur-lg"></div>

                <div className="relative h-full p-8 bg-white dark:bg-[#121212] border border-slate-200 dark:border-white/5 rounded-3xl overflow-hidden transition-colors hover:border-blue-500/30 dark:hover:border-blue-400/30">
                  {/* Category Pill */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3.5 bg-slate-50 dark:bg-white/5 rounded-2xl text-slate-700 dark:text-slate-200 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-sm">
                      <tool.icon size={26} strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 dark:bg-white/5 px-3 py-1 rounded-full border border-slate-200 dark:border-white/5">
                      {tool.category}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {tool.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>

                  {/* Arrow Interaction */}
                  <div className="absolute bottom-8 right-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-blue-500">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredTools.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-32"
          >
            <div className="inline-block p-4 rounded-full bg-slate-100 dark:bg-white/5 mb-4">
              <Wrench className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
              No tools found
            </h3>
            <p className="text-slate-500 dark:text-slate-400">
              We couldn't find anything matching "{query}"
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
