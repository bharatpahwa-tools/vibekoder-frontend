import React, { useState } from "react";
import {
  Type,
  Heading1,
  Heading2,
  Image,
  List,
  Quote,
  Code,
  Scroll,
  GripVertical,
  AlertTriangle,
  Table as TableIcon,
  Video,
  Workflow,
  Link as LinkIcon,
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  X,
} from "lucide-react";
import PropTypes from "prop-types";

const Sidebar = ({ addBlock, blocks }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToBlock = (id) => {
    const el = document.getElementById(`block-${id}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
    setMobileOpen(false); // Also close sidebar when navigating outline on mobile
  };

  const handleAddBlock = (type) => {
    addBlock(type);
    setMobileOpen(false); // Close the mobile drawer after selection
  };

  const getIconForType = (type) => {
    switch (type) {
      case "heading":
        return <Heading1 size={14} />;
      case "subheading":
        return <Heading2 size={14} />;
      case "paragraph":
        return <Type size={14} />;
      case "image":
        return <Image size={14} />;
      case "list":
        return <List size={14} />;
      case "quote":
        return <Quote size={14} />;
      case "code":
        return <Code size={14} />;
      case "alert":
        return <AlertTriangle size={14} />;
      case "table":
        return <TableIcon size={14} />;
      case "video":
        return <Video size={14} />;
      case "diagram":
        return <Workflow size={14} />;
      case "embed":
        return <LinkIcon size={14} />;
      case "separator":
        return <Minus size={14} />;
      default:
        return <Scroll size={14} />;
    }
  };

  // COMMON CONTENT FOR DESKTOP + MOBILE
  const SidebarContent = () => (
    <>
      {/* Toolbox */}
      <div className={`py-4 ${isCollapsed ? "px-2" : "px-6"}`}>
        {!isCollapsed && (
          <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
            Insert Block
          </h3>
        )}
        <div
          className={`grid gap-3 ${
            isCollapsed ? "grid-cols-1" : "grid-cols-2"
          }`}
        >
          <ToolButton
            icon={<Heading1 size={18} />}
            label="Heading"
            onClick={() => handleAddBlock("heading")}
            collapsed={isCollapsed}
          />
          <ToolButton
            icon={<Heading2 size={18} />}
            label="Subhead"
            onClick={() => handleAddBlock("subheading")}
            collapsed={isCollapsed}
          />
          <ToolButton
            icon={<Type size={18} />}
            label="Text"
            onClick={() => handleAddBlock("paragraph")}
            collapsed={isCollapsed}
          />
          <ToolButton
            icon={<Image size={18} />}
            label="Image"
            onClick={() => handleAddBlock("image")}
            collapsed={isCollapsed}
          />
          <ToolButton
            icon={<List size={18} />}
            label="List"
            onClick={() => handleAddBlock("list")}
            collapsed={isCollapsed}
          />
          <ToolButton
            icon={<Quote size={18} />}
            label="Quote"
            onClick={() => handleAddBlock("quote")}
            collapsed={isCollapsed}
          />
          <ToolButton
            icon={<Code size={18} />}
            label="Code"
            onClick={() => handleAddBlock("code")}
            collapsed={isCollapsed}
          />
          <ToolButton
            icon={<AlertTriangle size={18} />}
            label="Alert"
            onClick={() => handleAddBlock("alert")}
            collapsed={isCollapsed}
          />
          <ToolButton
            icon={<TableIcon size={18} />}
            label="Table"
            onClick={() => handleAddBlock("table")}
            collapsed={isCollapsed}
          />
          <ToolButton
            icon={<Video size={18} />}
            label="Video"
            onClick={() => handleAddBlock("video")}
            collapsed={isCollapsed}
          />
          <ToolButton
            icon={<Workflow size={18} />}
            label="Diagram"
            onClick={() => handleAddBlock("diagram")}
            collapsed={isCollapsed}
          />
          <ToolButton
            icon={<LinkIcon size={18} />}
            label="Embed"
            onClick={() => handleAddBlock("embed")}
            collapsed={isCollapsed}
          />
          <ToolButton
            icon={<Minus size={18} />}
            label="Divider"
            onClick={() => handleAddBlock("separator")}
            collapsed={isCollapsed}
          />
        </div>
      </div>

      {/* Outline */}
      <div
        className={`flex-1 border-t border-gray-100 dark:border-gray-800/50 mt-2 ${
          isCollapsed ? "px-2 py-4" : "px-6 py-4"
        }`}
      >
        {!isCollapsed ? (
          <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4 flex justify-between items-center">
            Outline
            <span className="text-[10px] bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full text-gray-500">
              {blocks.length}
            </span>
          </h3>
        ) : (
          <div className="flex justify-center mb-4">
            <span className="text-[10px] bg-gray-100 dark:bg-gray-800 px-2 py-0.5 rounded-full text-gray-500">
              {blocks.length}
            </span>
          </div>
        )}

        <div className="space-y-1 no-scrollbar max-h-[300px] pr-2 overflow-y-auto">
          {blocks.map((b) => (
            <div
              key={b.id}
              onClick={() => scrollToBlock(b.id)}
              className={`group flex items-center gap-3 p-2 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-[#1f1f22] 
              ${isCollapsed ? "justify-center" : ""}`}
            >
              <span className="text-gray-400 dark:text-gray-600 group-hover:text-blue-500">
                {getIconForType(b.type)}
              </span>

              {!isCollapsed && (
                <>
                  <span className="text-xs text-gray-600 dark:text-gray-400 font-medium truncate flex-1">
                    {typeof b.content === "string" && b.content.trim() !== ""
                      ? b.content.substring(0, 20)
                      : b.content?.text?.substring(0, 20) || (
                          <span className="italic opacity-50 capitalize">
                            {b.type}
                          </span>
                        )}
                  </span>
                  <GripVertical
                    size={12}
                    className="opacity-0 group-hover:opacity-30 text-gray-500"
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div className="">
      {/* DESKTOP SIDEBAR */}
      <aside
        className={`
          hidden md:flex no-scrollbar flex-col lg:max-h-[90vh]
          ${isCollapsed ? "w-20" : "w-80"}
          bg-white dark:bg-[#09090b] border-r border-gray-200 dark:border-gray-800 
          overflow-y-auto transition-all duration-300 ease-in-out relative
        `}
      >
        {/* Toggle */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute right-2 top-4 bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-700 p-1 rounded-full shadow-sm text-gray-500"
        >
          {isCollapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>

        <SidebarContent />
      </aside>

      {/* MOBILE FLOATING BUTTON */}
      <button
        className="fixed z-[9999] bottom-4 right-4 md:hidden p-2 rounded-full shadow-lg bg-black text-white dark:bg-white dark:text-black"
        onClick={() => setMobileOpen(true)}
      >
        <Plus size={22} />
      </button>

      {/* MOBILE BOTTOM DRAWER */}
      {mobileOpen && (
        <div
          className="fixed z-[9999] inset-0 bg-black/40 backdrop-blur-sm "
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="absolute bottom-0 left-0 right-0 bg-white dark:bg-[#121212] rounded-t-2xl p-6 max-h-[70vh] overflow-y-auto animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="flex justify-end mb-3">
              <button
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800"
                onClick={() => setMobileOpen(false)}
              >
                <X size={20} />
              </button>
            </div>

            <SidebarContent />
          </div>
        </div>
      )}

      {/* Animation */}
      <style>{`
        @keyframes slide-up {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up {
          animation: slide-up 0.25s ease-out;
        }
      `}</style>
    </div>
  );
};

const ToolButton = ({ icon, label, onClick, collapsed }) => (
  <button
    onClick={onClick}
    className={`
      flex flex-col items-center justify-center 
      bg-white dark:bg-[#121212] border border-gray-200 dark:border-gray-800 
      rounded-xl p-3 transition-all duration-200 group hover:scale-105
      hover:border-blue-300 dark:hover:border-blue-800
      ${collapsed ? "w-full aspect-square" : ""}
    `}
    title={collapsed ? label : undefined}
  >
    <div
      className={`text-gray-500 dark:text-gray-400 group-hover:text-blue-600 ${
        !collapsed ? "mb-2" : ""
      }`}
    >
      {icon}
    </div>
    {!collapsed && (
      <span className="text-xs font-semibold text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white">
        {label}
      </span>
    )}
  </button>
);

Sidebar.propTypes = {
  addBlock: PropTypes.func,
  blocks: PropTypes.array,
};

ToolButton.propTypes = {
  icon: PropTypes.element,
  label: PropTypes.string,
  onClick: PropTypes.func,
  collapsed: PropTypes.bool,
};

export default Sidebar;
