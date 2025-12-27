import { Helmet } from "react-helmet-async";
import AboutMeSidebar from "./AboutMeSidebar";
import BlogsContainer from "./BlogsContainer";
import Navbar from "./Navbar";
import SuggestionsSidebar from "./SuggestionsSidebar";

export default function Blogs() {
  return (
    <div className="min-h-screen no-scrollbar bg-white dark:bg-black/90 transition-colors duration-300">
      {/* NAVBAR */}
      <Helmet>
        <title>Blogs by Bharat Pahwa</title>
        <meta
          name="description"
          content="Developer blogs covering n8n, Docker, Ngrok, backend, frontend, automation and more."
        />
        <meta property="og:title" content="Blogs by Bharat Pahwa" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      {/* MAIN LAYOUT CONTAINER */}
      <div className="max-w-8xl mx-auto no-scrollbar  flex items-start justify-center flex-col lg:flex-row  border-t border-gray-200 dark:border-[#1e1e1e]">
        {/* LEFT: ABOUT ME SIDEBAR */}
        <div className="lg:block w-full lg:w-80 xl:w-80">
          <AboutMeSidebar />
        </div>

        {/* CENTER: BLOGS LIST */}
        <div className="flex-1 px-6 sm:px-4 lg:px-4 xl:px-4">
          <BlogsContainer />
        </div>

        {/* RIGHT: SUGGESTED / RECOMMENDED SECTION */}
        <div className="xl:block w-80 border-l border-gray-200 dark:border-[#1e1e1e]">
          <SuggestionsSidebar />
        </div>
      </div>
    </div>
  );
}
