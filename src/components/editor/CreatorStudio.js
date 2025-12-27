import React, { useEffect, useState } from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import { Settings, Save, RotateCcw, Paperclip, Home } from "lucide-react";
import { FiMoon, FiSun } from "react-icons/fi";
import { Menu, X } from "lucide-react";

// Components
import Sidebar from "./Sidebar";
import EditorCanvas from "./EditorCanvas";
import PublishModal from "./PublishModal";
import SettingsModal from "./SettingsModal";
import Logo from "../../assets/logo.png";

// Hooks & Utils
import { useEditorState } from "../../hooks/useEditorState";
import {
  generateBlogComponent,
  generateJsonEntry,
} from "../../utils/publishUtils";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { EncryptedText } from "../ui/encrypted-text";

export default function CreatorStudio() {
  // Destructure metadata and setMetadata from the hook now
  const {
    blocks,
    metadata,
    setMetadata,
    addBlock,
    updateBlock,
    deleteBlock,
    duplicateBlock,
    reorderBlocks,
    setBlocks,
  } = useEditorState();

  const navigate = useNavigate();

  const [theme, setTheme] = useState(localStorage.theme || "light");

  // Modal States
  const [isPublishModalOpen, setPublishModalOpen] = useState(false);
  const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    reorderBlocks(result.source.index, result.destination.index);
  };

  const handleAI = (generatedBlocks) => {
    setBlocks((prev) => [...prev, ...generatedBlocks]);
  };

  // Reset Functionality
  const handleReset = () => {
    if (
      window.confirm(
        "Are you sure you want to reset? This will delete all blocks, the title, and metadata."
      )
    ) {
      setBlocks([]); // Clear all blocks
      setMetadata({
        title: "",
        description: "",
        tags: [],
        date: new Date().toISOString().split("T")[0],
        readTime: "",
        coverImage: "",
      }); // Reset metadata to blank
    }
  };

  return (
    <>
      <Helmet>
        <title>AI Blog Editor – Create & Publish Blogs with AI</title>
        <meta
          name="description"
          content="A powerful AI-driven blog editor that lets users generate, edit, rewrite, design and publish blogs with drag-and-drop blocks, diagrams, AI rewriting, SEO settings and more."
        />
        <meta
          name="keywords"
          content="AI Blog Editor, Blog Builder, AI Writing Tool, Blog Generator, Drag & Drop Editor, Mermaid Diagrams, SEO Blog Writer, Content Creator, Bharat Pahwa"
        />

        {/* OG Tags */}
        <meta
          property="og:title"
          content="AI Blog Editor – Create & Publish Blogs with AI"
        />
        <meta
          property="og:description"
          content="An AI-powered blog editing studio where users can generate blog content, rewrite text, add diagrams, upload images, and publish instantly."
        />
        <meta property="og:image" content="https://engagegpt.in/og-image.png" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AI Blog Editor – Create with AI" />
        <meta
          name="twitter:description"
          content="A modern blog editor powered by AI. Create articles with sections, diagrams, alerts, code blocks, images and SEO metadata."
        />
        <meta
          name="twitter:image"
          content="https://engagegpt.in/og-image.png"
        />

        {/* Additional UX / PWA Tags */}
        <meta name="theme-color" content="#000000" />
      </Helmet>

      <div className="h-screen bg-white dark:bg-[#050505] transition-colors duration-300">
        {/* TOP BAR */}
        <div className="z-50 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 px-4 py-3 flex items-center justify-between sticky top-0">
          {/* LEFT SECTION */}
          <div className="flex items-center gap-4 w-full">
            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1a1a1a]"
              onClick={() => setMobileMenu(true)}
            >
              <Menu size={22} />
            </button>

            <button onClick={() => navigate("/")}>
              <div className="flex items-center gap-2">
                <img className="h-10" src={Logo} alt="Vibekoder" />
                <span className="text-3xl dark:text-white bitcount-prop-single  font-bold tracking-tight text-zinc-900">
                  <EncryptedText text="VibeKoder" />
                </span>
              </div>
            </button>
            <div className="h-6 w-[1px] bg-gray-200 dark:bg-gray-800 hidden md:block"></div>

            <input
              type="text"
              value={metadata.title}
              onChange={(e) =>
                setMetadata({ ...metadata, title: e.target.value })
              }
              className="bg-transparent text-lg font-bold text-gray-900 dark:text-white outline-none placeholder-gray-400 w-full md:w-96 truncate"
              placeholder="Enter Blog Title..."
            />
          </div>

          {/* MAIN ACTIONS (Desktop Only) */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-[#1a1a1a] transition text-gray-600 dark:text-gray-300"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
            </button>

            <button
              onClick={handleReset}
              className="p-2 rounded-lg transition text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
              title="Reset Editor (Clear All)"
            >
              <RotateCcw size={20} />
            </button>

            <button
              onClick={() => setSettingsModalOpen(true)}
              className="p-2 rounded-lg transition text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-gray-400"
              title="SEO & Settings"
            >
              <Settings size={20} />
            </button>

            <button
              onClick={() => setPublishModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-medium hover:opacity-80 transition"
            >
              <Save size={16} /> Publish
            </button>
            <button
              onClick={() => navigate("/blogs")}
              className="flex items-center gap-2 px-4 border border-black  py-2 bg-white dark:bg-black text-black dark:text-white rounded-full text-sm font-medium hover:opacity-80 transition"
            >
              <Paperclip size={16} /> Blogs
            </button>
          </div>
        </div>

        {/* MOBILE MENU (Slide-down) */}
        {mobileMenu && (
          <div className="md:hidden  fixed inset-0 z-50 bg-black/40 backdrop-blur-sm">
            <div className=" border-b-black border-b bg-white dark:bg-[#0a0a0a] p-4 pb-6 border-b border-gray-200 dark:border-gray-800 shadow-lg animate-fade-slide-down">
              {/* Close Button */}
              <div className="flex justify-between items-center mb-4">
                <button
                  onClick={() => navigate("/")}
                  className="text-base  instrument-italic  font-semibold text-gray-800 dark:text-gray-200"
                >
                  Bharat Pahwa
                </button>
                <button
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#1a1a1a]"
                  onClick={() => setMobileMenu(false)}
                >
                  <X className="text-black dark:text-white" size={22} />
                </button>
              </div>

              <div className="flex  items-center  gap-3">
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-[#1a1a1a] text-gray-700 dark:text-gray-300"
                >
                  {theme === "light" ? (
                    <FiMoon size={20} />
                  ) : (
                    <FiSun size={20} />
                  )}
                </button>

                <button
                  onClick={handleReset}
                  className="flex items-center gap-3 p-2 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20"
                >
                  <RotateCcw size={20} />
                </button>

                <button
                  onClick={() => {
                    setMobileMenu(false);
                    setSettingsModalOpen(true);
                  }}
                  className="flex items-center gap-3 p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#1a1a1a]"
                >
                  <Settings size={20} />
                </button>
                <button
                  onClick={() => navigate("/blogs")}
                  className="flex w-full items-center border gap-2 px-3 py-2 bg-white dark:bg-black text-black dark:text-white rounded-full text-sm font-medium hover:opacity-80 transition"
                >
                  <Paperclip size={16} /> Blogs
                </button>
                <button
                  onClick={() => {
                    setMobileMenu(false);
                    setPublishModalOpen(true);
                  }}
                  className="flex w-full items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-sm font-medium hover:opacity-80 transition "
                >
                  <Save size={16} /> Publish
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Small animation for mobile menu */}
        <style>{`
        @keyframes fade-slide-down {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-slide-down {
          animation: fade-slide-down 0.25s ease-out;
        }
      `}</style>

        {/* MAIN EDITOR LAYOUT */}
        <div className="flex h-[calc(100vh-65px)]">
          <Sidebar addBlock={addBlock} generateAI={handleAI} blocks={blocks} />

          {/* CENTER: CANVAS */}
          <div className="flex-1 no-scrollbar overflow-y-auto relative py-4 md:py-2 p-4 lg:pr-16 lg:pl-4  scroll-smooth custom-scrollbar">
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <EditorCanvas
                metadata={metadata}
                blocks={blocks}
                updateBlock={updateBlock}
                deleteBlock={deleteBlock}
                duplicateBlock={duplicateBlock}
              />
            </DragDropContext>
          </div>
        </div>

        {/* MODALS */}
        <SettingsModal
          isOpen={isSettingsModalOpen}
          onClose={() => setSettingsModalOpen(false)}
          metadata={metadata}
          setMetadata={setMetadata}
        />

        <PublishModal
          isOpen={isPublishModalOpen}
          onClose={() => setPublishModalOpen(false)}
          metadata={metadata}
          blocks={blocks}
          generateCode={generateBlogComponent}
          generateJson={generateJsonEntry}
        />
      </div>
    </>
  );
}
