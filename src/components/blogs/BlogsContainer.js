import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, PenSquare } from "lucide-react";
import { Button } from "../ui/button"; // Adjust path if needed, or use existing imports
import BlogsHeader from "./BlogsHeader";
import BlogCard from "./BlogCard";
import { useNavigate } from "react-router-dom";

export default function BlogsContainer({ blogs = [], isOwnProfile = false }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();

  const filteredBlogs =
    selectedCategory === "All"
      ? blogs
      : blogs.filter((b) => b.tags.includes(selectedCategory));

  if (!blogs || blogs.length === 0) {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-1 mt-6 flex flex-col items-center justify-center min-h-[50vh] text-center"
      >
        <div className="bg-zinc-50 dark:bg-zinc-900 rounded-full p-6 mb-4">
          <PenSquare className="w-8 h-8 text-zinc-400" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          No blogs published yet
        </h3>
        <p className="text-gray-500 dark:text-gray-400 max-w-sm mb-6">
          {isOwnProfile
            ? "Share your knowledge with the world. Create your first blog post now."
            : "This user hasn't published any blogs yet."}
        </p>
        {isOwnProfile && (
          <Button
            onClick={() => navigate("/create")}
            className="bg-zinc-900 text-white hover:bg-zinc-800"
          >
            <Plus className="mr-2 h-4 w-4" />
            Create New Blog
          </Button>
        )}
      </motion.section>
    );
  }

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
