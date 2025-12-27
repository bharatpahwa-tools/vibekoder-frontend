import React, { useState } from "react";
import PropTypes from "prop-types";
import { Draggable } from "@hello-pangea/dnd";
import { GripVertical, Trash2, Copy, Sparkles } from "lucide-react";
import HeadingBlock from "./blockTypes/HeadingBlock";
import SubheadingBlock from "./blockTypes/SubheadingBlock";
import ParagraphBlock from "./blockTypes/ParagraphBlock";
import ImageBlock from "./blockTypes/ImageBlock";
import ListBlock from "./blockTypes/ListBlock";
import QuoteBlock from "./blockTypes/QuoteBlock";
import CodeBlock from "./blockTypes/CodeBlock";
import AlertBlock from "./blockTypes/AlertBlock";
import TableBlock from "./blockTypes/TableBlock";
import VideoBlock from "./blockTypes/VideoBlock";
import DiagramBlock from "./blockTypes/DiagramBlock";
import EmbedBlock from "./blockTypes/EmbedBlock";
import SeparatorBlock from "./blockTypes/SeparatorBlock";
import { rewriteContent } from "../../services/aiService";

const BlockRenderer = ({
  block,
  index,
  updateBlock,
  deleteBlock,
  duplicateBlock,
}) => {
  const [isRewriting, setIsRewriting] = useState(false);

  // Supported types for AI rewriting
  const canRewrite = [
    "paragraph",
    "heading",
    "subheading",
    "quote",
    "list",
  ].includes(block.type);

  const handleRewrite = async () => {
    if (!block.content || isRewriting) return;

    setIsRewriting(true);
    try {
      const newContent = await rewriteContent(block.content, block.type);
      updateBlock(block.id, newContent);
    } catch (error) {
      console.error("Failed to rewrite", error);
    } finally {
      setIsRewriting(false);
    }
  };

  const renderContent = () => {
    switch (block.type) {
      case "heading":
        return (
          <HeadingBlock
            content={block.content}
            onChange={(val) => updateBlock(block.id, val)}
          />
        );
      case "subheading":
        return (
          <SubheadingBlock
            content={block.content}
            onChange={(val) => updateBlock(block.id, val)}
          />
        );
      case "paragraph":
        return (
          <ParagraphBlock
            content={block.content}
            onChange={(val) => updateBlock(block.id, val)}
          />
        );
      case "image":
        return (
          <ImageBlock
            content={block.content}
            onChange={(val) => updateBlock(block.id, val)}
          />
        );
      case "list":
        return (
          <ListBlock
            content={block.content}
            onChange={(val) => updateBlock(block.id, val)}
          />
        );
      case "quote":
        return (
          <QuoteBlock
            content={block.content}
            onChange={(val) => updateBlock(block.id, val)}
          />
        );
      case "code":
        return (
          <CodeBlock
            content={block.content}
            onChange={(val) => updateBlock(block.id, val)}
          />
        );
      case "alert":
        return (
          <AlertBlock
            content={block.content}
            onChange={(val) => updateBlock(block.id, val)}
          />
        );
      case "table":
        return (
          <TableBlock
            content={block.content}
            onChange={(val) => updateBlock(block.id, val)}
          />
        );
      case "video":
        return (
          <VideoBlock
            content={block.content}
            onChange={(val) => updateBlock(block.id, val)}
          />
        );
      case "diagram":
        return (
          <DiagramBlock
            content={block.content}
            onChange={(val) => updateBlock(block.id, val)}
          />
        );
      case "embed":
        return (
          <EmbedBlock
            content={block.content}
            onChange={(val) => updateBlock(block.id, val)}
          />
        );
      case "separator":
        return (
          <SeparatorBlock
            content={block.content}
            onChange={(val) => updateBlock(block.id, val)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Draggable draggableId={block.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          className={`group relative mb-4  rounded-lg border transition-all duration-300 ${
            snapshot.isDragging
              ? "z-50 bg-white dark:bg-[#1a1a1a] border-transparent"
              : isRewriting
              ? "bg-white dark:bg-[#121212] border-transparent ring-1 ring-purple-500/50"
              : "bg-white dark:bg-[#121212] border-transparent dark:hover:border-gray-800"
          }`}
          id={`block-${block.id}`}
        >
          {/* AI Skeleton Loading Overlay */}
          {isRewriting && (
            <div className="absolute inset-0 z-20 bg-white/95 dark:bg-[#121212]/95 backdrop-blur-[2px] rounded-lg flex flex-col justify-center px-6 py-4 overflow-hidden">
              {/* Status Badge */}
              <div className="absolute top-2 right-2 flex items-center gap-1.5 px-2 py-1 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-md border border-purple-100 dark:border-purple-800/50">
                <Sparkles
                  size={12}
                  className="text-purple-600 dark:text-purple-400 animate-pulse"
                />
                <span className="text-[10px] font-bold text-purple-700 dark:text-purple-300">
                  Generating...
                </span>
              </div>

              {/* Skeleton Bars with Shimmer */}
              <div className="space-y-3 w-full opacity-100">
                <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-3/4 relative overflow-hidden">
                  <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent" />
                </div>
                <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-full relative overflow-hidden">
                  <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent delay-75" />
                </div>
                <div className="h-4 bg-gray-100 dark:bg-gray-800 rounded w-5/6 relative overflow-hidden">
                  <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent delay-150" />
                </div>
              </div>
            </div>
          )}

          {/* Drag Handle & Toolbar - Visible on Hover */}
          {!isRewriting && (
            <div className="absolute lg:-left-10 -top-10 lg:top-2 flex flex-row  lg:flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
              <div
                {...provided.dragHandleProps}
                className="p-2 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 cursor-grab active:cursor-grabbing text-gray-500 dark:text-gray-400 shadow-sm"
                title="Drag to move"
              >
                <GripVertical size={16} />
              </div>

              {/* AI Rewrite Button */}
              {canRewrite && (
                <button
                  onClick={handleRewrite}
                  className="p-2 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 shadow-sm transition-colors group/ai"
                  title="Rewrite with AI"
                >
                  <Sparkles
                    size={16}
                    className="group-hover/ai:scale-110 transition-transform"
                  />
                </button>
              )}

              <button
                onClick={() => duplicateBlock(block.id)}
                className="p-2 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 shadow-sm"
                title="Duplicate"
              >
                <Copy size={16} />
              </button>
              <button
                onClick={() => deleteBlock(block.id)}
                className="p-2 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 shadow-sm"
                title="Delete"
              >
                <Trash2 size={16} />
              </button>
            </div>
          )}

          {/* Block Content */}
          <div className={`w-full ${isRewriting ? "opacity-0" : ""}`}>
            {renderContent()}
          </div>
        </div>
      )}
    </Draggable>
  );
};

BlockRenderer.propTypes = {
  block: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  updateBlock: PropTypes.func.isRequired,
  deleteBlock: PropTypes.func.isRequired,
  duplicateBlock: PropTypes.func.isRequired,
};

export default BlockRenderer;
