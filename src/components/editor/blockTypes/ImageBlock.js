import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Image as ImageIcon,
  Link,
  Search,
  Loader2,
  X,
  Globe,
  UploadCloud,
  Sparkles,
} from "lucide-react";
const ACCESS_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;

const ImageBlock = ({ content, onChange }) => {
  // State to toggle between URL input and Search
  const [tab, setTab] = useState(content ? "preview" : "url");
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${query}&per_page=12&client_id=${ACCESS_KEY}`
      );
      const data = await response.json();
      if (data.errors) throw new Error(data.errors[0]);
      setResults(data.results || []);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch images. Check API Key.");
    } finally {
      setLoading(false);
    }
  };
  if (content) {
    return (
      <div className="group relative rounded-xl overflow-hidden  bg-gray-50 dark:bg-[#0a0a0a]">
        <img
          src={content}
          alt="Blog Content"
          className="w-full h-auto max-h-[600px] object-cover"
        />
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
          <button
            onClick={() => {
              onChange("");
              setTab("url");
            }}
            className="bg-black/70 hover:bg-red-600 text-white p-2 rounded-xl backdrop-blur-md transition-colors"
            title="Remove Image"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-1.5 bg-white dark:bg-[#121212] rounded-xl border border-gray-200 dark:border-gray-800  transition-all">
      {/* Minimal Segmented Control */}
      <div className="flex justify-start p-1 items-start dark:bg-[#1a1a1a] rounded-xl mb-4">
        <button
          onClick={() => setTab("url")}
          className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all flex items-center justify-center gap-2 ${
            tab === "url"
              ? "bg-white dark:bg-[#2a2a2a] text-black dark:text-white "
              : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          }`}
        >
          <Link size={14} /> Paste Link
        </button>
        <button
          onClick={() => setTab("unsplash")}
          className={`flex-1 py-2 text-xs font-medium rounded-lg transition-all flex items-center justify-center gap-2 ${
            tab === "unsplash"
              ? "bg-white dark:bg-[#2a2a2a] text-black dark:text-white "
              : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          }`}
        >
          <Search size={14} /> Unsplash
        </button>
      </div>

      <div className="px-2 pb-2">
        {/* MODE 1: URL PASTE */}
        {tab === "url" && (
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div
              className="
        flex items-center gap-3 
        bg-gray-50 dark:bg-[#1a1a1a] 
        p-1.5 pl-4 rounded-xl 
        border border-gray-200 dark:border-gray-700 
        transition-all

        focus-within:ring-1
        focus-within:ring-black dark:focus-within:ring-white
      "
            >
              <Globe size={14} className="text-gray-400" />

              <input
                type="text"
                value={content}
                onChange={(e) => onChange(e.target.value)}
                className="flex-1 bg-transparent py-1 text-sm outline-none text-gray-700 dark:text-gray-200 placeholder-gray-400"
                placeholder="Paste image address (https://...)"
                autoFocus
              />

              <div className="pr-1.5">
                <div className="h-8 w-8 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-[#252525] text-gray-400">
                  <ImageIcon size={14} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODE 2: UNSPLASH SEARCH */}
        {tab === "unsplash" && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
            {/* Search Input */}
            <div className="relative group">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                className="w-full bg-gray-50 dark:bg-[#1a1a1a] text-sm p-3 pl-10 pr-20 rounded-xl outline-none border border-gray-200 dark:border-gray-700 focus:border-black dark:focus:border-white transition-colors placeholder-gray-400 dark:text-white"
                placeholder="Search for high-res photos..."
                autoFocus
              />
              <Search
                size={16}
                className="absolute left-3 top-3.5 text-gray-400 group-focus-within:text-black dark:group-focus-within:text-white transition-colors"
              />
              <button
                onClick={handleSearch}
                disabled={loading || !query}
                className=" absolute right-1.5 top-1.5 px-4 py-2 bg-black text-white rounded-full text-xs font-bold hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 shadow-lg shadow-blue-500/20"
              >
                {loading ? (
                  <Loader2 size={14} className="animate-spin" />
                ) : (
                  <Sparkles size={14} />
                )}
                Search
              </button>
            </div>

            {/* Results Grid */}
            {results.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-[300px] overflow-y-auto custom-scrollbar pr-1">
                {results.map((img) => (
                  <button
                    key={img.id}
                    onClick={() => onChange(img.urls.regular)}
                    className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 dark:bg-[#222] focus:outline-none focus:ring-2 ring-black dark:ring-white ring-offset-2 dark:ring-offset-[#121212]"
                  >
                    <img
                      src={img.urls.small}
                      alt={img.alt_description}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                    <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-[10px] text-white font-medium truncate block bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full w-fit">
                        {img.user?.name}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              !loading &&
              !error && (
                <div className="flex flex-col items-center justify-center py-10 text-gray-400 border border-dashed border-gray-200 dark:border-gray-800 rounded-xl bg-gray-50/50 dark:bg-[#151515]">
                  <div className="bg-white dark:bg-[#1a1a1a] p-3 rounded-full mb-3">
                    <UploadCloud size={20} className="opacity-50" />
                  </div>
                  <p className="text-xs font-medium">
                    Type a keyword to find images
                  </p>
                  <p className="text-[10px] opacity-60 mt-1">
                    Powered by Unsplash
                  </p>
                </div>
              )
            )}

            {error && (
              <div className="text-xs text-red-500 text-center py-3 bg-red-50 dark:bg-red-900/10 rounded-xl border border-red-100 dark:border-red-900/20">
                {error}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

ImageBlock.propTypes = { content: PropTypes.string, onChange: PropTypes.func };
export default ImageBlock;
