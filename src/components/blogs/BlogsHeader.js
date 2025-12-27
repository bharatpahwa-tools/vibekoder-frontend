import { useState } from "react";
import { motion } from "framer-motion";

const categories = ["All", "React", "Design", "Backend", "AI", "Productivity"];

export default function BlogsHeader({ selectedCategory, setSelectedCategory }) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4"
    >
      {/* Title */}
      <div>
        <h1 className="text-xl instrument font-bold text-gray-900 dark:text-gray-100">
          All Articles/Guides
        </h1>
        <p className="text-gray-600 instrument dark:text-gray-400 text-sm">
          Discover thoughts, tutorials, and insights.
        </p>
      </div>

      {/* Filters */}
      <div className="relative">

        {showFilters && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute right-0 mt-2 bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2 w-48"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setShowFilters(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition ${
                  selectedCategory === cat
                    ? "font-semibold text-black dark:text-white"
                    : "text-gray-700 dark:text-gray-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}