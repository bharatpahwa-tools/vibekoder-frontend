import React from "react";
import PropTypes from "prop-types";
import { Video, Link } from "lucide-react";

const VideoBlock = ({ content, onChange }) => {
  // Helper to extract ID from various YouTube URL formats
  const getYoutubeId = (url) => {
    if (!url) return null;
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYoutubeId(content);

  return (
    <div className="">
      {!videoId ? (
        <div className="w-full p-2  dark:bg-[#121212] dark:border-gray-800 rounded-xl flex items-center gap-3 transition-colors">
          <div className="p-2 bg-white dark:bg-[#1a1a1a] rounded-lg border border-gray-100 dark:border-gray-700">
            <Video className="text-red-500" size={20} />
          </div>
          <input
            type="text"
            value={content || ""}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Paste YouTube Video URL here..."
            className="flex-1 bg-transparent outline-none text-sm text-gray-700 dark:text-gray-200 placeholder-gray-400"
          />
        </div>
      ) : (
        <div className="group relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            className="absolute inset-0 w-full h-full pointer-events-none group-hover:pointer-events-auto transition-opacity"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

          {/* Input Overlay (Visible on Hover to change URL) */}
          <div className="absolute top-0 left-0 w-full p-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-b from-black/60 to-transparent pointer-events-none">
            <div className="pointer-events-auto flex gap-2 items-center bg-white dark:bg-[#1a1a1a] p-1.5 rounded-lg max-w-sm mx-auto mt-2 shadow-lg">
              <Link size={14} className="text-gray-400 ml-2" />
              <input
                type="text"
                value={content}
                onChange={(e) => onChange(e.target.value)}
                className="flex-1 bg-transparent text-xs outline-none dark:text-white"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

VideoBlock.propTypes = { content: PropTypes.string, onChange: PropTypes.func };
export default VideoBlock;
