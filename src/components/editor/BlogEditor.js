import React from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import Sidebar from "./Sidebar";
import EditorCanvas from "./EditorCanvas";
import { useEditorState } from "../../hooks/useEditorState";
import { generateBlogStructure } from "../../services/aiService";
import { CheckCircle2, Loader2 } from "lucide-react";

const BlogEditor = () => {
  const {
    blocks,
    addBlock,
    updateBlock,
    deleteBlock,
    duplicateBlock,
    reorderBlocks,
    setBlocks,
    isSaving,
  } = useEditorState();

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    reorderBlocks(result.source.index, result.destination.index);
  };

  const handleAI = async (topic) => {
    try {
      const generatedBlocks = await generateBlogStructure(topic);
      // Append generated blocks to existing ones, or replace? Let's append.
      setBlocks((prev) => [...prev, ...generatedBlocks]);
    } catch (err) {
      alert("AI Generation failed. Check API Key.");
    }
  };

  return (
    <div className="flex bg-gray-50 min-h-screen font-sans">
      <div className="flex">
        {/* Saving Status Indicator */}
        <div className="flex items-center gap-2 text-sm text-gray-400 bg-white/80 backdrop-blur px-3 py-1 rounded-full shadow-sm border">
          {isSaving ? (
            <>
              <Loader2 size={14} className="animate-spin" /> Saving...
            </>
          ) : (
            <>
              <CheckCircle2 size={14} className="text-green-500" /> Saved
              locally
            </>
          )}
        </div>
        <Sidebar addBlock={addBlock} generateAI={handleAI} blocks={blocks} />

        <DragDropContext onDragEnd={handleOnDragEnd}>
          <EditorCanvas
            blocks={blocks}
            updateBlock={updateBlock}
            deleteBlock={deleteBlock}
            duplicateBlock={duplicateBlock}
          />
        </DragDropContext>
      </div>
    </div>
  );
};

export default BlogEditor;
