import React, { useState, useEffect, useRef } from "react";
import {
  Copy,
  Download,
  X,
  Eye,
  Code,
  FileJson,
  Check,
  Image as ImageIcon,
  FileText,
  Info,
  CheckCircle2,
  Lightbulb,
  XCircle,
  AlertTriangle,
  Bell,
  Star,
  Sparkles,
  CloudRain,
  Leaf,
  Shield,
  Flame,
  Heart,
  Rocket,
  Linkedin,
  Twitter,
  Github,
  Instagram,
  Youtube,
} from "lucide-react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import mermaid from "mermaid";

// Initialize mermaid for the preview
mermaid.initialize({
  startOnLoad: false,
  theme: "default",
});

// Helper to handle newlines in React Render (Live Preview)
const formatText = (text) => {
  if (!text) return null;
  return text.split("\n").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      {index !== text.split("\n").length - 1 && <br />}
    </React.Fragment>
  ));
};

// Extract video ID helper
const getYoutubeId = (url) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

// --- ALERT STYLES FOR PREVIEW ---
const PREVIEW_ALERT_STYLES = {
  blue: {
    classes:
      "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200",
    icon: Info,
  },
  green: {
    classes:
      "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200",
    icon: CheckCircle2,
  },
  yellow: {
    classes:
      "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-200",
    icon: Lightbulb,
  },
  red: {
    classes:
      "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200",
    icon: XCircle,
  },
  purple: {
    classes:
      "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800 text-purple-800 dark:text-purple-200",
    icon: AlertTriangle,
  },
  gray: {
    classes:
      "bg-gray-50 dark:bg-gray-800/30 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300",
    icon: Bell,
  },
  indigo: {
    classes:
      "bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800 text-indigo-800 dark:text-indigo-200",
    icon: Star,
  },
  violet: {
    classes:
      "bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-800 text-violet-800 dark:text-violet-200",
    icon: Sparkles,
  },
  cyan: {
    classes:
      "bg-cyan-50 dark:bg-cyan-900/20 border-cyan-200 dark:border-cyan-800 text-cyan-800 dark:text-cyan-200",
    icon: CloudRain,
  },
  teal: {
    classes:
      "bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-200",
    icon: Leaf,
  },
  emerald: {
    classes:
      "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200",
    icon: Shield,
  },
  orange: {
    classes:
      "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800 text-orange-800 dark:text-orange-200",
    icon: Flame,
  },
  rose: {
    classes:
      "bg-rose-50 dark:bg-rose-900/20 border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-200",
    icon: Heart,
  },
  sky: {
    classes:
      "bg-sky-50 dark:bg-sky-900/20 border-sky-200 dark:border-sky-800 text-sky-800 dark:text-sky-200",
    icon: Rocket,
  },
  amber: {
    classes:
      "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200",
    icon: Lightbulb,
  },
  lime: {
    classes:
      "bg-lime-50 dark:bg-lime-900/20 border-lime-200 dark:border-lime-800 text-lime-800 dark:text-lime-200",
    icon: CheckCircle2,
  },
  slate: {
    classes:
      "bg-slate-50 dark:bg-slate-900/20 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200",
    icon: Info,
  },
  zinc: {
    classes:
      "bg-zinc-50 dark:bg-zinc-900/20 border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200",
    icon: Bell,
  },
};

// --- MARKDOWN GENERATOR ---
const generateMarkdown = (metadata, blocks) => {
  const frontmatter = `---
title: "${metadata.title}"
description: "${metadata.description}"
date: "${metadata.date}"
tags: [${metadata.tags.map((t) => `"${t}"`).join(", ")}]
coverImage: "${metadata.coverImage}"
readTime: "${metadata.readTime} min"
---

# ${metadata.title}

![Cover Image](${metadata.coverImage})

`;

  const content = blocks
    .map((block) => {
      switch (block.type) {
        case "heading":
          return `## ${block.content}`;
        case "subheading":
          return `### ${block.content}`;
        case "paragraph":
          return `${block.content}`;
        case "image":
          return `![Image](${block.content})`;
        case "list":
          return (
            Array.isArray(block.content) ? block.content : [block.content]
          )
            .map((item) => `- ${item}`)
            .join("\n");
        case "quote":
          const qText =
            typeof block.content === "object"
              ? block.content.text
              : block.content;
          return `> ${qText}`;
        case "alert":
          const aData =
            typeof block.content === "object"
              ? block.content
              : { type: "blue", text: block.content };
          let type = "NOTE";
          if (aData.type === "red") type = "CAUTION";
          if (aData.type === "yellow") type = "WARNING";
          if (aData.type === "green") type = "TIP";
          return `> [!${type}]\n> ${aData.text}`;
        case "code":
          const codeContent =
            typeof block.content === "object"
              ? block.content.code
              : block.content;
          const codeLang =
            typeof block.content === "object"
              ? block.content.language
              : "javascript";
          return "```" + codeLang + "\n" + codeContent + "\n```";
        case "table":
          const t = block.content;
          const headers = `| ${t.headers.join(" | ")} |`;
          const separator = `| ${t.headers.map(() => "---").join(" | ")} |`;
          const rows = t.rows.map((row) => `| ${row.join(" | ")} |`).join("\n");
          return `${headers}\n${separator}\n${rows}`;
        case "video":
          const vidId = getYoutubeId(block.content);
          if (!vidId) return `[${block.content}](${block.content})`;
          return `[![Video](https://img.youtube.com/vi/${vidId}/0.jpg)](https://www.youtube.com/watch?v=${vidId})`;
        case "diagram":
          return "```mermaid\n" + block.content + "\n```";

        case "embed":
          const eData =
            typeof block.content === "object"
              ? block.content
              : { url: block.content };
          if (!eData.meta) return `[${eData.url}](${eData.url})`;
          return `[![${eData.meta.title}](${eData.meta.image})](${eData.url})\n\n**[${eData.meta.title}](${eData.url})**\n${eData.meta.description}`;

        case "separator":
          const style = block.content || "solid";
          if (style === "whitespace") return `<br/><br/><br/>`;
          if (style === "dots") return `\n<center>• • •</center>\n`;
          return `\n---\n`;

        default:
          return "";
      }
    })
    .join("\n\n");

  return frontmatter + content;
};

const PublishModal = ({
  isOpen,
  onClose,
  metadata,
  blocks,
  generateCode,
  generateJson,
}) => {
  const [activeTab, setActiveTab] = useState("export");
  const [copied, setCopied] = useState(false);
  const previewRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setActiveTab("export");
    }
  }, [isOpen]);

  useEffect(() => {
    if (activeTab === "code" || activeTab === "preview") {
      setTimeout(() => {
        Prism.highlightAll();
        if (activeTab === "preview" && previewRef.current) {
          try {
            mermaid.initialize({ startOnLoad: false, theme: "default" });
            const nodes = previewRef.current.querySelectorAll(".mermaid");
            if (nodes.length > 0) {
              mermaid.run({ nodes });
            }
          } catch (e) {
            console.error("Mermaid error", e);
          }
        }
      }, 100);
    }
  }, [activeTab, blocks]);

  if (!isOpen) return null;

  const generatedCode = generateCode(metadata, blocks);
  const generatedMarkdown = generateMarkdown(metadata, blocks);
  const jsonSnippet = generateJson(
    metadata,
    blocks.length + Math.floor(Math.random() * 1000)
  );

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = (content, ext, type) => {
    const blob = new Blob([content], { type: type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${metadata.title.replace(/[^a-zA-Z]/g, "")}.${ext}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ---- PREVIEW RENDERER HELPER ----
  const RenderPreview = () => (
    <article className="prose dark:prose-invert max-w-5xl" ref={previewRef}>
      {/* HEADER SECTION */}
      <div className="mb-12 border-b border-gray-200 dark:border-gray-800 pb-10">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="shrink-0">
            {metadata.coverImage ? (
              <img
                src={metadata.coverImage}
                alt="Cover"
                className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-2xl border border-gray-200 dark:border-gray-700 m-0"
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
            <h1 className="text-3xl bricolage md:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight m-0">
              {metadata.title}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium m-0">
              {metadata.description}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3 mb-4 text-sm text-gray-400 mt-4">
          <span>{metadata.date}</span>
          <span>•</span>
          <span>{metadata.readTime} min read</span>
          <span>•</span>
          <span>{metadata.author}</span>
          <span>•</span>

          {metadata.socials.linkedin && (
            <span>
              <a
                href={metadata.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={16} />
              </a>
            </span>
          )}
          {metadata.socials.twitter && (
            <span>
              <a
                href={metadata.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={16} />
              </a>
            </span>
          )}
          {metadata.socials.github && (
            <span>
              <a
                href={metadata.socials.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} />
              </a>
            </span>
          )}
          {metadata.socials.instagram && (
            <span>
              <a
                href={metadata.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={16} />
              </a>
            </span>
          )}
          {metadata.socials.youtube && (
            <span>
              <a
                href={metadata.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube size={16} />
              </a>
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-2 not-prose">
          {metadata.tags.map((t, i) => (
            <span
              key={i}
              className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded-md"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {blocks.map((block) => {
          switch (block.type) {
            case "heading":
              return (
                <h2
                  key={block.id}
                  className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white"
                >
                  {block.content}
                </h2>
              );
            case "subheading":
              return (
                <h3
                  key={block.id}
                  className="text-xl font-semibold mt-6 mb-3 text-gray-800 dark:text-gray-200"
                >
                  {block.content}
                </h3>
              );
            case "paragraph":
              return (
                <p
                  key={block.id}
                  className="text-gray-600 dark:text-gray-300 leading-relaxed text-md"
                >
                  {formatText(block.content)}
                </p>
              );
            case "image":
              return (
                <img
                  key={block.id}
                  src={block.content}
                  alt="Blog"
                  className="w-full rounded-3xl my-6"
                />
              );
            case "list":
              return (
                <ul
                  key={block.id}
                  className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300"
                >
                  {(Array.isArray(block.content)
                    ? block.content
                    : [block.content]
                  ).map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              );
            case "quote":
              const qData =
                typeof block.content === "object"
                  ? block.content
                  : { text: block.content, color: "default" };
              const qText = qData.text;
              const qColor = qData.color || "default";

              let qClasses =
                "bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500 rounded-r-3xl";
              if (qColor === "default")
                qClasses =
                  "bg-transparent border-l-4 border-gray-900 dark:border-gray-100";
              if (qColor === "blue")
                qClasses =
                  "bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500 rounded-r-3xl";
              if (qColor === "green")
                qClasses =
                  "bg-green-50 dark:bg-green-900/10 border-l-4 border-green-500 rounded-r-3xl";
              if (qColor === "purple")
                qClasses =
                  "bg-purple-50 dark:bg-purple-900/10 border-l-4 border-purple-500 rounded-r-3xl";

              return (
                <div
                  key={block.id}
                  className={`${qClasses} p-6 my-6 transition-colors duration-300`}
                >
                  <p className="italic text-gray-700 dark:text-gray-300">
                    "{formatText(qText)}"
                  </p>
                </div>
              );
            case "alert":
              const aData =
                typeof block.content === "object"
                  ? block.content
                  : { type: "blue", text: block.content };

              const conf =
                PREVIEW_ALERT_STYLES[aData.type] || PREVIEW_ALERT_STYLES.blue;
              const AlertIcon = conf.icon;

              return (
                <div
                  key={block.id}
                  className={`p-4 my-6 rounded-xl border flex gap-3 ${conf.classes}`}
                >
                  <div className="shrink-0 mt-0.5">
                    <AlertIcon size={20} />
                  </div>
                  <div className="text-lg">{formatText(aData.text)}</div>
                </div>
              );
            case "code":
              const cContent =
                typeof block.content === "object"
                  ? block.content.code
                  : block.content;
              const cLang =
                typeof block.content === "object"
                  ? block.content.language
                  : "javascript";
              return (
                <div
                  key={block.id}
                  className="mockup-code bg-[#1a1a1a] text-gray-100 rounded-3xl overflow-hidden my-6 border border-gray-800"
                >
                  <pre className="p-4 overflow-x-auto">
                    <code className={`language-${cLang}`}>{cContent}</code>
                  </pre>
                </div>
              );
            case "table":
              return (
                <div
                  key={block.id}
                  className="my-8 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800"
                >
                  <table className="w-full text-left border-collapse bg-white dark:bg-[#121212]">
                    <thead className="bg-gray-50 dark:bg-[#1a1a1a]">
                      <tr>
                        {block.content.headers.map((h, i) => (
                          <th key={i} className="p-3 font-bold">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.content.rows.map((row, i) => (
                        <tr key={i}>
                          {row.map((cell, j) => (
                            <td
                              key={j}
                              className="p-3 border-t border-gray-100 dark:border-gray-800"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            case "video":
              const vId = getYoutubeId(block.content);
              if (!vId) return null;
              return (
                <div className="my-8 relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800">
                  <iframe
                    src={`https://www.youtube.com/embed/${vId}`}
                    title="YouTube video player"
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              );
            case "diagram":
              return (
                <div
                  key={block.id}
                  className="my-8 flex justify-center bg-gray-50 dark:bg-[#1a1a1a] p-4 rounded-xl border border-gray-200 dark:border-gray-800"
                >
                  <div className="mermaid text-center">{block.content}</div>
                </div>
              );
            case "embed":
              const embedData =
                typeof block.content === "object"
                  ? block.content
                  : { url: block.content };
              if (!embedData.meta) return null;

              return (
                <div key={block.id} className="my-8 not-prose">
                  <a
                    href={embedData.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-colors bg-white dark:bg-[#121212] no-underline"
                  >
                    {embedData.meta.image && (
                      <div className="h-48 w-full overflow-hidden border-b border-gray-100 dark:border-gray-800">
                        <img
                          src={embedData.meta.image}
                          alt={embedData.meta.title}
                          className="w-full h-full object-cover m-0"
                        />
                      </div>
                    )}
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        {embedData.meta.logo ? (
                          <img
                            src={embedData.meta.logo}
                            className="w-4 h-4 rounded-sm m-0"
                            alt=""
                          />
                        ) : (
                          <span>🔗</span>
                        )}
                        <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {embedData.meta.publisher || "Website"}
                        </span>
                      </div>
                      <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1 text-lg m-0 leading-tight">
                        {embedData.meta.title}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 m-0 mt-1">
                        {embedData.meta.description}
                      </p>
                    </div>
                  </a>
                </div>
              );
            case "separator":
              const style = block.content || "solid";
              if (style === "whitespace")
                return <div key={block.id} className="h-24 w-full"></div>;
              if (style === "dots")
                return (
                  <div
                    key={block.id}
                    className="text-center text-2xl tracking-widest text-gray-300 dark:text-gray-600 font-serif my-8"
                  >
                    • • •
                  </div>
                );
              if (style === "dotted")
                return (
                  <hr
                    key={block.id}
                    className="border-t-4 border-dotted border-gray-300 dark:border-gray-700 my-8"
                  />
                );
              if (style === "dashed")
                return (
                  <hr
                    key={block.id}
                    className="border-t-2 border-dashed border-gray-300 dark:border-gray-700 my-8"
                  />
                );
              return (
                <hr
                  key={block.id}
                  className="border-t border-gray-300 dark:border-gray-700 my-8"
                />
              );

            default:
              return null;
          }
        })}
      </div>
    </article>
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-xs  p-4 animate-in fade-in duration-200">
      <div className="bg-white dark:bg-[#0f0f0f] w-full max-w-4xl rounded-3xl border border-gray-200 dark:border-gray-800 flex flex-col h-[85vh]">
        {/* Header with Tabs */}
        <div className="shrink-0 p-4 rounded-3xl border-b border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center bg-gray-50/50 dark:bg-[#121212] gap-4">
          <div className="flex items-center justify-between w-full lg:w-fit gap-2">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
              🚀 Publish Article
            </h2>
            <button
              onClick={onClose}
              className="p-2 lg:hidden flex hover:dark:hover:bg-gray-800 rounded-full transition text-gray-500"
            >
              <X size={20} />
            </button>
          </div>

          <div className="flex lg:flex-row flex-wrap gap-4  justify-center items-center p-1 dark:bg-[#1a1a1a] rounded-lg">
            <button
              onClick={() => setActiveTab("preview")}
              className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all ${
                activeTab === "preview"
                  ? "bg-white dark:bg-[#2a2a2a] text-black dark:text-white "
                  : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              <div className="flex items-center gap-2">
                <Eye size={14} /> Preview
              </div>
            </button>
            <button
              onClick={() => setActiveTab("code")}
              className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all ${
                activeTab === "code"
                  ? "bg-white dark:bg-[#2a2a2a] text-black dark:text-white "
                  : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              <div className="flex items-center gap-2">
                <Code size={14} /> Code
              </div>
            </button>
            <button
              onClick={() => setActiveTab("markdown")}
              className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all ${
                activeTab === "markdown"
                  ? "bg-white dark:bg-[#2a2a2a] text-black dark:text-white "
                  : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              <div className="flex items-center gap-2">
                <FileText size={14} /> Markdown
              </div>
            </button>
            <button
              onClick={() => setActiveTab("export")}
              className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all ${
                activeTab === "export"
                  ? "bg-white dark:bg-[#2a2a2a] text-black dark:text-white "
                  : "text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              <div className="flex items-center gap-2">
                <FileJson size={14} /> Export
              </div>
            </button>
          </div>
          <button
            onClick={onClose}
            className="p-2 lg:flex hidden hover:dark:hover:bg-gray-800 rounded-full transition text-gray-500"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 rounded-3xl  overflow-hidden relative bg-white dark:bg-[#0f0f0f]">
          {/* 1. PREVIEW TAB */}
          {activeTab === "preview" && (
            <div className="h-full overflow-y-auto p-8 custom-scrollbar bg-white dark:bg-[#0f0f0f]">
              <div className="max-w-4xl mx-auto">
                <RenderPreview />
              </div>
            </div>
          )}

          {/* 2. CODE TAB */}
          {activeTab === "code" && (
            <div className="h-full overflow-hidden flex flex-col">
              <div className="flex justify-between items-center px-4 py-2 bg-[#1e1e1e] border-b border-gray-700">
                <span className="text-xs text-gray-400 font-mono">
                  Component Source
                </span>
                <button
                  onClick={() => handleCopy(generatedCode)}
                  className="flex items-center gap-2 px-3 py-1 bg-white/10 hover:bg-white/20 text-white text-xs rounded transition"
                >
                  {copied ? <Check size={12} /> : <Copy size={12} />}{" "}
                  {copied ? "Copied" : "Copy Code"}
                </button>
              </div>
              <div className="flex-1 overflow-auto bg-[#1e1e1e] p-4 custom-scrollbar">
                <pre className="text-sm font-mono text-gray-300 leading-relaxed">
                  <code className="language-javascript">{generatedCode}</code>
                </pre>
              </div>
            </div>
          )}

          {/* 3. MARKDOWN TAB */}
          {activeTab === "markdown" && (
            <div className="h-full overflow-hidden flex flex-col">
              <div className="flex justify-between items-center px-4 py-2 bg-[#1e1e1e] border-b border-gray-700">
                <span className="text-xs text-gray-400 font-mono">
                  Markdown Source
                </span>
                <button
                  onClick={() => handleCopy(generatedMarkdown)}
                  className="flex items-center gap-2 px-3 py-1 bg-white/10 hover:bg-white/20 text-white text-xs rounded transition"
                >
                  {copied ? <Check size={12} /> : <Copy size={12} />}{" "}
                  {copied ? "Copied" : "Copy Markdown"}
                </button>
              </div>
              <div className="flex-1 overflow-auto bg-[#1e1e1e] p-4 custom-scrollbar">
                <pre className="text-sm font-mono text-gray-300 leading-relaxed whitespace-pre-wrap">
                  <code className="language-markdown">{generatedMarkdown}</code>
                </pre>
              </div>
            </div>
          )}

          {/* 4. EXPORT TAB */}
          {activeTab === "export" && (
            <div className="h-full overflow-y-auto p-6 space-y-8 flex flex-col items-center justify-center bg-gray-50/30 dark:bg-[#0f0f0f]">
              <div className="flex flex-col overflow-y-scroll no-scrollbar  gap-6 w-full max-w-5xl">
                <div className="p-6 bg-white dark:bg-[#151515] rounded-3xl border border-gray-200 dark:border-gray-800 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                    <Download size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    React Component
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 min-h-[40px]">
                    Download the fully styled React component (.js).
                  </p>
                  <button
                    onClick={() =>
                      handleDownload(generatedCode, "js", "text/javascript")
                    }
                    className="w-full py-2.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black font-medium hover:opacity-90 transition flex items-center justify-center gap-2"
                  >
                    <Download size={16} /> Download .js
                  </button>
                </div>
                <div className="p-6 bg-white dark:bg-[#151515] rounded-3xl border border-gray-200 dark:border-gray-800 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mb-4 group-hover:scale-110 transition-transform">
                    <FileText size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Markdown File
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 min-h-[40px]">
                    Download the content as a Markdown file (.md) with
                    frontmatter.
                  </p>
                  <button
                    onClick={() =>
                      handleDownload(generatedMarkdown, "md", "text/markdown")
                    }
                    className="w-full py-2.5 rounded-full bg-gray-900 dark:bg-white text-white dark:text-black font-medium hover:opacity-90 transition flex items-center justify-center gap-2"
                  >
                    <Download size={16} /> Download .md
                  </button>
                </div>
                <div className="p-6 bg-white dark:bg-[#151515] rounded-3xl border border-gray-200 dark:border-gray-800 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                    <FileJson size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    Metadata JSON
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 min-h-[40px]">
                    Snippet for your `blogs.json` list.
                  </p>
                  <div className="relative group/code">
                    <pre className="bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-lg p-3 text-xs font-mono text-gray-600 dark:text-gray-300 overflow-x-auto h-70 mb-3 custom-scrollbar">
                      {jsonSnippet}
                    </pre>
                    <button
                      onClick={() => handleCopy(jsonSnippet)}
                      className="w-full py-2.5 bg-white dark:bg-[#1e1e1e] border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-medium rounded-full hover:bg-gray-50 dark:hover:bg-[#252525] transition flex items-center justify-center gap-2"
                    >
                      {copied ? <Check size={14} /> : <Copy size={14} />}{" "}
                      {copied ? "Copied!" : "Copy JSON"}
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-center max-w-lg">
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  Ready to go live? Commit the downloaded files to your Git
                  repository.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PublishModal;
