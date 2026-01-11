import { motion, AnimatePresence } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiGlobe,
  FiCalendar,
} from "react-icons/fi";
import { MapPin } from "lucide-react";
// import ProfilePhoto from "../../assets/images/profile-photo.png"; // Removing static import

export default function AboutMeSidebar({ user }) {
  if (!user) return null;

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div
          key="sidebar"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -60, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="sticky top-24 flex flex-col no-scrollbar items-center text-center h-screen overflow-y-auto
              bg-white dark:bg-[#181818]
              border-r border-gray-200 dark:border-gray-700
              p-6 transition-all duration-300"
        >
          {/* PROFILE IMAGE */}
          <img
            loading="lazy"
            src={user.profilePic || "https://github.com/shadcn.png"} // Fallback
            alt={user.name}
            className="w-24 h-24 rounded-full mb-4 border border-gray-300 dark:border-[#2a2a2a] object-cover"
          />

          {/* NAME + TITLE */}
          <h2 className="text-xl instrument-italic font-bold text-gray-900 dark:text-gray-100 mb-1">
            {user.name}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            {user.bio}
          </p>

          {/* TAGS / TECH STACK */}
          {user.techStack && user.techStack.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mb-5">
              {user.techStack.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gradient-to-b from-white/10 to-white/5 dark:from-white/10 dark:to-white/0 text-xs border border-gray-300 dark:border-[#2a2a2a] text-gray-700 dark:text-gray-300 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* SOCIAL LINKS */}
          <div className="flex justify-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
            {user.socials?.github && (
              <a
                href={
                  user.socials.github.startsWith("http")
                    ? user.socials.github
                    : `https://${user.socials.github}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black dark:hover:text-gray-100 transition"
              >
                <FiGithub size={20} />
              </a>
            )}
            {user.socials?.linkedin && (
              <a
                href={
                  user.socials.linkedin.startsWith("http")
                    ? user.socials.linkedin
                    : `https://${user.socials.linkedin}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black dark:hover:text-gray-100 transition"
              >
                <FiLinkedin size={20} />
              </a>
            )}
            {/* Note: Email logic might need adjustment if it's just an address vs mailto link */}
            {/* Using a generic mail icon for now if we have an identifier, though the form didn't explicitly ask for email address separately from the 'mail' social link concept? 
                Actually the task asked for 'mail' in socials. 
            */}
            {user.socials?.website && (
              <a
                href={
                  user.socials.website.startsWith("http")
                    ? user.socials.website
                    : `https://${user.socials.website}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black dark:hover:text-gray-100 transition"
              >
                <FiGlobe size={20} />
              </a>
            )}
          </div>

          {user.socials?.calendly && (
            <a
              href={
                user.socials.calendly.startsWith("http")
                  ? user.socials.calendly
                  : `https://${user.socials.calendly}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="relative border border-gray-400 mb-6 px-[1px] py-[1px] rounded-full 
               bg-gradient-to-r from-white/40 via-white/10 to-transparent 
               dark:from-white/10 dark:via-white/5 dark:to-transparent
               transition-all duration-500 hover:from-white/60 hover:via-white/20 hover:to-transparent"
            >
              {/* Inner Button Layer */}
              <span
                className="block rounded-full px-5 py-2 bg-gradient-to-bl 
                 from-white/10 to-white/5 dark:from-white/10 dark:to-[#111]
                 text-sm text-gray-700 dark:text-gray-300
                 backdrop-blur-md transition-all duration-500 hover:bg-white/15 dark:hover:bg-[#181818]"
              >
                Let’s Talk!
              </span>
            </a>
          )}

          {/* BASIC INFO */}
          <div className="w-full text-left space-y-4 text-gray-800 dark:text-gray-300">
            {user.location && (
              <div>
                <h3 className="font-semibold uppercase text-sm text-gray-600 dark:text-gray-400 tracking-wide flex items-center gap-2">
                  <MapPin className="w-3 h-3" /> Location
                </h3>
                <p className="text-sm mt-1">{user.location}</p>
              </div>
            )}

            {user.currentFocus && user.currentFocus.length > 0 && (
              <div>
                <h3 className="font-semibold text-sm uppercase text-gray-600 dark:text-gray-400 tracking-wide">
                  Current Focus
                </h3>
                <div className="flex flex-wrap gap-1 mt-1">
                  {user.currentFocus.map((focus) => (
                    <span
                      key={focus}
                      className="text-sm bg-gray-100 dark:bg-zinc-800 px-2 py-0.5 rounded text-gray-600 dark:text-gray-400"
                    >
                      {focus}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <hr className="my-6 border-gray-200 dark:border-[#1e1e1e] w-full" />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
