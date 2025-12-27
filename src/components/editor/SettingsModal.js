import React from "react";
import {
  X,
  Image,
  Calendar,
  Clock,
  Tag,
  Globe,
  Type,
  Github,
  Twitter,
  Linkedin,
  Link as LinkIcon,
} from "lucide-react";

const SOCIAL_PREFIXES = {
  github: "https://github.com/",
  twitter: "https://x.com/",
  linkedin: "https://linkedin.com/in/",
  website: "https://",
  instagram: "https://instagram.com/",
  youtube: "https://youtube.com/",
};

const SettingsModal = ({ isOpen, onClose, metadata, setMetadata }) => {
  if (!isOpen) return null;

  const handleChange = (field, value) => {
    setMetadata((prev) => ({ ...prev, [field]: value }));
  };

  const handleSocialChange = (network, value) => {
    const prefix = SOCIAL_PREFIXES[network];
    let cleanValue = value;

    if (value.startsWith(prefix)) {
      cleanValue = value.slice(prefix.length);
    } else if (value.startsWith("https://")) {
      cleanValue = value.replace("https://", "");
    }
    const finalUrl = cleanValue.trim() ? `${prefix}${cleanValue}` : "";
    setMetadata((prev) => ({
      ...prev,
      socials: {
        ...prev.socials,
        [network]: finalUrl,
      },
    }));
  };

  // Helper to extract username for display
  const getUsername = (network) => {
    const url = metadata.socials?.[network] || "";
    const prefix = SOCIAL_PREFIXES[network];
    if (url.startsWith(prefix)) {
      return url.slice(prefix.length);
    }
    return url; // Fallback if data doesn't match standard prefix
  };

  return (
    <div className="fixed inset-0 z-[100] no-scrollbar flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-[#fafaf9] dark:bg-[#0f0f0f] no-scrollbar w-full max-w-3xl rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-800 flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 border-b rounded-3xl border-gray-200 dark:border-gray-800 flex justify-between items-center bg-white/0 dark:bg-[#121212]">
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Globe size={20} className="text-blue-500" /> Page Settings & SEO
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Configure author details and social links.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition text-gray-500"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 no-scrollbar space-y-4 custom-scrollbar">
          {/* SECTION 1: METADATA */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                <Type size={14} /> Author Name
              </label>
              <input
                type="text"
                placeholder="Enter author name"
                value={metadata.author || ""}
                onChange={(e) => handleChange("author", e.target.value)}
                className="w-full bg-white/50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-full p-3 text-sm focus:border-blue-500 outline-none text-gray-900 dark:text-gray-100"
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                <Calendar size={14} /> Date
              </label>
              <input
                type="date"
                placeholder="Enter date"
                value={metadata.date}
                onChange={(e) => handleChange("date", e.target.value)}
                className="w-full bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-full p-3 text-sm focus:border-blue-500 outline-none text-gray-900 dark:text-gray-100"
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                <Clock size={14} /> Read Time (min)
              </label>
              <input
                type="number"
                placeholder="Enter read time"
                value={metadata.readTime}
                onChange={(e) => handleChange("readTime", e.target.value)}
                className="w-full bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-full p-3 text-sm focus:border-blue-500 outline-none text-gray-900 dark:text-gray-100"
              />
            </div>
            <div className="space-y-2">
              <label className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                <Tag size={14} /> Tags
              </label>
              <input
                type="text"
                value={metadata.tags.join(", ")}
                placeholder="Enter tags separated by commas"
                onChange={(e) =>
                  handleChange(
                    "tags",
                    e.target.value.split(",").map((t) => t.trim())
                  )
                }
                className="w-full bg-white/50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-full p-3 text-sm focus:border-blue-500 outline-none text-gray-900 dark:text-gray-100"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                <Image size={14} /> Cover Image
              </label>
              <input
                type="text"
                value={metadata.coverImage}
                placeholder="Enter cover image URL"
                onChange={(e) => handleChange("coverImage", e.target.value)}
                className="w-full bg-white/50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-full p-3 text-sm focus:border-blue-500 outline-none text-gray-900 dark:text-gray-100"
              />
            </div>
          </div>

          {/* SECTION 3: SEO */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              <Type size={14} /> Meta Description
            </label>
            <textarea
              placeholder="Enter meta description"
              value={metadata.description}
              onChange={(e) => handleChange("description", e.target.value)}
              className="w-full bg-white/50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-sm focus:border-blue-500 outline-none text-gray-900 dark:text-gray-100 h-24 resize-none"
            />
          </div>

          {/* SECTION 2: SOCIAL PROFILES */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-gray-900 dark:text-white">
              Social Profiles
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* GitHub */}
              <div className="flex rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] overflow-hidden focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
                <div className="flex items-center px-3 bg-gray-100 dark:bg-[#252525] border-r border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 select-none min-w-[140px]">
                  <Github size={16} className="mr-2" />
                  <span className="text-xs font-mono">github.com/</span>
                </div>
                <input
                  type="text"
                  placeholder="username"
                  value={getUsername("github")}
                  onChange={(e) => handleSocialChange("github", e.target.value)}
                  className="flex-1 p-3 text-sm bg-transparent outline-none text-gray-900 dark:text-gray-100 placeholder-gray-400"
                />
              </div>

              {/* Twitter */}
              <div className="flex rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] overflow-hidden focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
                <div className="flex items-center px-3 bg-gray-100 dark:bg-[#252525] border-r border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 select-none min-w-[140px]">
                  <Twitter size={16} className="mr-2" />
                  <span className="text-xs font-mono">twitter.com/</span>
                </div>
                <input
                  type="text"
                  placeholder="username"
                  value={getUsername("twitter")}
                  onChange={(e) =>
                    handleSocialChange("twitter", e.target.value)
                  }
                  className="flex-1 p-3 text-sm bg-transparent outline-none text-gray-900 dark:text-gray-100 placeholder-gray-400"
                />
              </div>

              {/* LinkedIn */}
              <div className="flex rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] overflow-hidden focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
                <div className="flex items-center px-3 bg-gray-100 dark:bg-[#252525] border-r border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 select-none min-w-[140px]">
                  <Linkedin size={16} className="mr-2" />
                  <span className="text-xs font-mono">linkedin.com/in/</span>
                </div>
                <input
                  type="text"
                  placeholder="username"
                  value={getUsername("linkedin")}
                  onChange={(e) =>
                    handleSocialChange("linkedin", e.target.value)
                  }
                  className="flex-1 p-3 text-sm bg-transparent outline-none text-gray-900 dark:text-gray-100 placeholder-gray-400"
                />
              </div>

              {/* Website */}
              <div className="flex rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] overflow-hidden focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
                <div className="flex items-center px-3 bg-gray-100 dark:bg-[#252525] border-r border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 select-none min-w-[140px]">
                  <LinkIcon size={16} className="mr-2" />
                  <span className="text-xs font-mono">https://</span>
                </div>
                <input
                  type="text"
                  placeholder="yourwebsite.com"
                  value={getUsername("website")}
                  onChange={(e) =>
                    handleSocialChange("website", e.target.value)
                  }
                  className="flex-1 p-3 text-sm bg-transparent outline-none text-gray-900 dark:text-gray-100 placeholder-gray-400"
                />
              </div>

              {/* Instagram */}
              <div className="flex rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] overflow-hidden focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
                <div className="flex items-center px-3 bg-gray-100 dark:bg-[#252525] border-r border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 select-none min-w-[140px]">
                  <LinkIcon size={16} className="mr-2" />
                  <span className="text-xs font-mono">instagram.com/</span>
                </div>
                <input
                  type="text"
                  placeholder="username"
                  value={getUsername("instagram")}
                  onChange={(e) =>
                    handleSocialChange("instagram", e.target.value)
                  }
                  className="flex-1 p-3 text-sm bg-transparent outline-none text-gray-900 dark:text-gray-100 placeholder-gray-400"
                />
              </div>

              {/* Youtube */}
              <div className="flex rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1a1a1a] overflow-hidden focus-within:ring-2 focus-within:ring-blue-500/20 transition-all">
                <div className="flex items-center px-3 bg-gray-100 dark:bg-[#252525] border-r border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 select-none min-w-[140px]">
                  <LinkIcon size={16} className="mr-2" />
                  <span className="text-xs font-mono">youtube.com/</span>
                </div>
                <input
                  type="text"
                  placeholder="username"
                  value={getUsername("youtube")}
                  onChange={(e) =>
                    handleSocialChange("youtube", e.target.value)
                  }
                  className="flex-1 p-3 text-sm bg-transparent outline-none text-gray-900 dark:text-gray-100 placeholder-gray-400"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-[#121212] rounded-b-3xl flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black font-medium rounded-full hover:opacity-90 transition shadow-lg"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
