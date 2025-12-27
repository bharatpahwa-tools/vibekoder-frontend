import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const STORAGE_KEY = "blog_editor_content";
const METADATA_KEY = "blog_editor_metadata";

// UPDATED DEFAULTS
const DEFAULT_METADATA = {
  title: "Untitled Story",
  description: "A comprehensive guide about technology...",
  author: "Bharat Pahwa",
  tags: ["Tech", "Tutorial"],
  date: new Date().toISOString().split("T")[0],
  readTime: "5",
  coverImage: "",
  socials: {
    github: "",
    twitter: "",
    linkedin: "",
    website: "",
    instagram: "",
    youtube: "",
  },
};

export function useEditorState() {
  const [blocks, setBlocks] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Failed to load blocks", e);
      return [];
    }
  });

  const [metadata, setMetadata] = useState(() => {
    try {
      const saved = localStorage.getItem(METADATA_KEY);
      return saved
        ? { ...DEFAULT_METADATA, ...JSON.parse(saved) }
        : DEFAULT_METADATA;
    } catch (e) {
      return DEFAULT_METADATA;
    }
  });

  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setIsSaving(true);
    const handler = setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(blocks));
      localStorage.setItem(METADATA_KEY, JSON.stringify(metadata));
      setIsSaving(false);
    }, 1000);

    return () => clearTimeout(handler);
  }, [blocks, metadata]);

  // Auto-Set Cover Image logic
  useEffect(() => {
    if (!metadata.coverImage) {
      const firstImageBlock = blocks.find(
        (b) => b.type === "image" && b.content && b.content.startsWith("http")
      );
      if (firstImageBlock) {
        setMetadata((prev) => ({
          ...prev,
          coverImage: firstImageBlock.content,
        }));
      }
    }
  }, [blocks, metadata.coverImage]);

  const addBlock = (type, content = "") => {
    const newBlock = {
      id: uuidv4(),
      type,
      content: type === "list" ? ["List item 1"] : content,
    };
    setBlocks((prev) => [...prev, newBlock]);
  };

  const updateBlock = (id, newContent) => {
    setBlocks((prev) =>
      prev.map((b) => (b.id === id ? { ...b, content: newContent } : b))
    );
  };

  const deleteBlock = (id) => {
    setBlocks((prev) => prev.filter((b) => b.id !== id));
  };

  const duplicateBlock = (id) => {
    const blockToCopy = blocks.find((b) => b.id === id);
    if (blockToCopy) {
      const newBlock = { ...blockToCopy, id: uuidv4() };
      const index = blocks.findIndex((b) => b.id === id);
      const newBlocks = [...blocks];
      newBlocks.splice(index + 1, 0, newBlock);
      setBlocks(newBlocks);
    }
  };

  const reorderBlocks = (startIndex, endIndex) => {
    const result = Array.from(blocks);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    setBlocks(result);
  };

  return {
    blocks,
    metadata,
    setMetadata,
    addBlock,
    updateBlock,
    deleteBlock,
    duplicateBlock,
    reorderBlocks,
    setBlocks,
    isSaving,
  };
}
