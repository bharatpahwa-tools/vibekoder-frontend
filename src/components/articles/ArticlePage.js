import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";
import ArticleSectionsSidebar from "./ArticleSectionsSidebar";
import SuggestionsSidebar from "../blogs/SuggestionsSidebar";
import { ArticleComponents } from "../blogsData";
import blogs from "../blogsData/blogs.json"; // Using ES6 import for JSON

export default function ArticlePage() {
  const { slug } = useParams();
  const article = blogs.find((a) => a.slug === slug);

  if (!article)
    return <div className="text-center py-20">Article not found</div>;

  // --- SEO PREPARATION ---
  const siteUrl = "https://bharatpahwa.dev";
  const seoTitle = article.title;
  const seoDesc =
    article.excerpt || "Read this article on Bharat Pahwa's Blog.";

  // Smart Image Handling: Checks if image is external (like your Udemy link) or local
  const seoImage = article.image.startsWith("http")
    ? article.image
    : `${siteUrl}${article.image}`;

  const seoUrl = `${siteUrl}/blog/${article.slug}`;
  const publishDate = article.date
    ? new Date(article.date).toISOString()
    : new Date().toISOString();

  // Parsing "5 min read" to ISO 8601 Duration (PT5M) for Google Schema
  const readTimeNum = parseInt(article.readTime);
  const isoTimeRequired = !isNaN(readTimeNum) ? `PT${readTimeNum}M` : undefined;

  // Dynamic JSON-LD Schema (The secret sauce for Google Rich Results)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": seoUrl,
    },
    headline: seoTitle,
    description: seoDesc,
    image: [seoImage],
    datePublished: publishDate,
    dateModified: publishDate, // Update this if you track edits
    author: {
      "@type": "Person",
      name: article.author,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: article.author,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    ...(isoTimeRequired && { timeRequired: isoTimeRequired }),
  };

  const Component = ArticleComponents[article.componentName];

  return (
    <div className="min-h-screen bg-white dark:bg-[#121212] transition-colors duration-300">
      {/* --- SEO HEAD --- */}
      <Helmet>
        {/* Standard Metadata */}
        <title>{seoTitle} | Bharat Pahwa</title>
        <meta name="description" content={seoDesc} />
        {article.tags && (
          <meta name="keywords" content={article.tags.join(", ")} />
        )}
        <meta name="author" content="Bharat Pahwa" />
        <link rel="canonical" href={seoUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDesc} />
        <meta property="og:image" content={seoImage} />
        <meta property="og:url" content={seoUrl} />
        <meta property="og:site_name" content="Bharat Pahwa Portfolio" />

        {/* Article Specific Tags */}
        <meta property="article:published_time" content={publishDate} />
        <meta property="article:author" content="Bharat Pahwa" />
        {article.tags?.map((tag) => (
          <meta property="article:tag" content={tag} key={tag} />
        ))}

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDesc} />
        <meta name="twitter:image" content={seoImage} />
        <meta name="twitter:creator" content="@BharatPahwa" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navbar />

      {/* MAIN CONTENT LAYOUT */}
      <div className="max-w-8xl mx-auto flex items-start justify-center flex-col lg:flex-row gap-2 lg:gap-6 xl:gap-8 px-4 sm:px-6 lg:px-8 py-6 border-t border-gray-200 dark:border-[#1e1e1e]">
        {/* LEFT: ARTICLE SECTIONS / OUTLINE */}
        <div className="hidden lg:block w-72 no-scrollbar border-r border-gray-200 dark:border-[#1e1e1e] sticky top-24 max-h-[80vh] overflow-y-auto custom-scrollbar">
          <ArticleSectionsSidebar />
        </div>

        {/* CENTER: MAIN ARTICLE CONTENT */}
        <main className="flex-1 max-w-4xl px-2 sm:px-4 w-full">
          {Component ? (
            <Component />
          ) : (
            <p className="text-gray-500">Content loading...</p>
          )}
        </main>

        {/* RIGHT: SUGGESTED ARTICLES */}
        <div className="hidden xl:block w-80 border-l border-gray-200 dark:border-[#1e1e1e] sticky top-24">
          <SuggestionsSidebar />
        </div>
      </div>
    </div>
  );
}
