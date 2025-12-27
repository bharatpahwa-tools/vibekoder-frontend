import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link as LinkIcon, Loader2, X, Globe } from "lucide-react";

const EmbedBlock = ({ content, onChange }) => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const data =
    typeof content === "object" ? content : { url: content || "", meta: null };

  useEffect(() => {
    if (typeof content === "string") {
      setUrl(content);
    } else if (content?.url) {
      setUrl(content.url);
    }
  }, [content]);

  const fetchMetadata = async () => {
    if (!url) return;
    setLoading(true);
    setError("");

    try {
      const response = await fetch(
        `https://api.microlink.io?url=${encodeURIComponent(url)}`
      );
      const json = await response.json();

      if (json.status === "success") {
        const { title, description, image, logo, publisher } = json.data;
        onChange({
          url: url,
          meta: {
            title,
            description,
            image: image?.url,
            logo: logo?.url,
            publisher,
          },
        });
      } else {
        setError("Could not fetch link metadata");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch metadata");
    } finally {
      setLoading(false);
    }
  };

  if (data.meta) {
    return (
      <div className="group relative">
        <a
          href={data.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-colors bg-white dark:bg-[#121212]"
        >
          {data.meta.image && (
            <div className="h-48 w-full overflow-hidden border-b border-gray-100 dark:border-gray-800">
              <img
                src={data.meta.image}
                alt={data.meta.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div className="p-4">
            <div className="flex items-center gap-2 mb-2">
              {data.meta.logo ? (
                <img
                  src={data.meta.logo}
                  alt=""
                  className="w-4 h-4 rounded-sm"
                />
              ) : (
                <Globe size={14} className="text-gray-400" />
              )}
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                {data.meta.publisher || "Website"}
              </span>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1 line-clamp-1">
              {data.meta.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">
              {data.meta.description}
            </p>
          </div>
        </a>

        {/* Remove Button */}
        <button
          onClick={() => onChange("")} // Reset content
          className="absolute -top-2 -right-2 bg-gray-900 text-white p-1.5 rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
          title="Remove Embed"
        >
          <X size={12} />
        </button>
      </div>
    );
  }

  return (
    <div className="p-1 dark:bg-[#121212] rounded-xl dark:border-gray-800">
      <div className="flex items-center gap-2 p-2">
        <div className="p-2  dark:bg-[#1a1a1a] rounded-lg text-gray-500">
          <LinkIcon size={16} />
        </div>
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && fetchMetadata()}
          placeholder="Paste a link and press Enter..."
          className="flex-1 bg-transparent text-sm outline-none text-gray-700 dark:text-gray-200 placeholder-gray-400"
        />
        <button
          onClick={fetchMetadata}
          disabled={loading || !url}
          className="px-3 py-1.5 bg-black dark:bg-white text-white dark:text-black rounded-full text-xs font-bold hover:opacity-80 transition disabled:opacity-50"
        >
          {loading ? <Loader2 size={14} className="animate-spin" /> : "Embed"}
        </button>
      </div>
      {error && <p className="text-xs text-red-500 px-3 pb-2">{error}</p>}
    </div>
  );
};

EmbedBlock.propTypes = { content: PropTypes.any, onChange: PropTypes.func };
export default EmbedBlock;
