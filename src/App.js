import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { Toaster } from "./components/ui/sonner";
import "./App.css";
import CreatorStudio from "./components/editor/CreatorStudio";
import Blogs from "./pages/Blogs";
import ArticlePage from "./pages/ArticlePage";
import ToolsPage from "./pages/ToolsPage";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create" element={<CreatorStudio />} />
          <Route path="/:username" element={<UserProfile />} />
          <Route path="/:username/blogs/:slug" element={<ArticlePage />} />
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
