import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { Toaster } from "./components/ui/sonner";
import "./App.css";
import CreatorStudio from "./components/editor/CreatorStudio";
import Blogs from "./components/blogs/Blogs";
import ArticlePage from "./components/articles/ArticlePage";
import ToolsPage from "./components/tools/ToolsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create" element={<CreatorStudio />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:slug" element={<ArticlePage />} />
          <Route path="/tools" element={<ToolsPage />} />
        </Routes>
      </Router>
      <Toaster />
    </div>
  );
}

export default App;
