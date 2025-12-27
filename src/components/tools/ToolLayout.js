import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Home } from "lucide-react";
import Navbar from "../common/Navbar";

const ToolLayout = ({ title, description, icon: Icon, children }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#050505] transition-colors duration-300">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-8">
          <Link
            to="/"
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Home size={14} />
          </Link>
          <span>/</span>
          <Link
            to="/tools"
            className="hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            Tools
          </Link>
          <span>/</span>
          <span className="text-gray-900 dark:text-white font-medium">
            {title}
          </span>
        </div>

        {/* Tool Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
          <div className="flex items-start gap-4">
            <Link
              to="/tools"
              className="mt-1 p-2 rounded-xl bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ChevronLeft size={20} />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                {Icon && <Icon className="text-blue-500" size={32} />}
                {title}
              </h1>
              <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-2xl">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Tool Workspace */}
        <div className="bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800 rounded-3xl shadow-sm p-6 md:p-8 min-h-[400px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ToolLayout;
