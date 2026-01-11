import React, { useEffect } from "react";
import { Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Prism from "prismjs";
import { motion } from "framer-motion";

import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-json";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-python";
import "prismjs/components/prism-css";

export default function BrowserstackInterviewPrepSDE() {
  useEffect(() => {
    Prism.highlightAll();
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
            <img
              src="https://media.licdn.com/dms/image/v2/D560BAQFHcmTInpwJOQ/company-logo_200_200/B56ZmBXnzGKEAQ-/0/1758812077808/browserstack_logo?e=1768435200&v=beta&t=P2bbv04fusPZV9lb4hWAjRO0Pnb3KueOWIqsfqtu1r0"
              alt="Cover"
              className="w-32 h-32 md:w-40 md:h-40 object-cover rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm"
            />
          </div>

          <div className="flex-1 space-y-4 pt-2">
            <h1 className="text-3xl bricolage md:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight">
              Browserstack Interview Prep | SDE 1
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
              BrowserStack is the world’s leading software testing platform,
              powered by AI and trusted by over 50,000 teams, including Amazon,
              Microsoft, and NVIDIA, to deliver quality software at speed.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mt-4 mb-4">
          <span>2025-12-08</span>
          <span>•</span>
          <span>10 min read</span>
          <span>•</span>
          <span>Bharat Pahwa</span>
          <span>•</span>

          <a
            href="https://linkedin.com/in/bharat-pahwa"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={16} />
          </a>

          <a
            href="https://github.com/bharat0709"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={16} />
          </a>
        </div>
        <div className="flex mt-4 flex-wrap gap-2">
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded-md">
            browserstack
          </span>
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded-md">
            interview
          </span>
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded-md">
            sde1
          </span>
          <span className="px-2.5 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded-md"></span>
        </div>
      </div>

      <div className="text-gray-600 dark:text-gray-300">
        <h3
          id="referral-sheet-"
          className="text-xl font-medium mb-3 mt-6 text-gray-800 dark:text-gray-100 transition-colors duration-300"
        >
          Referral Sheet -
        </h3>

        <div className="my-8">
          <a
            href="https://docs.google.com/spreadsheets/d/1CJ_iLtgL2tLcFa0Fp1sbXkMAYEAL66uFl0RadRGet2M/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-colors bg-white dark:bg-[#121212] text-decoration-none"
          >
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                <img
                  alt="Google Sheets: Sign-in"
                  src="https://www.google.com/favicon.ico"
                  className="w-4 h-4 rounded-sm m-0"
                />
                <span>google.com</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1 text-md m-0 leading-tight">
                Google Sheets: Sign-in
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 m-0 mt-1">
                Access Google Sheets with a personal Google account or Google
                Workspace account (for business use).
              </p>
            </div>
          </a>
        </div>
        <h2
          id="round-1-machine-coding-35-hours"
          className="font-semibold text-2xl mb-4 mt-4 text-gray-900 dark:text-white transition-colors duration-300"
        >
          Round 1: Machine Coding (3.5 hours)
        </h2>
        <p className="mb-5 text-md leading-relaxed text-gray-600 dark:text-gray-300 transition-colors duration-300">
          This was a group coding round. All candidates initially joined a
          common meeting and were later split into individual rooms to work on
          the assignments.
          <br />
          <br />
          There were two separate tasks — one focused on the backend, and the
          other on the frontend:
          <br />
          <br />
          Backend Task (1.5 hours):
          <br />
          We were asked to build a log file reader application that could
          broadcast real-time updates to clients using sockets.
          <br />
          Frontend Task:
          <br />
          We were given a Figma design and asked to implement a pixel-perfect UI
          to display the logs coming from the backend. The application also
          needed to handle certain scroll behaviors as per the requirements.
        </p>
        <h3
          id="exp-23-r1-"
          className="text-xl font-medium mb-3 mt-6 text-gray-800 dark:text-gray-100 transition-colors duration-300"
        >
          Exp - 2,3 R1 :
        </h3>
        <p className="mb-5 text-md leading-relaxed text-gray-600 dark:text-gray-300 transition-colors duration-300">
          This problem requires you to implement a log watching solution
          (similar to the tail -f command in UNIX). However, in this case, the
          log file is hosted on a remote machine (same machine as your server
          code). The log file is in append-only mode.
          <br />
          <br />
          You have to implement the following:
          <br />
          <br />A server side program to monitor the given log file and capable
          of streaming updates that happen in it. This will run on the same
          machine as the log file. You may implement the server in any
          programming language.
          <br />
          <br />A web based client (accessible via URL like
          http://localhost/log) that prints the updates in the file as and when
          they happen and NOT upon page refresh. The page should be loaded once
          and it should keep getting updated in real-time. The user sees the
          last 10 lines in the file when he lands on the page.
          <br />
          <br />
          Problem Constraints
          <br />
          <br />
          The server should push updates to the clients as we have to be as real
          time as possible.
          <br />
          Be aware that the log file may be several GB, how to optimise for
          retrieving the last 10 lines?
          <br />
          The server should not retransmit the entire file every time. It should
          only send the updates.
          <br />
          The server should be able to handle multiple clients at the same time.
          <br />
          The web page should not stay in loading state post the first load and
          it should not reload thereafter as well.
          <br />
          You may not use off-the-shelf external libraries or tools to read the
          file or provide tail-like functionalities.
        </p>

        <div className="my-8">
          <a
            href="https://medium.com/@ibrahimanis/implement-log-watcher-similar-to-tail-f-command-7b0674d4b767"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-colors bg-white dark:bg-[#121212] text-decoration-none"
          >
            <div className="h-48 w-full overflow-hidden border-b border-gray-100 dark:border-gray-800">
              <img
                alt="Part 1: Implement Log Watcher (similar to tail -f command)"
                src="https://miro.medium.com/v2/resize:fit:1200/1*aWOSOJwglsyhZ5Bj2_RsgQ.png"
                className="w-full h-full object-cover m-0"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                <img
                  alt="Part 1: Implement Log Watcher (similar to tail -f command)"
                  src="https://miro.medium.com/v2/resize:fill:304:304/10fd5c419ac61637245384e7099e131627900034828f4f386bdaa47a74eae156"
                  className="w-4 h-4 rounded-sm m-0"
                />
                <span>Medium</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1 text-md m-0 leading-tight">
                Part 1: Implement Log Watcher (similar to tail -f command)
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 m-0 mt-1">
                Problem statement
              </p>
            </div>
          </a>
        </div>
        <h2
          id="round-2-hiring-manager-interview-45-minutes"
          className="font-semibold text-2xl mb-4 mt-4 text-gray-900 dark:text-white transition-colors duration-300"
        >
          Round 2: Hiring Manager Interview (45 minutes)
        </h2>
        <p className="mb-5 text-md leading-relaxed text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Next round with two Engineering Managers
        </p>
        <p className="mb-5 text-md leading-relaxed text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Explain my approach to count the occurrences of a word in a text file,
          followed by how that approach would change if the file size scaled
          from a few MBs to a few GBs. We discussed various optimization
          techniques, including the use of concurrency and multithreading.
          <br />
          <br />
          The interview concluded with some culture-fit questions, such as:
          <br />
          <br />
          “Describe a time when you had a conflict with a colleague or senior.
          How did you handle it?”
        </p>
        <h3
          id="exp-2-r2"
          className="text-xl font-medium mb-3 mt-6 text-gray-800 dark:text-gray-100 transition-colors duration-300"
        >
          Exp - 2 R2:
        </h3>
        <p className="mb-5 text-md leading-relaxed text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Design database for Twitter with given requirements:
          <br />
          <br />
          User should be able to - follow unfollow
          <br />
          User should be able to send tweets
          <br />
          User should be able to see his profile page - his tweets only
          <br />
          User should be able to see Home Screen, everyones tweets..
          <br />
          After giving ER diagram for above requirements, additional requirement
          was added.
          <br />
          <br />
          Add Like feature
          <br />
          we should be able to see the total number of links, when a user clicks
          on it, he should be able to see who all have liked his tweets
          <br />
          How to handle celebrity problem, how to effectively find number of
          likes on celebrity posts
        </p>
        <h3
          id="exp-3-r2"
          className="text-xl font-medium mb-3 mt-6 text-gray-800 dark:text-gray-100 transition-colors duration-300"
        >
          Exp 3 R2:{" "}
        </h3>
        <ul className="list-disc list-outside pl-6 space-y-2 mb-6 text-gray-700 dark:text-gray-300 marker:text-gray-400 transition-colors duration-300">
          <li className="pl-2">1) Your favorite internship project.</li>
          <li className="pl-2">
            2) Questions on a personal project and what if we do a change how
            will you handle it.
          </li>
          <li className="pl-2">3) Strengths and Weaknesses.</li>
          <li className="pl-2">
            4) Gave a problem to bring all zeros at the start of an array had to
            solve it in O(n) time and O(1) space.
          </li>
          <li className="pl-2">
            5) Gave a Data Structure design problem where we can query
            everything in O(1) time.{" "}
          </li>
          <li className="pl-2">
            6) Huge file handling like we have 1 TB of the file and you have to
            count occurrences of words with limited RAM say you have only 8 GB
            of RAM. How will you process it?{" "}
          </li>
        </ul>
        <h2
          id="round-3-director-of-engineering-doe-interview"
          className="font-semibold text-2xl mb-4 mt-4 text-gray-900 dark:text-white transition-colors duration-300"
        >
          Round 3: Director of Engineering (DOE) Interview
        </h2>
        <p className="mb-5 text-md leading-relaxed text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Current work experience description
          <br />
          <br />
          Describe a recent technical problem that you solved, what was the
          problem, what all different approaches you considered, what were pros
          and cons of each, which one was chosen (detailed discussion for almost
          30 mins)
          <br />
          If you have to host a website locally and let other users use it, what
          would you do
          <br />
          Private IP vs Public IP, Network Address Translation (NAT)\
        </p>
        <p className="mb-5 text-md leading-relaxed text-gray-600 dark:text-gray-300 transition-colors duration-300">
          After introductions, we talked about my past projects and tech stack.
          <br />
          <br />I was asked:
          <br />
          <br />
          “If you built an application that suddenly went viral overnight, how
          would you ensure it continued to function smoothly? How would you
          handle alerting, monitoring, and critical error cases?”
          <br />
          <br />
          This round went well, and I received positive feedback.
        </p>
        <h3
          id="exp-2-r3"
          className="text-xl font-medium mb-3 mt-6 text-gray-800 dark:text-gray-100 transition-colors duration-300"
        >
          Exp 2 R3:{" "}
        </h3>
        <p className="mb-5 text-md leading-relaxed text-gray-600 dark:text-gray-300 transition-colors duration-300"></p>
        <ul className="list-disc list-outside pl-6 space-y-2 mb-6 text-gray-700 dark:text-gray-300 marker:text-gray-400 transition-colors duration-300">
          <li className="pl-2">1) About projects</li>
          <li className="pl-2">2) Failed project.</li>
          <li className="pl-2">3) HTTP vs HTTPS. </li>
          <li className="pl-2">4) HTTP error codes.</li>
          <li className="pl-2">5) What is User-Agent in HTTP header? </li>
          <li className="pl-2">
            6) What will you do if your manager asked you to use C++ and you
            prefer Python?
          </li>
          <li className="pl-2">
            7) If you are given a problem and your manager is too busy and you
            have to solve it independently then how will you deal with it?
          </li>
          <li className="pl-2">
            8) What are the points that you will take into consideration if you
            have to deploy a system into production?
          </li>
          <li className="pl-2">
            9) What kind of logs will you send out while building your system so
            it is helpful in monitoring in the future?{" "}
          </li>
          <li className="pl-2">10) Database scaling. </li>
        </ul>
        <h2
          id="more-experiences-and-questions"
          className="font-semibold text-2xl mb-4 mt-4 text-gray-900 dark:text-white transition-colors duration-300"
        >
          More Experiences and Questions
        </h2>

        <div className="my-8">
          <a
            href="https://interviewexperiences.in/experience/browserstack/browserstack-interview-experience-sde-1-backend"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-colors bg-white dark:bg-[#121212] text-decoration-none"
          >
            <div className="h-48 w-full overflow-hidden border-b border-gray-100 dark:border-gray-800">
              <img
                alt="Browserstack Sde 1 - Ba - Browserstack | Interview Experiences"
                src="https://interviewexperiences.in/opengraph-image"
                className="w-full h-full object-cover m-0"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                <img
                  alt="Browserstack <> Sde 1 - Ba - Browserstack | Interview Experiences"
                  src="https://interviewexperiences.in/icon-512.png"
                  className="w-4 h-4 rounded-sm m-0"
                />
                <span>Interview Experiences</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1 text-md m-0 leading-tight">
                Browserstack Sde 1 - Ba - Browserstack | Interview Experiences
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 m-0 mt-1">
                I successfully cleared a five-round interview process at
                BrowserStack for an SDE 1 - Backend role, despite an extended
                bar... SDE 1 - Backend at Browserstack.
              </p>
            </div>
          </a>
        </div>

        <div className="my-8">
          <a
            href="https://www.geeksforgeeks.org/interview-experiences/browserstack-interview-experience-fresher/"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-colors bg-white dark:bg-[#121212] text-decoration-none"
          >
            <div className="h-48 w-full overflow-hidden border-b border-gray-100 dark:border-gray-800">
              <img
                alt="BrowserStack Interview Experience | Fresher - GeeksforGeeks"
                src="http://www.geeksforgeeks.org/wp-content/uploads/gfg_200X200-1.png"
                className="w-full h-full object-cover m-0"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                <img
                  alt="BrowserStack Interview Experience | Fresher - GeeksforGeeks"
                  src="https://www.geeksforgeeks.org/wp-content/uploads/gfg_200X200.png"
                  className="w-4 h-4 rounded-sm m-0"
                />
                <span>GeeksforGeeks</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1 text-md m-0 leading-tight">
                BrowserStack Interview Experience | Fresher - GeeksforGeeks
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 m-0 mt-1">
                Your All-in-One Learning Portal: GeeksforGeeks is a
                comprehensive educational platform that empowers learners across
                domains-spanning computer science and programming, school
                education, upskilling, commerce, software tools, competitive
                exams, and more.
              </p>
            </div>
          </a>
        </div>
        <hr className="border-t border-gray-300 dark:border-gray-700 my-8" />
        <p className="mb-5 text-md leading-relaxed text-gray-600 dark:text-gray-300 transition-colors duration-300">
          Careers Page
        </p>

        <div className="my-8">
          <a
            href="https://browserstack.wd3.myworkdayjobs.com/External"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-colors bg-white dark:bg-[#121212] text-decoration-none"
          >
            <div className="h-48 w-full overflow-hidden border-b border-gray-100 dark:border-gray-800">
              <img
                alt="Careers"
                src="https://browserstack.wd3.myworkdayjobs.com/External/assets/logo"
                className="w-full h-full object-cover m-0"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                <img
                  alt="Careers"
                  src="https://browserstack.wd3.myworkdayjobs.com/favicon.ico"
                  className="w-4 h-4 rounded-sm m-0"
                />
                <span>myworkdayjobs.com</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1 text-md m-0 leading-tight">
                Careers
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 m-0 mt-1">
                At BrowserStack we’re building the testing infrastructure for
                the world. We’re extremely curious, passionate, and
                customer-obsessed about our mission of empowering developers to
                build amazing experiences. We know we’ll grow only when our
                people grow—so we build teams that are open, transparent,
                collaborative, and above all supportive. We’re remote-first,
                giving our people the choice to work from the setting that suits
                them best - whether that’s at home or in a co-working space.
                It’s our core values that bring us all together and drive
                everything we do. We’re thinkers, movers, innovators, and doers
                who believe no feat is too big to achieve. We strive to deliver
                awesome results, fast; and in that way, we’re a lot like you.
              </p>
            </div>
          </a>
        </div>
        <hr className="border-t border-gray-300 dark:border-gray-700 my-8" />

        <div className="my-8">
          <a
            href="https://www.youtube.com/c/browserstack"
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition-colors bg-white dark:bg-[#121212] text-decoration-none"
          >
            <div className="h-48 w-full overflow-hidden border-b border-gray-100 dark:border-gray-800">
              <img
                alt="BrowserStack"
                src="https://yt3.googleusercontent.com/ytc/AIdro_mvyVM-FrMZsHdBPYRzoO6XpI7tPpQ2NCvQ5govX4dXgA=s900-c-k-c0x00ffffff-no-rj"
                className="w-full h-full object-cover m-0"
              />
            </div>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2 text-xs font-medium text-gray-500 uppercase tracking-wider">
                <img
                  alt="BrowserStack"
                  src="https://www.youtube.com/s/desktop/a3c20ab4/img/favicon_144x144.png"
                  className="w-4 h-4 rounded-sm m-0"
                />
                <span>YouTube</span>
              </div>
              <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1 text-md m-0 leading-tight">
                BrowserStack
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 m-0 mt-1">
                BrowserStack is the world’s leading software testing platform,
                powered by AI and trusted by over 50,000 teams, including
                Amazon, Microsoft, and NVIDIA, to deliver quality software at
                speed. With a community of over 9 million registered developers
                and testers, we power 3 million+ tests every day across 21
                global data centers. Our platform provides instant access to
                30,000+ real devices and browsers, eliminating the need for
                in-house test infrastructure. BrowserStack supports the entire
                testing lifecycle with scalable solutions for functional,
                visual, performance, and accessibility testing, alongside
                powerful test management and debugging tools. With AI Agents
                built into key workflows, teams can debug faster, automate
                smarter, and release with confidence.
              </p>
            </div>
          </a>
        </div>
      </div>
    </motion.article>
  );
}
