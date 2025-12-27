import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import blogsData from "../blogsData/blogs.json";

export default function SuggestionsSidebar() {

  return (
    <motion.aside
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-24 border-l border-gray-200 dark:border-gray-700 px-6 py-8 h-fit"
    >
      <h3 className="text-lg instrument font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Suggested Reads
      </h3>

      <ul className="space-y-5">
        {blogsData.map((item) => (
          <li
            key={item.id}
            className="group border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0"
          >
            <a
              href={`/blog/${item.slug}`}
              className="block"
            >
              <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100 group-hover:text-black dark:group-hover:text-white transition line-clamp-2">
                {item.title}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {item.author} • {item.readTime} min read
              </p>
            </a>

            <div className="pt-2">
              <a
                href={`/blog/${item.slug}`}
                className="inline-flex items-center text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:underline group-hover:text-black dark:group-hover:text-white transition"
              >
                Read More <FiArrowRight className="ml-1" size={14} />
              </a>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-4">
        <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">
          Popular Topics
        </h4>
        <div className="flex flex-wrap gap-2">
          {["AI", "React", "Backend", "Design", "Node.js"].map((topic) => (
            <span
              key={topic}
              className="px-3 py-1 text-xs border border-gray-300 dark:border-gray-00 text-gray-700 dark:text-gray-300"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </motion.aside>
  );
}