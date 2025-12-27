import { useState } from "react";
import { motion } from "framer-motion";
import BlogsHeader from "./BlogsHeader";
import BlogCard from "./BlogCard";
import blogsData from "../blogsData/blogs.json";

export default function BlogsContainer() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBlogs =
    selectedCategory === "All"
      ? blogsData
      : blogsData.filter((b) => b.tags.includes(selectedCategory));

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex-1 mt-6"
    >
      {/* HEADER + FILTERS */}
      <BlogsHeader
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* BLOGS LIST */}
      {filteredBlogs.length > 0 ? (
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 dark:text-gray-400 mt-10 text-center">
          No articles found for "{selectedCategory}".
        </p>
      )}
    </motion.section>
  );
}
