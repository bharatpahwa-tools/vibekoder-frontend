import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { formatDistanceToNow } from "date-fns";

export default function BlogCard({ blog }) {
  const timeAgo = formatDistanceToNow(new Date(blog.date), { addSuffix: true });

  return (
    <motion.article
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col sm:flex-row gap-5 py-6 transition"
    >
      {/* Thumbnail */}
      <div className="flex-shrink-0 w-full sm:w-44 h-44 bg-gray-100 dark:bg-[#111] overflow-hidden">
        <img
          loading="lazy"
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Blog Content */}
      <div className="flex flex-col justify-between flex-1">
        {/* Top Info */}
        <div>
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500 mb-1">
            <span>{timeAgo}</span>
            <span>{blog.readTime} min read</span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2">
            {blog.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-3">
            {blog.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-gradient-to-b from-white/10 to-white/5 dark:from-white/10 dark:to-white/0 text-xs border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Read More */}
        <div className="pt-3">
          <a
            href={`/blog/${blog.slug}`}
            className="inline-flex items-center gap-2 text-md font-medium text-black dark:text-gray-200 hover:text-black dark:hover:text-white hover:underline transition"
          >
            Read More <FiArrowRight size={14} />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
