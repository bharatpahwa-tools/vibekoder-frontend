import { motion, AnimatePresence } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiGlobe } from "react-icons/fi";
import ProfilePhoto from "../../assets/images/profile-photo.png";

export default function AboutMeSidebar() {
  // const experiences = [
  //   {
  //     company: "EngageGPT - AI for LinkedIn",
  //     role: "Founder",
  //     duration: "Oct 2025 – Present",
  //     location: "Gurugram, India",
  //   },
  //   {
  //     company: "Xceedance",
  //     roles: [
  //       {
  //         title: "Analyst Programmer L1",
  //         duration: "July 2025 – Present",
  //       },
  //       {
  //         title: "Associate Programmer Intern",
  //         duration: "Jan 2025 – July 2025",
  //       },
  //     ],
  //     location: "Gurugram, India",
  //   },
  //   {
  //     company: "Kasi.Care",
  //     role: "Full Stack Developer Intern",
  //     duration: "Aug 2024 – Oct, 2024",
  //     location: "Remote",
  //   },
  //   {
  //     company: "EJY Health",
  //     roles: [
  //       {
  //         title: "Lead Designer ",
  //         duration: "Nov 2022 – Dec 2022",
  //       },
  //       {
  //         title: "UI/UX Designer Intern",
  //         duration: "July 2022 – Nov 2022",
  //       },
  //     ],
  //     location: "Remote",
  //   },
  // ];

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
            src={ProfilePhoto}
            alt="Bharat Pahwa"
            className="w-24 h-24 rounded-full mb-4 border border-gray-300 dark:border-[#2a2a2a]"
          />

          {/* NAME + TITLE */}
          <h2 className="text-xl instrument-italic font-bold text-gray-900 dark:text-gray-100 mb-1">
            Bharat Pahwa
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
            Building EngageGPT AI for LinkedIn | Full Stack Developer | UI/UX
            Designer
          </p>

          {/* TAGS / TECH STACK */}
          <div className="flex flex-wrap justify-center gap-2 mb-5">
            {[
              "JavaScript",
              "Angular",
              "Express.js",
              "Node.js",
              "React",
              "MongoDB",
              "TypeScript",
              "Tailwind CSS",
              "Docker",
              "n8n",
              "AI Automations",
              "Figma",
              "UX Design",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gradient-to-b from-white/10 to-white/5 dark:from-white/10 dark:to-white/0 text-xs border border-gray-300 dark:border-[#2a2a2a] text-gray-700 dark:text-gray-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex justify-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
            <a
              href="https://github.com/bharat0709"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-gray-100 transition"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/in/bharat-pahwa"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-gray-100 transition"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="mailto:bharatpahwa.work@gmail.com"
              className="hover:text-black dark:hover:text-gray-100 transition"
            >
              <FiMail size={20} />
            </a>
            <a
              href="https://bharatpahwa.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-gray-100 transition"
            >
              <FiGlobe size={20} />
            </a>
          </div>

          <a
            href="https://cal.com/bharat-pahwa/30min"
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

          {/* BASIC INFO */}
          <div className="w-full text-left space-y-4 text-gray-800 dark:text-gray-300">
            <div>
              <h3 className="font-semibold uppercase text-sm text-gray-600 dark:text-gray-400 tracking-wide">
                Location
              </h3>
              <p className="text-sm">Gurugram, India</p>
            </div>

            <div>
              <h3 className="font-semibold text-sm uppercase text-gray-600 dark:text-gray-400 tracking-wide">
                Current Focus
              </h3>
              <p className="text-sm">AI × Design × Development</p>
            </div>
          </div>

          <hr className="my-6 border-gray-200 dark:border-[#1e1e1e]" />

          {/* EXPERIENCE TIMELINE */}
          {/* <div className="w-full text-left space-y-6">
            <h3 className="text-md text-gray-900 dark:text-gray-100 mb-2">
              Experience
            </h3> */}

            {/* <div className="relative pl-6"> */}
              {/* Vertical line */}
              {/* <div className="absolute left-[7px] top-0 h-full w-[2px] bg-black dark:bg-gray-500 rounded-full"></div> */}

              {/* {experiences.map((exp, i) => ( */}
                {/* <div key={i} className="relative pb-6"> */}
                  {/* Circle marker */}
                  {/* <span className="absolute left-[-22px] top-1 w-3 h-3 bg-black dark:bg-white rounded-full border border-white dark:border-[#181818] shadow-md"></span> */}

                  {/* Company Name */}
                  {/* <h4 className="font-semibold text-gray-900 dark:text-gray-300">
                    {exp.company}
                  </h4> */}

                  {/* Role(s) */}
                  {/* {exp.roles ? (
                    exp.roles.map((r, idx) => (
                      <div key={idx} className="ml-3 mt-1">
                        <p className="text-sm font-medium text-gray-800 dark:text-gray-400">
                          {r.title}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          {r.duration} • {exp.location}
                        </p>
                      </div>
                    ))
                  ) : (
                    <div className="ml-3 mt-1">
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-400">
                        {exp.role}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {exp.duration} • {exp.location}
                      </p>
                    </div>
                  )} */}
                {/* </div> */}
            
            {/* </div> */}
          {/* </div> */}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
