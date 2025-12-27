import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSearch,
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
  FiEdit,
  FiArrowRight,
  FiHash,
  FiCalendar,
} from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import blogsData from "../blogsData/blogs.json"; // Ensure this path is correct
import { EncryptedText } from "../../components/ui/encrypted-text";
import Logo from "../../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchActive, setSearchActive] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const searchRef = useRef(null);
  const location = useLocation();

  // Apply theme to <html> element and persist
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Handle Search Logic
  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = blogsData.filter(
      (blog) =>
        blog.title.toLowerCase().includes(lowerQuery) ||
        blog.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
    );
    setResults(filtered.slice(0, 5)); // Limit to 5 suggestions
  }, [query]);

  // Close search on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchActive(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close search on route change
  useEffect(() => {
    setSearchActive(false);
    setQuery("");
    setIsOpen(false);
  }, [location]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <motion.nav
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full sticky top-0 z-50 border-b border-gray-200 dark:border-[#1e1e1e] bg-white/80 dark:bg-[#181818]/80 backdrop-blur-md transition-colors duration-300"
    >
      <div className="max-w-8xl mx-auto px-3 lg:px-8 flex items-center justify-between h-16">
        {/* LEFT — Logo */}
        <div className="flex items-center gap-2">
          <img className="h-10" src={Logo} alt="Vibekoder" />
          <span className="text-3xl bitcount-prop-single dark:text-white font-bold tracking-tight text-zinc-900">
            <EncryptedText text="VibeKoder" />
          </span>
        </div>

        {/* CENTER — Search */}
        <div
          className="hidden md:flex flex-1 justify-center px-6"
          ref={searchRef}
        >
          <div className="relative w-full max-w-md group">
            <div className="absolute left-3 top-2.5 text-gray-400 group-focus-within:text-blue-500 transition-colors">
              <FiSearch size={18} />
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setSearchActive(true)}
              placeholder="Search articles, tags..."
              className={`w-full pl-10 pr-4 py-2 rounded-full border text-sm outline-none transition-all duration-300
                ${
                  searchActive
                    ? "border-black dark:border-gray-300 shadow-lg shadow-black/5"
                    : "border-gray-300 dark:border-[#2a2a2a] hover:border-gray-400 dark:hover:border-gray-600"
                }
                bg-gray-50 dark:bg-[#121212] text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400`}
            />

            {/* RESULTS DROPDOWN */}
            <AnimatePresence>
              {searchActive && query && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 right-0 mt-3 bg-white dark:bg-[#181818] border border-gray-200 dark:border-[#2a2a2a] rounded-2xl shadow-2xl overflow-hidden ring-1 ring-black/5"
                >
                  <div className="max-h-[60vh] overflow-y-auto custom-scrollbar">
                    {results.length > 0 ? (
                      <>
                        <div className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider bg-gray-50 dark:bg-[#121212] border-b border-gray-100 dark:border-[#2a2a2a]">
                          Suggestions
                        </div>
                        {results.map((blog) => (
                          <Link
                            key={blog.id}
                            to={`/blog/${blog.slug}`}
                            className="block px-4 py-3 hover:bg-gray-50 dark:hover:bg-[#1f1f1f] border-b border-gray-100 dark:border-[#2a2a2a] last:border-0 transition-colors group/item"
                          >
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors line-clamp-1">
                              {blog.title}
                            </h4>
                            <div className="flex items-center gap-3 mt-1.5">
                              <span className="flex items-center gap-1 text-[11px] text-gray-500">
                                <FiCalendar size={10} />
                                {new Date(blog.date).toLocaleDateString()}
                              </span>
                              {blog.tags.slice(0, 2).map((tag) => (
                                <span
                                  key={tag}
                                  className="flex items-center gap-0.5 px-1.5 py-0.5 rounded-md bg-gray-100 dark:bg-[#252525] text-[10px] text-gray-600 dark:text-gray-400 font-medium"
                                >
                                  <FiHash size={8} /> {tag}
                                </span>
                              ))}
                            </div>
                          </Link>
                        ))}
                      </>
                    ) : (
                      <div className="p-8 text-center">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          No results found for "{query}"
                        </p>
                      </div>
                    )}
                  </div>
                  {results.length > 0 && (
                    <div className="px-4 py-2 bg-gray-50 dark:bg-[#121212] border-t border-gray-100 dark:border-[#2a2a2a] text-[10px] text-gray-400 flex justify-between items-center">
                      <span>Press Enter to select</span>
                      <span>{results.length} results</span>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT — Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/create"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium hover:opacity-80 transition-opacity"
          >
            <FiEdit size={16} />
            <span>Create</span>
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#1c1c1c] transition"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <FiMoon className="text-gray-700" size={20} />
            ) : (
              <FiSun className="text-gray-200" size={20} />
            )}
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition"
          >
            {isOpen ? (
              <FiX size={22} className="text-gray-700 dark:text-gray-200" />
            ) : (
              <FiMenu size={22} className="text-gray-700 dark:text-gray-200" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-gray-200 dark:border-[#1e1e1e] bg-white dark:bg-[#181818] overflow-hidden shadow-xl"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <FiSearch
                  className="absolute left-3 top-3 text-gray-400 dark:text-gray-500"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-full bg-gray-50 dark:bg-[#121212] border border-gray-300 dark:border-[#2a2a2a] text-sm text-gray-700 dark:text-gray-200 outline-none focus:border-black dark:focus:border-gray-300 transition"
                />

                {/* Mobile Search Results */}
                {query && results.length > 0 && (
                  <div className="mt-3 space-y-2">
                    {results.slice(0, 3).map((blog) => (
                      <Link
                        key={blog.id}
                        to={`/blog/${blog.slug}`}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-[#121212] border border-gray-100 dark:border-[#2a2a2a]"
                      >
                        <span className="text-sm font-medium text-gray-900 dark:text-gray-100 line-clamp-1">
                          {blog.title}
                        </span>
                        <FiArrowRight
                          size={14}
                          className="text-gray-400 shrink-0"
                        />
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-3 justify-between pt-2">
                <Link
                  to="/create"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition text-gray-700 dark:text-gray-200"
                >
                  <FiEdit size={18} />
                  <span className="font-medium">Create Article</span>
                </Link>
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#1c1c1c] transition"
                  aria-label="Toggle theme"
                >
                  {theme === "light" ? (
                    <FiMoon className="text-gray-700" size={20} />
                  ) : (
                    <FiSun className="text-gray-200" size={20} />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
