import React from "react";
import { Droppable } from "@hello-pangea/dnd";
import BlockRenderer from "./BlockRenderer";
import PropTypes from "prop-types";
import {
  Calendar,
  Clock,
  Image as ImageIcon,
  Linkedin,
  Twitter,
  Github,
  Link as LinkIcon,
  Youtube,
  Instagram,
} from "lucide-react";

const EditorCanvas = ({
  metadata,
  blocks,
  updateBlock,
  deleteBlock,
  duplicateBlock,
}) => {
  const panda = React.useMemo(() => {
    const pandaNames = [
      "Bamboo",
      "BaoBao",
      "Luna",
      "Mochi",
      "Noodle",
      "Pandi",
      "Koko",
    ];

    return pandaNames[Math.floor(Math.random() * pandaNames.length)];
  }, []);

  return (
    <div className="w-full no-scrollbar h-screen transition-colors duration-300">
      {/* 1. HEADER */}
      <div className="pt-4 lg:pl-8 border-b pb-4 border-gray-100 dark:border-gray-800">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="shrink-0">
            {metadata?.coverImage ? (
              <img
                src={metadata.coverImage}
                alt="Cover"
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-2xl"
              />
            ) : (
              <div className="w-32 h-32 md:w-40 md:h-40 bg-gray-100 dark:bg-[#1a1a1a] rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center text-gray-400 gap-2">
                <ImageIcon size={24} />
                <span className="text-[10px] font-medium uppercase tracking-wider">
                  No Cover
                </span>
              </div>
            )}
          </div>
          <div className="flex-1 space-y-4 pt-2">
            <h1 className="text-3xl  md:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">
              {metadata?.title || "Untitled Story"}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
              {metadata?.description ||
                "Write a short description in the settings..."}
            </p>
            <div className="flex flex-wrap gap-2">
              {metadata?.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 2. CONTENT */}
      <div className="lg:pl-8 py-6 min-h-[400px]">
        <Droppable droppableId="editor-canvas">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="flex flex-col"
            >
              {blocks.map((block, index) => (
                <BlockRenderer
                  key={block.id}
                  index={index}
                  block={block}
                  updateBlock={updateBlock}
                  deleteBlock={deleteBlock}
                  duplicateBlock={duplicateBlock}
                />
              ))}
              {provided.placeholder}
              {blocks.length === 0 && (
                <div className="py-20 flex flex-col items-center justify-center text-gray-300 dark:text-gray-600 border-2 border-dashed border-gray-100 dark:border-gray-800 rounded-xl bg-gray-50/50 dark:bg-[#151515]">
                  <p className="text-sm font-medium">Your story starts here</p>
                  <p className="text-xs mt-1">Drag blocks from the sidebar</p>
                </div>
              )}
            </div>
          )}
        </Droppable>
      </div>

      {/* 3. FOOTER WITH SOCIALS */}
      <div className="px-8 md:px-12 py-8 border-t border-gray-100 dark:border-gray-800 bg-gray-50/30 dark:bg-[#151515]/30 rounded-b-xl">
        <div className="flex flex-wrap md:flex-row justify-between items-center gap-6">
          {/* Author Info */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 p-[2px]">
              <div className="w-full h-full rounded-full bg-white dark:bg-black overflow-hidden">
                <img
                  src={`https://api.dicebear.com/7.x/micah/svg?seed=${panda}`}
                  alt="Author"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-900 dark:text-white">
                {metadata?.author || "Author Name"}
              </span>
              <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                <span className="flex items-center gap-1">
                  <Calendar size={12} />{" "}
                  {metadata?.date
                    ? new Date(metadata.date).toLocaleDateString()
                    : "Draft"}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock size={12} /> {metadata?.readTime || 5} min read
                </span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          {metadata?.socials && (
            <div className="flex items-center gap-4">
              {metadata.socials.github && (
                <a
                  href={metadata.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
              )}
              {metadata.socials.twitter && (
                <a
                  href={metadata.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Twitter size={20} />
                </a>
              )}
              {metadata.socials.linkedin && (
                <a
                  href={metadata.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              )}
              {metadata.socials.website && (
                <a
                  href={metadata.socials.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <LinkIcon size={20} />
                </a>
              )}
              {metadata.socials.instagram && (
                <a
                  href={metadata.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-500 transition-colors"
                >
                  <Instagram size={20} />
                </a>
              )}
              {metadata.socials.youtube && (
                <a
                  href={metadata.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Youtube size={20} />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

EditorCanvas.propTypes = {
  metadata: PropTypes.object,
  blocks: PropTypes.array.isRequired,
  updateBlock: PropTypes.func.isRequired,
  deleteBlock: PropTypes.func.isRequired,
  duplicateBlock: PropTypes.func.isRequired,
};

export default EditorCanvas;
