import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AboutMeSidebar from "../components/blogs/AboutMeSidebar";
import BlogsContainer from "../components/blogs/BlogsContainer";
import Navbar from "../components/blogs/Navbar"; // Or the main Navbar if preferred, but existing Blogs.js used this
import SuggestionsSidebar from "../components/blogs/SuggestionsSidebar";
import { Button } from "../components/ui/button";

const UserProfile = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isOwnProfile, setIsOwnProfile] = useState(false);

  useEffect(() => {
    // In a real app, we'd fetch by username from API.
    // Here, we check local storage.
    const storedUserStr = localStorage.getItem("vibekoder_user");
    if (storedUserStr) {
      const storedUser = JSON.parse(storedUserStr);
      // Simple check: if the stored user's username matches the URL param, or if we just default to showing the stored user for MVP
      // For this MVP, let's assume we only support the logged-in user or "viewing" them.

      if (storedUser.username === username || !username) {
        setUser(storedUser);
        setIsOwnProfile(true);
      } else {
        // If visiting another user (not implemented really), or just mismatched
        // For now, let's just show the stored user if it exists, effectively mocking "user found"
        // or handle 404.
        // Let's mock that the profile exists if it matches, otherwise null
        if (storedUser.username === username) {
          setUser(storedUser);
        }
      }
    }
  }, [username]);

  if (!user && username) {
    // Fallback if no user found in local storage matching the URL
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <p className="text-zinc-500 mb-4">User @{username} not found.</p>
          <Button onClick={() => navigate("/")}>Go Home</Button>
        </div>
      </div>
    );
  }

  // If no username param was passed (e.g. /profile route if kept), fallback to stored user
  if (!user && !username) {
    const storedUserStr = localStorage.getItem("vibekoder_user");
    if (storedUserStr) {
      const u = JSON.parse(storedUserStr);
      // Redirect to /:username
      // returning null while redirecting
      // We can't easily redirect inside render, so we'll just render it for now or use useEffect
      // better to just render it.
      // user = u; // can't assign to state variable
    }
  }

  return (
    <div className="min-h-screen no-scrollbar bg-white dark:bg-black/90 transition-colors duration-300">
      <Helmet>
        <title>
          {user ? `${user.name} (@${user.username})` : "Profile"} | VibeKoder
        </title>
        <meta
          name="description"
          content={user?.bio || "VibeKoder User Profile"}
        />
      </Helmet>

      {/* Reusing the Blog Navbar or Main Navbar? User said "whole Blogs Present in the COmpoenets FOdler" */}
      <Navbar />

      <div className="max-w-8xl mx-auto no-scrollbar flex items-start justify-center flex-col lg:flex-row border-t border-gray-200 dark:border-[#1e1e1e]">
        {/* LEFT: ABOUT ME SIDEBAR (User Profile) */}
        <div className="lg:block w-full lg:w-80 xl:w-80">
          <AboutMeSidebar user={user} />
        </div>

        {/* CENTER: BLOGS LIST (Main Content) */}
        <div className="flex-1 px-6 sm:px-4 lg:px-4 xl:px-4">
          {/* Passing empty array for blogs for now as per MVP requirements */}
          {/* Logic to create new blogs if empty is handled inside BlogsContainer */}
          <BlogsContainer blogs={[]} isOwnProfile={isOwnProfile} />
        </div>

        {/* RIGHT: SUGGESTED SECTION */}
        <div className="hidden xl:block w-80 border-l border-gray-200 dark:border-[#1e1e1e]">
          <SuggestionsSidebar />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
