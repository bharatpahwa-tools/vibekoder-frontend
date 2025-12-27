import { useState } from "react";

export default function CommentsSection() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      setComments([comment, ...comments]);
      setComment("");
    }
  };

  return (
    <section className="mt-12 pt-8 border-t border-gray-200 dark:border-[#1e1e1e]">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Comments
      </h3>
      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Add a comment..."
          className="w-full p-3 rounded-md bg-gray-100 dark:bg-[#181818] border border-gray-300 dark:border-[#2a2a2a] text-sm text-gray-900 dark:text-gray-200 outline-none resize-none"
          rows={4}
        ></textarea>
        <button
          type="submit"
          className="mt-3 px-5 py-2 rounded-full bg-black dark:bg-gray-100 text-white dark:text-black font-medium hover:scale-[1.02] transition"
        >
          Post Comment
        </button>
      </form>

      <div className="space-y-4">
        {comments.map((c, i) => (
          <div
            key={i}
            className="text-gray-800 dark:text-gray-300 text-sm border-b border-gray-200 dark:border-[#1e1e1e] pb-2"
          >
            {c}
          </div>
        ))}
      </div>
    </section>
  );
}
