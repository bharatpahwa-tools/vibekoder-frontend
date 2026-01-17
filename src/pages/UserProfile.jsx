import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import AboutMeSidebar from "../components/blogs/AboutMeSidebar";
import BlogsContainer from "../components/blogs/BlogsContainer";
import Navbar from "../components/blogs/Navbar";
import SuggestionsSidebar from "../components/blogs/SuggestionsSidebar";
import { Button } from "../components/ui/button";
import { apiService } from "../services/api";
import { Loader2 } from "lucide-react";

const UserProfile = () => {
  const { username } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isOwnProfile, setIsOwnProfile] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      try {
        // 1. Fetch Profile Data via n8n
        const profile = await apiService.getUserProfile(username);

        if (!profile) throw new Error("Profile not found");

        // Map snake_case or whatever n8n returns to camelCase
        // Assuming n8n returns the same structure for consistency
        const mappedUser = {
          ...profile,
          name: profile.full_name || profile.name,
          profilePic: profile.avatar_url || profile.profilePic,
          techStack: profile.tech_stack || profile.techStack || [],
          currentFocus: profile.current_focus || profile.currentFocus || [],
        };

        setUser(mappedUser);

        // 2. Check Auth for "Is Own Profile"
        // Since we removed Supabase Auth, we rely on localStorage "session" for MVP
        const storedUserStr = localStorage.getItem("vibekoder_user");
        if (storedUserStr) {
          const storedUser = JSON.parse(storedUserStr);
          // Compare username (unique identifier for this app structure)
          if (storedUser.username === username) {
            setIsOwnProfile(true);
          } else {
            setIsOwnProfile(false);
          }
        } else {
          setIsOwnProfile(false);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchProfile();
    }
  }, [username]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0a0a0a]">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-400" />
      </div>
    );
  }

  if (!user && username) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black/90">
        <div className="text-center">
          <p className="text-zinc-500 mb-4">User @{username} not found.</p>
          <Button onClick={() => navigate("/")}>Go Home</Button>
        </div>
      </div>
    );
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

      <Navbar />

      <div className="max-w-8xl mx-auto no-scrollbar flex items-start justify-center flex-col lg:flex-row border-t border-gray-200 dark:border-[#1e1e1e]">
        {/* LEFT: ABOUT ME SIDEBAR (User Profile) */}
        <div className="lg:block w-full lg:w-80 xl:w-80">
          <AboutMeSidebar user={user} />
        </div>

        {/* CENTER: BLOGS LIST (Main Content) */}
        <div className="flex-1 px-6 sm:px-4 lg:px-4 xl:px-4">
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
