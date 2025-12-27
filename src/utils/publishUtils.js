// src/utils/publishUtils.js

const generateSlug = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "") // FIXED
    .replace(/--+/g, "-"); // FIXED
};

// Helper to preserve line breaks in React
const formatText = (text) => {
  if (!text) return "";
  // Replaces newline characters with the JSX <br /> tag
  return text.replace(/\n/g, "<br />");
};

// Extract video ID helper
const getYoutubeId = (url) => {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

// Alert Configuration Map (Matches Editor)
const ALERT_STYLES = {
  blue: {
    classes:
      "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200",
    icon: "Info",
  },
  green: {
    classes:
      "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200",
    icon: "CheckCircle2",
  },
  yellow: {
    classes:
      "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-200",
    icon: "Lightbulb",
  },
  red: {
    classes:
      "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200",
    icon: "XCircle",
  },
  purple: {
    classes:
      "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800 text-purple-800 dark:text-purple-200",
    icon: "AlertTriangle",
  },
  gray: {
    classes:
      "bg-gray-50 dark:bg-gray-800/30 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300",
    icon: "Bell",
  },
  indigo: {
    classes:
      "bg-indigo-50 dark:bg-indigo-900/20 border-indigo-200 dark:border-indigo-800 text-indigo-800 dark:text-indigo-200",
    icon: "Star",
  },
  violet: {
    classes:
      "bg-violet-50 dark:bg-violet-900/20 border-violet-200 dark:border-violet-800 text-violet-800 dark:text-violet-200",
    icon: "Sparkles",
  },
  cyan: {
    classes:
      "bg-cyan-50 dark:bg-cyan-900/20 border-cyan-200 dark:border-cyan-800 text-cyan-800 dark:text-cyan-200",
    icon: "CloudRain",
  },
  teal: {
    classes:
      "bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800 text-teal-800 dark:text-teal-200",
    icon: "Leaf",
  },
  emerald: {
    classes:
      "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200",
    icon: "Shield",
  },
  orange: {
    classes:
      "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800 text-orange-800 dark:text-orange-200",
    icon: "Flame",
  },
  rose: {
    classes:
      "bg-rose-50 dark:bg-rose-900/20 border-rose-200 dark:border-rose-800 text-rose-800 dark:text-rose-200",
    icon: "Heart",
  },
  sky: {
    classes:
      "bg-sky-50 dark:bg-sky-900/20 border-sky-200 dark:border-sky-800 text-sky-800 dark:text-sky-200",
    icon: "Rocket",
  },
  amber: {
    classes:
      "bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200",
    icon: "Lightbulb",
  },
  lime: {
    classes:
      "bg-lime-50 dark:bg-lime-900/20 border-lime-200 dark:border-lime-800 text-lime-800 dark:text-lime-200",
    icon: "CheckCircle2",
  },
  slate: {
    classes:
      "bg-slate-50 dark:bg-slate-900/20 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200",
    icon: "Info",
  },
  zinc: {
    classes:
      "bg-zinc-50 dark:bg-zinc-900/20 border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200",
    icon: "Bell",
  },
};

export const generateBlogComponent = (metadata, blocks) => {
  const componentName =
    metadata.title.replace(/[^a-zA-Z]/g, "") || "BlogArticle";

  // Check imports needed
  const hasDiagram = blocks.some((b) => b.type === "diagram");
  const neededIcons = new Set();

  const socialLinks = `
  ${
    metadata.socials.linkedin
      ? `<a href="${metadata.socials.linkedin}" target="_blank" rel="noopener noreferrer"><Linkedin size={16} /></a>`
      : ""
  }
  ${
    metadata.socials.twitter
      ? `<a href="${metadata.socials.twitter}" target="_blank" rel="noopener noreferrer"><Twitter size={16} /></a>`
      : ""
  }
  ${
    metadata.socials.github
      ? `<a href="${metadata.socials.github}" target="_blank" rel="noopener noreferrer"><Github size={16} /></a>`
      : ""
  }
  ${
    metadata.socials.instagram
      ? `<a href="${metadata.socials.instagram}" target="_blank" rel="noopener noreferrer"><Instagram size={16} /></a>`
      : ""
  }
  ${
    metadata.socials.youtube
      ? `<a href="${metadata.socials.youtube}" target="_blank" rel="noopener noreferrer"><Youtube size={16} /></a>`
      : ""
  }
`;

  // Scan for icons used in alert blocks
  blocks.forEach((b) => {
    if (b.type === "alert") {
      const type =
        (typeof b.content === "object" ? b.content.type : "blue") || "blue";
      const conf = ALERT_STYLES[type] || ALERT_STYLES.blue;
      neededIcons.add(conf.icon);
    }
  });

  const iconImports =
    neededIcons.size > 0
      ? `import { ${Array.from(neededIcons).join(", ")} } from "lucide-react";`
      : "";

  // Convert blocks to JSX
  const contentJSX = blocks
    .map((block) => {
      switch (block.type) {
        case "heading": {
          const slug = generateSlug(block.content);
          return `<h2 id="${slug}" className="font-semibold text-2xl mb-4 mt-4 text-gray-900 dark:text-white transition-colors duration-300">${block.content}</h2>`;
        }

        case "subheading": {
          const slug = generateSlug(block.content);
          return `<h3 id="${slug}" className="text-xl font-medium mb-3 mt-6 text-gray-800 dark:text-gray-100 transition-colors duration-300">${block.content}</h3>`;
        }

        case "paragraph":
          return `<p className="mb-5 text-md leading-relaxed text-gray-600 dark:text-gray-300 transition-colors duration-300">${formatText(
            block.content
          )}</p>`;

        case "image":
          return `
      <div className="my-8">
        <img loading="lazy" src="${block.content}" alt="Blog content" className="w-full h-auto rounded-2xl border border-gray-100 dark:border-gray-800 transition-all duration-300 shadow-sm" />
      </div>`;

        case "list":
          const items = Array.isArray(block.content)
            ? block.content
                .map((item) => `  <li className="pl-2">${item}</li>`)
                .join("\n        ")
            : `<li>${block.content}</li>`;
          return `<ul className="list-disc list-outside pl-6 space-y-2 mb-6 text-gray-700 dark:text-gray-300 marker:text-gray-400 transition-colors duration-300">\n        ${items}\n      </ul>`;

        case "quote":
          const quoteData =
            typeof block.content === "object"
              ? block.content
              : { text: block.content, color: "default" };
          const quoteText = quoteData.text;

          let quoteClasses =
            "bg-transparent border-l-4 border-gray-900 dark:border-gray-100";
          if (quoteData.color === "blue")
            quoteClasses =
              "bg-blue-50 dark:bg-blue-900/10 border-l-4 border-blue-500 rounded-r-xl";
          if (quoteData.color === "green")
            quoteClasses =
              "bg-green-50 dark:bg-green-900/10 border-l-4 border-green-500 rounded-r-xl";
          if (quoteData.color === "purple")
            quoteClasses =
              "bg-purple-50 dark:bg-purple-900/10 border-l-4 border-purple-500 rounded-r-xl";

          return `
      <div className="${quoteClasses} p-6 my-8 transition-colors duration-300">
        <p className="italic text-md text-gray-700 dark:text-gray-300">"${formatText(
          quoteText
        )}"</p>
      </div>`;

        case "alert":
          const alertData =
            typeof block.content === "object"
              ? block.content
              : { type: "blue", text: block.content };

          const alertConf = ALERT_STYLES[alertData.type] || ALERT_STYLES.blue;

          return `
      <div className="p-4 my-6 rounded-xl border flex gap-3 ${
        alertConf.classes
      } transition-colors duration-300">
         <div className="shrink-0 mt-0.5"><${alertConf.icon} size={20} /></div>
         <div className="text-md">${formatText(alertData.text)}</div>
      </div>`;

        case "code":
          const codeContent =
            typeof block.content === "object"
              ? block.content.code
              : block.content;
          const codeLang =
            typeof block.content === "object"
              ? block.content.language
              : "javascript";
          return `
      <div className="my-6 relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-gray-200 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl blur opacity-20 transition duration-1000 group-hover:opacity-50"></div>
        <pre className="relative language-${codeLang} rounded-xl !bg-[#1a1a1a] !border !border-gray-800 p-5 overflow-x-auto">
          <code className="text-sm font-mono text-gray-200">${codeContent}</code>
        </pre>
      </div>`;

        case "table":
          const tData = block.content;
          const headers = tData.headers
            .map((h) => `<th className="p-3 font-bold">${h}</th>`)
            .join("");
          const rows = tData.rows
            .map(
              (row) =>
                `<tr>${row
                  .map(
                    (cell) =>
                      `<td className="p-3 border-t border-gray-100 dark:border-gray-800">${cell}</td>`
                  )
                  .join("")}</tr>`
            )
            .join("\n          ");

          return `
      <div className="my-8 overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-800">
        <table className="w-full text-left border-collapse bg-white dark:bg-[#121212]">
          <thead className="bg-gray-50 dark:bg-[#1a1a1a]">
            <tr>${headers}</tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </div>`;

        case "video":
          const vidId = getYoutubeId(block.content);
          if (!vidId) return "";
          return `
      <div className="my-8 relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800">
        <iframe
          src="https://www.youtube.com/embed/${vidId}"
          title="YouTube video player"
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>`;

        case "diagram":
          return `
      <div className="my-8 flex justify-center bg-gray-50 dark:bg-[#1a1a1a] p-4 rounded-xl border border-gray-200 dark:border-gray-800 overflow-x-auto">
        <div className="mermaid">
          {\`${block.content}\`}
        </div>
      </div>`;

        case "embed":
          const embedData =
            typeof block.content === "object"
              ? block.content
              : { url: block.content };
          if (!embedData.meta) return "";
          const altText =
            embedData.meta.title ||
            embedData.meta.description ||
            embedData.meta.publisher ||
            "Embedded preview";

          return `
      <div className="my-8">
        <a href="${
          embedData.url
        }" target="_blank" rel="noopener noreferrer" className="block border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-colors bg-white dark:bg-[#121212] text-decoration-none">
            ${
              embedData.meta.image
                ? `<div className="h-48 w-full overflow-hidden border-b border-gray-100 dark:border-gray-800">
                <img alt="${altText}" src="${embedData.meta.image}" className="w-full h-full object-cover m-0" />
            </div>`
                : ""
            }
            <div className="p-4">
                <div className="flex items-center gap-2 mb-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ${
                      embedData.meta.logo
                        ? `<img alt="${altText}" src="${embedData.meta.logo}" className="w-4 h-4 rounded-sm m-0" />`
                        : "🔗"
                    }
                    <span>${embedData.meta.publisher || "Website"}</span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1 text-md m-0 leading-tight">${
                  embedData.meta.title
                }</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 m-0 mt-1">${
                  embedData.meta.description
                }</p>
            </div>
        </a>
      </div>`;

        case "separator":
          const style = block.content || "solid";
          if (style === "whitespace")
            return `<div className="h-24 w-full"></div>`;
          if (style === "dots")
            return `<div className="text-center text-2xl tracking-widest text-gray-300 dark:text-gray-600 font-serif my-8">• • •</div>`;
          if (style === "dotted")
            return `<hr className="border-t-4 border-dotted border-gray-300 dark:border-gray-700 my-8" />`;
          if (style === "dashed")
            return `<hr className="border-t-2 border-dashed border-gray-300 dark:border-gray-700 my-8" />`;
          return `<hr className="border-t border-gray-300 dark:border-gray-700 my-8" />`; // solid default

        default:
          return "";
      }
    })
    .join("\n      ");

  // The Final Component String
  return `import React, { useEffect } from "react";
  import { Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Prism from "prismjs";
import { motion } from "framer-motion";
${hasDiagram ? 'import mermaid from "mermaid";' : ""}
${iconImports}
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-python";
import "prismjs/components/prism-css";

export default function ${componentName}() {
  useEffect(() => {
    Prism.highlightAll();
    ${
      hasDiagram
        ? `mermaid.initialize({ startOnLoad: false, theme: "default" });
    mermaid.run({ querySelector: ".mermaid" });`
        : ""
    }
  }, []);

  return (
    <motion.article 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="
        max-w-4xl mx-auto
        prose dark:prose-invert 
        prose-headings:font-bold
        prose-a:text-blue-600 dark:prose-a:text-blue-400
        prose-img:rounded-xl
      "
    >
      {/* HEADER SECTION */}
      <div className="border-b border-gray-200 dark:border-gray-800 pb-4">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          
          <div className="shrink-0">
             ${
               metadata?.coverImage
                 ? `<img
                 src="${metadata.coverImage}"
                 alt="Cover"
                 className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm"
               />`
                 : `<div className="w-32 h-32 md:w-40 md:h-40 bg-gray-100 dark:bg-[#1a1a1a] rounded-2xl border-2 border-dashed border-gray-200 dark:border-gray-700 flex flex-col items-center justify-center text-gray-400 gap-2">
                 <span className="text-[10px] font-medium uppercase tracking-wider">
                   No Cover
                 </span>
               </div>`
             }
          </div>

          <div className="flex-1 space-y-4 pt-2">
            <h1 className="text-3xl bricolage md:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">
              ${metadata.title}
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
              ${metadata.description}
            </p>
            
        
          </div>
        </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mt-4 mb-4">
               <span>${metadata.date}</span>
               <span>•</span>
               <span>${metadata.readTime} min read</span>
               <span>•</span>
               <span>${metadata.author}</span>
                   <span>•</span>

${socialLinks}
            </div>
          <div className="flex mt-4 flex-wrap gap-2">
              ${metadata.tags
                .map(
                  (t) =>
                    `<span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded-md">${t}</span>`
                )
                .join("\n              ")}
            </div>
      </div>

      <div className="text-gray-600 dark:text-gray-300">
      ${contentJSX}
      </div>
      
    </motion.article>
  );
}`;
};

export const generateJsonEntry = (metadata, id) => {
  return JSON.stringify(
    {
      id: id,
      author: metadata.author || "Bharat Pahwa",
      title: metadata.title,
      excerpt: metadata.description,
      date: metadata.date,
      readTime: metadata.readTime,
      tags: metadata.tags,
      socials: metadata.socials || {},
      image: metadata.coverImage,
      slug: generateSlug(metadata.title),
      componentName: metadata.title.replace(/[^a-zA-Z]/g, ""),
    },
    null,
    2
  );
};
