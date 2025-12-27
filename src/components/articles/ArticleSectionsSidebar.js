import { useEffect, useState } from "react";

export default function ArticleSectionsSidebar() {
  const [sections, setSections] = useState([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const headings = Array.from(
      document.querySelectorAll("article h1, article h2, article h3")
    ).map((h) => ({
      id: h.id,
      label: h.innerText,
      level: h.tagName.toLowerCase(), // h1/h2/h3
    }));

    setSections(headings);
  }, []);

  // Active section highlight
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    document
      .querySelectorAll("article h1, article h2, article h3")
      .forEach((el) => observer.observe(el));

    return () =>
      document
        .querySelectorAll("article h1, article h2, article h3")
        .forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <aside className="p-6 text-sm  no-scrollbar text-gray-700  overflow-y-scroll h-screen  dark:text-gray-300 space-y-3 sticky top-24">
      <h3 className="text-gray-900 dark:text-gray-100 font-semibold mb-3">
        Sections
      </h3>

      <ul className="space-y-2 no-scrollbar">
        {sections.map((s, i) => (
          <li key={i}>
            <a
              href={`#${s.id}`}
              className={`
                  block transition
                  ${
                    activeId === s.id
                      ? "text-black dark:text-white font-semibold"
                      : "text-gray-600 dark:text-gray-400"
                  }
                `}
              style={{
                paddingLeft: s.level === "h2" ? 8 : s.level === "h3" ? 16 : 0,
              }}
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
